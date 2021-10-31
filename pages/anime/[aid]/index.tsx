import { useRouter } from "next/router";
import { Document, Image2 } from "react-iconly";
import Link from "next/link";
import { useRedaxios } from "use-redaxios";
import { JikanAnime } from "../../../types";
import Image from "next/image";

import { Card } from "../../../components";

export default function Anime() {
    const router = useRouter();
    const { aid } = router.query;

    const { data } = useRedaxios<JikanAnime>(`https://api.jikan.moe/v3/anime/${aid}`, {}, [
        aid,
    ]);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-auto text-frost-300 text-4xl md:text-6xl text-center my-8">
                {data?.title_english || data?.title || data?.title_japanese}
            </div>
            <div className="flex w-full h-full justify-center items-start flex-wrap">
                <div className="w-72 md:w-96 h-auto">
                    <Card>
                        <div className="w-full h-full flex flex-col p-5">
                            {data?.image_url && (
                                <Image
                                    className="rounded-xl"
                                    src={data?.image_url ?? ""}
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            )}

                            <div className="text-frost-200 text-lg mt-2">
                                <span className="font-semibold">Genres: </span>
                                {data?.genres.map(x => x.name).join(", ")}
                            </div>
                            <div className="text-frost-200 text-lg mt-2">
                                <span className="font-semibold">Broadcast: </span>
                                {data?.broadcast}
                            </div>
                            <div className="text-frost-200 text-lg mt-2">
                                <span className="font-bold">Premiered: </span>
                                {data?.premiered}
                            </div>
                            <div className="text-frost-200 text-lg mt-2">
                                <span className="font-bold">Status: </span>
                                {data?.status}
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="flex justify-center items-start p-4 flex-wrap">
                    <Link href={aid + "/episodes"} passHref>
                        <a className="w-60 h-60 m-2 text-2xl font-semibold text-frost-300">
                            <Card icon={<Document size={46} />}>Episodes</Card>
                        </a>
                    </Link>
                    <Link href={aid + "/pictures"} passHref>
                        <a className="w-60 h-60 m-2 text-2xl font-semibold text-frost-300">
                            <Card icon={<Image2 size={46} />}>Pictures</Card>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
