let defaultLang = 'ar'

// Get saved language or default to browser language
const savedLang = localStorage.getItem('lang') || defaultLang

// Ensure it's a supported language
defaultLang = ['en', 'ar'].includes(savedLang) ? savedLang : defaultLang

document.documentElement.lang = defaultLang
document.documentElement.dir = defaultLang === 'ar' ? 'rtl' : 'ltr'

export default defaultLang
