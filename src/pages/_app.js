import React, { useEffect, useMemo, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
<<<<<<< HEAD
import { Provider, useDispatch } from "react-redux";
=======
import { Provider } from 'react-redux'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { Toaster } from 'react-hot-toast'
import { createTheme } from '../theme/index'
import { store } from '../redux/store'
import ScrollToTop from '../components/scroll-top/ScrollToTop'
import { WrapperForApp } from '../App.style'
import createEmotionCache from '../utils/create-emotion-cache'
import Navigation from '../components/navbar'
import '../styles/global.css'
import { persistStore } from 'redux-persist'
import { Box } from '@mui/material'
import Router, { useRouter } from 'next/router'
import i18n, { t } from 'i18next'
import '../language/i18n'
import dynamic from 'next/dynamic'
import FloatingCardManagement from '../components/floating-cart/FloatingCardManagement'
import DynamicFavicon from '../components/favicon/DynamicFavicon'
import '../styles/global.css'
import '../styles/nprogress.css'
import nProgress from 'nprogress'
import Head from 'next/head'
import { setLanguage } from '../redux/slices/languageChange'
<<<<<<< HEAD
import { setFormattedAddress } from "../redux/slices/addressData";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)
<<<<<<< HEAD
export  const currentVersion = process.env.NEXT_PUBLIC_SITE_VERSION;
=======

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
const clientSideEmotionCache = createEmotionCache()

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
    const getLayout = Component.getLayout ?? ((page) => page)
    const queryClient = new QueryClient()
    const router = useRouter()
<<<<<<< HEAD
    //const dispatch=useDispatch()
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    const [languageDirection, setLanguageDirection] = useState('')
    const [theme_mode, setThemeMode] = useState('')
    const [viewFooter, setViewFooter] = useState(false)
    const Footer = dynamic(() => import('../components/footer/Footer'), {
        ssr: false,
    })

    useEffect(() => {
        setShowSplashScreen(false)
    }, [router.isReady])
<<<<<<< HEAD
    useEffect(() => {
        const userLanguage = localStorage.getItem('language')
        if(!userLanguage){
            localStorage.setItem('language', i18n.language)
        }

    }, [])
=======
    // useEffect(() => {
    //     localStorage.setItem('language', i18n.language)
    // }, [])
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    useEffect(() => {
        // Perform localStorage action
        if (typeof window !== 'undefined') {
            setLanguageDirection(localStorage.getItem('direction') || 'ltr')
        }
    }, [languageDirection])

    useEffect(() => {
        // Perform localStorage action
        if (typeof window !== 'undefined') {
            setThemeMode(localStorage.getItem('mode') || 'light')
        }
    }, [theme_mode])

    useEffect(() => {
        const userLanguage = localStorage.getItem('language')
        if (userLanguage) {
            i18n.changeLanguage(userLanguage?.toLowerCase())
        }
        if (!userLanguage) {
            i18n.changeLanguage(i18n.language)
            //  localStorage.setItem('language', 'sv')
        }
        setViewFooter(true)
    }, [])
    // useEffect(() => {
    //     setLoading(true)
    // }, [])
    let persistor = persistStore(store)
    const theme = useMemo(
        () =>
            createTheme({
                direction: languageDirection,
                responsiveFontSizes: true,
                mode: theme_mode,
            }),
        [languageDirection]
    )
    let zoneid = undefined
    if (typeof window !== 'undefined') {
        zoneid = JSON.parse(localStorage.getItem('zoneid'))
    }
<<<<<<< HEAD


    // site version check and clear local storage
    useEffect(() => {
        // Set the current version of your app here
        const storedVersion = localStorage.getItem('appVersion');
        if (storedVersion !== currentVersion) {
            // Clear localStorage and update the stored version
            localStorage.clear();
            localStorage.setItem('appVersion', currentVersion);
            router.push('/')
            window.location.reload()

        }
    }, []);


=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <CacheProvider value={emotionCache}>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        {/*<RTL direction={languageDirection}>*/}
                        <CssBaseline />
                        <Toaster />
                        <Head>
                            <title>{t('Loading...')}</title>
                        </Head>
                        <WrapperForApp>
                            <ScrollToTop />
                            <Navigation />
                            <DynamicFavicon />

                            <Box
                                sx={{
<<<<<<< HEAD
                                    height:"100%",
                                    //minHeight: '80vh',
=======
                                    minHeight: '80vh',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    mt: {
                                        xs:
                                            router.pathname === '/home'
                                                ? '2.5rem'
<<<<<<< HEAD
                                                : '2rem',
=======
                                                : '4rem',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                        md:
                                            router.pathname === '/'
                                                ? zoneid
                                                    ? '4rem'
                                                    : '2rem'
                                                : '4rem',
                                    },
<<<<<<< HEAD

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                }}
                            >
                                {router.pathname !== '/' &&
                                    router.pathname !== '/checkout' &&
                                    router.pathname !== '/chat' && (
                                        <FloatingCardManagement
                                            zoneid={zoneid}
                                        />
                                    )}
                                {getLayout(<Component {...pageProps} />)}
                            </Box>
                            {viewFooter && (
                                <Footer languageDirection={languageDirection} />
                            )}
                        </WrapperForApp>
                        {/*</RTL>*/}
                    </ThemeProvider>
                </Provider>
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                />
            </QueryClientProvider>
        </CacheProvider>
    )
}

export default App
