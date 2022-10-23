import type { AppProps } from "next/app";
import "styles/global.scss";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />;
        </>
    );
}

export default MyApp;
