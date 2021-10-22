import { AppProps } from "next/app";
import Head from "next/head"


const App: React.FC<AppProps> = ({Component, pageProps}: AppProps): JSX.Element => {
    return <>
    <Head>
        <title>Venus Glory | Natural cosmetics for gentle skincare</title>
    </Head>
    <Component {...pageProps} />
    </>
}