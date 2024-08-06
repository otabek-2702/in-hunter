 function addClassesToHtml() {
    const rootElement = document.documentElement;
    const classPrefix = " w-mod-";
    rootElement.className += classPrefix + "js";
    
    if ("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
        rootElement.className += classPrefix + "touch";
    }
}
export default addClassesToHtml;