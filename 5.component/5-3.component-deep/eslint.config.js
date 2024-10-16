import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    name: 'app/rules',
    rules: {
      'no-unused-vars': 'off',
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]
