import { createI18n } from "vue-i18n";
import uz from './locales/uz.json'

export default createI18n({
    locale: import.meta.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.VITE_FALLBACK_LOCALE,
    legacy: false,
    messages: {uz}
})