// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
  {
    // eslint-config-expo (SDK 57) pulls in eslint-plugin-react-hooks' React Compiler rules.
    // They don't recognize Reanimated shared values or the RN Animated ref pattern as valid
    // mutation targets, and set-state-in-effect flags the standard prop-to-state sync pattern
    // used across this codebase (including Expo's own useColorScheme.web.ts template).
    rules: {
      'react-hooks/immutability': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]);
