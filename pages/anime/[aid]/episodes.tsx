import { useRedaxios } from "use-redaxios";
import { useRouter } from "next/router";
import { JikanEpisodes } from "../../../types";



export default function Episodes() {
    const { aid } = useRouter().query;
    const { data } = useRedaxios<JikanEpisodes>(
        `https://api.jikan.moe/v3/anime/${aid}/episodes`,
        {}
    );

    return (
        <div className="flex w-full h-full flex-nowrap flex-col justify-center items-center">
            <div className="w-full h-auto bg-nord-400">
            </div>
        </div>
    );
}
