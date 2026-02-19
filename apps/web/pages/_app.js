import { ThirdwebProvider } from "thirdweb/react"
import { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "/public/assets/css/style.css"
import "../styles/globals.css"
import { AnalyticsProvider, PageViewTracker } from "@repo/ui"

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false)

    return (
        <ThirdwebProvider>
            <AnalyticsProvider>
                <PageViewTracker />
                <Component {...pageProps} />
            </AnalyticsProvider>
        </ThirdwebProvider>
    )
}

export default MyApp
