import { useRouter } from "next/router";
import { Document, Image2, MoreSquare, ChevronRight, ChevronLeft } from "react-iconly";
import Link from "next/link";
import { useRedaxios } from "use-redaxios";
import { JikanAnime } from "../../../types";
import Image from "next/image";
import { API_URL } from "../../../constants";

import { Card, Button } from "../../../components";

export default function Anime() {
    const router = useRouter();
    const { aid } = router.query;

    const { data } = useRedaxios<JikanAnime>(`${API_URL}/v3/anime/${aid}`, {}, [aid]);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-auto text-frost-300 text-4xl md:text-6xl text-center my-8">
                {data?.title_english || data?.title || data?.title_japanese}
            </div>
            <div className="flex w-full h-full justify-center items-center flex-wrap">
                <div className="w-72 md:w-96 h-auto">
                    <Card>
                        <div className="w-full h-full flex flex-col">
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
                            <div className="mt-4 flex w-full justify-between items-center">
                                {data?.related.Prequel && (
                                    <Link href={`${data.related.Prequel[0].mal_id}`}>
                                        <a>
                                            <Button
                                                className="bg-nord-500 hover:bg-nord-600"
                                                iconStart={<ChevronLeft size={22} />}
                                            >
                                                Prequel
                                            </Button>
                                        </a>
                                    </Link>
                                )}
                                {data?.related.Sequel && (
                                    <Link href={`${data.related.Sequel[0].mal_id}`} passHref>
                                        <a>
                                            <Button
                                                className="bg-nord-500 hover:bg-nord-600"
                                                iconEnd={<ChevronRight size={22} />}
                                            >
                                                Sequel
                                            </Button>
                                        </a>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="flex justify-center items-center p-4 flex-wrap">
                    <Link href={aid + "/episodes"}>
                        <a className="w-60 h-60 m-2 text-2xl font-semibold text-frost-300">
                            <Card icon={<Document size={46} />}>Episodes</Card>
                        </a>
                    </Link>
                    <Link href={aid + "/pictures"}>
                        <a className="w-60 h-60 m-2 text-2xl font-semibold text-frost-300">
                            <Card icon={<Image2 size={46} />}>Pictures</Card>
                        </a>
                    </Link>
                    <Link href={aid + "/misc"}>
                        <a className="w-60 h-60 m-2 text-2xl font-semibold text-frost-300">
                            <Card icon={<MoreSquare size={46} />}>Misc</Card>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
