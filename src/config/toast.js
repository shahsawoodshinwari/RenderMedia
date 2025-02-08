import i18n from '@/i18n'

const toastConfig = {
  closeButton: false,
  icon: false,
  hideProgressBar: true,
  rtl: i18n.global.locale === 'ar',
}

export default toastConfig
