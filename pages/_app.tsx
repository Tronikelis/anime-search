import Router from "next/router";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/index.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
