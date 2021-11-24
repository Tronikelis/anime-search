import { GetServerSideProps } from "next";
import redaxios from "redaxios";
import { JikanTop } from "../types";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "../constants";

import { Card } from "../components";

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await redaxios.get<JikanTop>(`${API_URL}/v3/top/anime/1/airing`);
    return { props: { data } };
};

export default function Trending({ data }: { data?: JikanTop }) {
    return (
        <>
            <div className="text-center my-4 text-frost-200 text-6xl">Trending</div>
            <div className="w-full h-full flex justify-center items-center flex-wrap">
                {data?.top.map((val, i) => (
                    <Link href={`anime/${val.mal_id}`} key={i}>
                        <a className="w-64 md:w-80 h-auto m-4 hover:cursor-pointer">
                            <Card>
                                <div className="w-full h-full flex flex-col">
                                    <Image
                                        src={val.image_url}
                                        className="rounded-2xl"
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="cover"
                                    />

                                    <div className="text-2xl text-frost-200 text-center my-2">
                                        {val.title}
                                    </div>
                                </div>
                            </Card>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}
