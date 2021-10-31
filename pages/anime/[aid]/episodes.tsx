import { useRedaxios } from "use-redaxios";
import { useRouter } from "next/router";
import { JikanEpisodes } from "../../../types";

export default function Episodes() {
    const { aid } = useRouter().query;
    const { data } = useRedaxios<JikanEpisodes>(
        `https://api.jikan.moe/v3/anime/${aid}/episodes`,
        {},
        [aid]
    );

    return (
        <div className="flex w-full h-full flex-nowrap flex-col justify-center items-center">
            <div className="text-frost-300 font-bold text-4xl mb-6">Episodes:</div>
            <div className="flex flex-wrap justify-center items-center">
                {data &&
                    data.episodes.map((val, i) => (
                        <div key={i} className="w-96 h-auto">
                            <div className="text-frost-200 text-left p-5 rounded-lg bg-nord-300 m-5 transition-all hover:scale-110">
                                <div className="w-full text-xl">Episode {i + 1}</div>
                                <div className="w-full text-lg">
                                    {val.title || val.title_japanese}
                                </div>
                                <div className="w-full text-right text-black text-sm">
                                    {val.aired?.split("T")[0]}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
