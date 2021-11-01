import { useRedaxios } from "use-redaxios";
import { API_URL } from "../../../constants";
import { JikanAnime } from "../../../types";
import { useRouter } from "next/router";

import { Card } from "../../../components";

export default function Misc() {
    const router = useRouter();
    const { aid } = router.query;

    const { data } = useRedaxios<JikanAnime>(`${API_URL}/v3/anime/${aid}`, {}, [aid]);

    return (
        <div className="w-full h-auto py-10 px-5 md:px-60 md:text-xl">
            <Card className="w-full h-full flex flex-col">
                <div className="text-center text-frost-200 text-2xl md:text-4xl font-semibold">
                    {data?.title_english || data?.title || data?.title_japanese}
                </div>

                <div className="mt-2 w-full">
                    <p>
                        <span className="text-frost-300 font-semibold">Type: </span>
                        {data?.type}
                    </p>
                </div>

                <div className="mt-2 w-full">
                    <p>
                        <span className="text-frost-300 font-semibold">Eps: </span>
                        {data?.episodes}
                    </p>
                </div>

                <div className="mt-2 w-full">
                    <span className="text-frost-300 font-semibold">Status: </span>
                    {data?.status}
                </div>

                <div className="mt-2 w-full">
                    <p>
                        <span className="text-frost-300 font-semibold">
                            Score/Rank/Popularity:{" "}
                        </span>
                        {`${data?.score}/${data?.rank}/${data?.popularity}`}
                    </p>
                </div>

                <div className="mt-2 w-full">
                    <p>
                        <span className="text-frost-300 font-semibold">Rating: </span>
                        {data?.rating}
                    </p>
                </div>

                <div className="mt-2 w-full">
                    <p>
                        <span className="text-frost-300 font-semibold">Source: </span>
                        {data?.source}
                    </p>
                </div>

                <div className="mt-2 w-full">
                    <p className="text-frost-300 font-semibold">Synopsis: </p>
                    {data?.synopsis}
                </div>
            </Card>
        </div>
    );
}
