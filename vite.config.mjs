/* eslint-env node */
import { defineBaseConfig } from '@padcom/vite-config-default'
import { defineVueBaseConfig } from '@padcom/vite-config-vue'

import pkg from './package.json' assert { type: 'json' }

export default defineBaseConfig(pkg, defineVueBaseConfig({
  define: {
    // Enable / disable Options API support
    __VUE_OPTIONS_API__: true,
    // Enable / disable devtools support in production
    __VUE_PROD_DEVTOOLS__: false,
    // Enable / disable detailed warnings for hydration mismatches in production
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
}))
