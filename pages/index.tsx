import Head from "next/head";

export default function App() {
    return (
        <div className="w-full h-full flex justify-center items-center p-12">
            <Head>
                <title>Anime search</title>
            </Head>
            <div className="text-frost-200 font-bold text-3xl md:text-6xl text-center">
                Hello, look up some anime!
            </div>
        </div>
    );
}
