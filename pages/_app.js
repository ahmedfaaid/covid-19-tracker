import Head from 'next/head'
import '../css/styles.css'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel='shortcut icon'
                    href='/images/favicon_io/favicon.ico'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/images/favicon_io/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/images/favicon_io/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/images/favicon_io/favicon-16x16.png'
                />
                <link
                    rel='manifest'
                    href='/images/favicon_io/site.webmanifest'
                />
                <title>COVID-19 Tracker</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                    key='viewport'
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
