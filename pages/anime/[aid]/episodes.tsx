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
        <pre>{JSON.stringify(data, null, 2)}</pre>
    );
}
