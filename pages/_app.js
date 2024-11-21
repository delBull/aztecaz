import { useEffect, useState } from "react"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode'
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
