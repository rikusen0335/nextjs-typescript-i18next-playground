import 'i18next'

// import all namespaces (for the default language, only)
import general from '../public/locales/en/general.json'

// refs: also: https://www.i18next.com/overview/typescript#argument-of-type-defaulttfuncreturn-is-not-assignable-to-parameter-of-type-xyz
declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    returnNull: false
    returnObjects: false
    // custom namespace type, if you changed it
    defaultNS: 'general'
    // custom resources type
    resources: {
      general: typeof general
    }
  }
}
