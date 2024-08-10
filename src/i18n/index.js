import { createI18n } from "vue-i18n";
import uz from './locales/uz.json'
import ru from './locales/ru.json'

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    messages: {uz,ru}
})
