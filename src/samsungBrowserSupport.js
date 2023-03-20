export const samsungBrowserSupport = (modalOpen) => {
    // FOR SAMSUNG INTERNET BROWSER
    const isSamsungBrowser = navigator.userAgent.match(/SamsungBrowser/i)

    if (isSamsungBrowser) {

        if (modalOpen && typeof modalOpen === 'boolean') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.position = 'static';

            const rootElement = document.getElementById('root');
            rootElement.style.overflow = 'visible';
            rootElement.style.position = 'static';
        }
        return true
    } else {
        return false
    }
}