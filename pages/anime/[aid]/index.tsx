import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { Chart, Document, Image2 } from "react-iconly";
import Link from "next/link";
import { useRedaxios } from "use-redaxios";
import { JikanAnime } from "../../../types";

interface CardProps {
    children: ReactNode;
    icon?: ReactNode;
}

const Card = ({ children, icon }: CardProps) => {
    return (
        <div className="flex w-full h-full bg-nord-300 rounded-2xl justify-center items-center transition-all hover:scale-105 hover:cursor-pointer m-4">
            {icon && (
                <>
                    {icon}
                    <div className="w-2" />
                </>
            )}
            {children}
        </div>
    );
};

export default function Anime() {
    const router = useRouter();
    const { aid } = router.query;

    const { data } = useRedaxios<JikanAnime>(`https://api.jikan.moe/v3/anime/${aid}`, {}, [
        aid,
    ]);

    return (
        <div className="w-full h-full flex flex-col">
            <span className="w-full h-auto text-frost-300 text-6xl text-center mt-2">
                {data?.title_english || data?.title || data?.title_japanese}
            </span>
            <div className="flex w-full h-full justify-around items-center flex-wrap">
                <div className="flex-1">
                    <Card>
                        <div>
                            <div>Stats</div>
                            <div>
                                {JSON.stringify(data, null, 2)}
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="flex flex-1 justify-center items-start p-4 flex-wrap">
                    <Link href={aid + "/episodes"} passHref>
                        <a className="w-60 h-60 m-2 text-2xl font-semibold">
                            <Card icon={<Document size={46} />}>Episodes</Card>
                        </a>
                    </Link>
                    <Link href={aid + "/pictures"} passHref>
                        <a className="w-60 h-60 m-2 text-2xl font-semibold">
                            <Card icon={<Image2 size={46} />}>Pictures</Card>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
