import Image from "next/image";
import Link from "next/link";
import { Star } from "react-iconly";
import { memo } from "react";

interface AnimeCardProps {
    name: string;
    desc: string;
    episodes: number;
    score: number;
    rated: string;
    imgUrl: string;
    id: string;
}

function AnimeCard(props: AnimeCardProps) {
    const { desc, episodes, name, rated, score, imgUrl, id } = props;

    return (
        <Link href={"/anime/" + id} passHref>
            <div className="w-80 md:w-96 lg:w-[580px] h-auto flex p-6 rounded-xl flex-col md:flex-row justify-around items-center bg-nord-400 shadow-xl hover:scale-105 transition-all hover:cursor-pointer">
                <div className="w-full h-auto pr-2">
                    <Image
                        className="rounded-md"
                        src={imgUrl}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-auto pl-2">
                    <div className="flex justify-evenly items-center w-full mt-2 md:mt-0">
                        <div className="text-frost-200 text-lg font-semibold">{name}</div>

                        <div className="flex justify-around items-center text-frost-300">
                            <Star filled />
                            <div className="text-nord-200 text-right pl-1">{score}</div>
                        </div>
                    </div>
                    <div className="text-center text-nord-200 w-full mt-1">{desc}</div>

                    <div className="flex w-full justify-evenly items-center">
                        <div className="text-nord-600 w-full mt-1">{rated}</div>
                        <div className="text-nord-600">
                            {episodes}
                            {"/"}
                            {episodes}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default memo(AnimeCard);
