import i18n from "@/i18n"


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
    return i18n.global.availableLocales.includes(locale)
}

export const guessDefaultLocale = () => {
    const userPersistedLocale = localStorage.getItem('lang')
    if (isLocaleSupported(userPersistedLocale)) return userPersistedLocale

    const userPreferredLocale = getUserLocale()

    if (isLocaleSupported(userPersistedLocale.locale)) return userPreferredLocale.locale
    if (isLocaleSupported(userPersistedLocale.localeNoRegion)) return userPersistedLocale.localeNoRegion

    return import.meta.env.VITE_DEFAULT_LOCALE

}

export const switchLanguage = (passedLocale) => {
    if (isLocaleSupported(passedLocale)) {
        i18n.global.locale.value = passedLocale ??guessDefaultLocale()
        document.querySelector("html").setAttribute("lang", passedLocale ?? guessDefaultLocale())
        localStorage.setItem('lang', passedLocale ?? guessDefaultLocale())
    }
    
}

export const routeMiddleware = (to, _from, next) =>{
    const paramLocale = to.params.locale

    if (!isLocaleSupported(paramLocale)) {
        return next(guessDefaultLocale())
    }

    switchLanguage(paramLocale)

    return next()
}