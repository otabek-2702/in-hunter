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

    if (isLocaleSupported(userPreferredLocale.locale)) return userPreferredLocale.locale
    if (isLocaleSupported(userPreferredLocale.localeNoRegion)) return userPreferredLocale.localeNoRegion

    return import.meta.env.VITE_DEFAULT_LOCALE

}

export const switchLanguage = (passedLocale) => {
    i18n.global.locale.value = passedLocale
    document.querySelector("html").setAttribute("lang", passedLocale)
    localStorage.setItem('lang', passedLocale)

}

export const routeMiddleware = (to, _from, next) => {
    const paramLocale = to.params.locale

    if (!isLocaleSupported(paramLocale)) {
        if (paramLocale) {
            return next(to.fullPath.replace(paramLocale, guessDefaultLocale()))
        }
        return next(guessDefaultLocale())
    }

    switchLanguage(paramLocale)

    return next()
}