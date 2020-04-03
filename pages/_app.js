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
                {/* open graph */}
                <meta property='og:title' content='COVID-19 Tracker' />
                <meta
                    property='og:description'
                    content='A simple COVID-19 stat tracking app with country selector and province/state statistics break down'
                />
                <meta
                    property='og:image'
                    content='/images/coronavirus-cdc-image.jpg'
                />
                <meta property='og:url' content='covid-19-ahmed.now.sh' />
                <meta property='og:site_name' content='COVID-19 Tracker' />
                {/* twitter cards */}
                <meta name='twitter:card' content='summary' />
                <meta property='twitter:title' content='COVID-19 Tracker' />
                <meta
                    property='twitter:description'
                    content='A simple COVID-19 stat tracking app with country selector and province/state statistics break down'
                />
                <meta
                    property='twitter:image'
                    content='/images/coronavirus-cdc-image.jpg'
                />
                <meta property='twitter:site' content='@mr_amed' />
                <meta property='twitter:creator' content='@mr_amed' />
                {/* seo meta */}
                <meta
                    name='description'
                    content='A simple COVID-19 stat tracking app with country selector and province/state statistics break down'
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
