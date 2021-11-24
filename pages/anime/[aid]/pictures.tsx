import Head from "next/head";
import { GetServerSideProps } from "next";
import redaxios from "redaxios";
import { JikanPictures } from "../../../types";
import Image from "next/image";
import { API_URL } from "../../../constants";

export const getServerSideProps: GetServerSideProps = async ({ params = {} }) => {
    const { aid } = params;
    const { data } = await redaxios.get<JikanPictures>(`${API_URL}/v3/anime/${aid}/pictures`);
    return { props: { data } };
};

export default function Pictures({ data }: {data?: JikanPictures}) {
    return (
        <div className="w-full h-full flex flex-wrap justify-center items-center">
            <Head>
                <title>Pictures</title>
            </Head>
            {data &&
                data.pictures.map((val, i) => (
                    <div
                        key={i}
                        className="w-64 md:w-96 h-auto m-10 transition-all hover:scale-110"
                    >
                        <Image
                            src={val.large}
                            className="rounded-3xl"
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                ))}
        </div>
    );
}
