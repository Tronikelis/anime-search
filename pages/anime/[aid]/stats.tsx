import { useRedaxios } from "use-redaxios";
import { useRouter } from "next/router";
import { JikanStats } from "../../../types";

export default function Stats() {
    const { aid } = useRouter().query;
    const { data } = useRedaxios<JikanStats>(
        `https://api.jikan.moe/v3/anime/${aid}/stats`,
        {},
        [aid]
    );

    return (
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    );
}
