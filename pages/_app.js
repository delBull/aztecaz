import { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "/public/assets/css/style.css"

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false)
    
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
