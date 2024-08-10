import { useI18n } from "vue-i18n"

const { availableLocales, locale } = useI18n()


const getUserLocale = () => {
    const locale = window.navigator.language ||
        window.navigator.userLanguage ||
        import.meta.env.VITE_DEFAULT_LOCALE

    return {
        locale: locale,
        localeNoRegion: locale.split('-')[0]
    }
}

const isLocaleSupported = (locale) => {
    return availableLocales.includes(locale)
}

export const guessDefaultLanguage = () => {
    const userPersistedLocale = localStorage.getItem('lang')
    if (isLocaleSupported(userPersistedLocale)) return userPersistedLocale

    const userPreferredLocale = getUserLocale()

    if (isLocaleSupported(userPersistedLocale.locale)) return userPreferredLocale.locale
    if (isLocaleSupported(userPersistedLocale.localeNoRegion)) return userPersistedLocale.localeNoRegion

    return import.meta.env.VITE_DEFAULT_LOCALE

}

export const switchLanguage = (passedLocale) => {
    if (isLocaleSupported(passedLocale)) {
        locale.value = passedLocale
        document.querySelector("html").setAttribute("lang", passedLocale)
        localStorage.setItem('lang', passedLocale)
    }
    guessDefaultLanguage()
}

export const routeMiddleware = (to, _from, next) =>{
    const paramLocale = to.params.locale

    if (!isLocaleSupported(paramLocale)) {
        return next(guessDefaultLocale())
    }

    switchLanguage(paramLocale)

    return next()
}