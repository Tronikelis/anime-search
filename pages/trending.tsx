import { useRedaxios } from "use-redaxios";
import { JikanTop } from "../types";
import Image from "next/image";
import Link from "next/link";

import { Card } from "../components";

export default function Trending() {
    const { data } = useRedaxios<JikanTop>(
        "https://api.jikan.moe/v3/top/anime/1/airing",
        {},
        []
    );

    return (
        <>
            <div className="text-center my-4 text-frost-200 text-6xl">Trending</div>
            <div className="w-full h-full flex justify-center items-center flex-wrap">
                {data?.top.map((val, i) => (
                    <Link href={`/anime/${val.mal_id}`} passHref key={i}>
                        <div className="w-64 md:w-80 h-auto m-4 hover:cursor-pointer">
                            <Card>
                                <div className="w-full h-full flex flex-col p-5">
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
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
