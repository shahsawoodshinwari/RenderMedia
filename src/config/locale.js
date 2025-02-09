import appConfig from '@/config/app'

// Get saved language or default to application locale
const savedLang = localStorage.getItem('lang') || appConfig.locale

// Ensure it's a supported language
const defaultLang = appConfig.supported_locales.includes(savedLang) ? savedLang : appConfig.locale

document.documentElement.lang = defaultLang
document.documentElement.dir = defaultLang === 'ar' ? 'rtl' : 'ltr'

export default defaultLang
