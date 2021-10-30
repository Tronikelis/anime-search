import type { NextPage } from "next";
import { useRouter } from "next/router";

const Anime: NextPage = () => {
    const router = useRouter();
    const { aid } = router.query;

    return (
        <div>
            {JSON.stringify(aid)}
        </div>
    );
};

export default Anime;