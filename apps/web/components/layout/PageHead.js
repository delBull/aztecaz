import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "AZTECAS | HUB Inmobiliario"}
                </title>
            </Head>
        </>
    )
}

export default PageHead