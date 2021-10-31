import { JikanQuery } from "../types";
import { useStore } from "../store";
import { AnimeCard, SearchInput } from "../components";
import { useDebounce } from "use-debounce";
import { useRedaxios } from "use-redaxios";

import Spinner from "react-spinners/ScaleLoader";

export default function Search() {
    const query = useStore(store => store.state.query);
    const [debouncedQuery] = useDebounce(query, 100);

    const { data, fetching } = useRedaxios<JikanQuery>(
        "https://api.jikan.moe/v3/search/anime?q=" + encodeURIComponent(debouncedQuery),
        {},
        // don't call the request if it's empty
        debouncedQuery ? [debouncedQuery] : undefined
    );

    return (
        <>
            <div className="w-full mt-1 flex justify-center items-center">
                <div className="w-1/4 min-w-max">
                    <SearchInput />
                </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center flex-wrap px-4">
                {data &&
                    data.results.map((val, i) => (
                        <div key={i} className="p-4">
                            <AnimeCard
                                desc={val.synopsis}
                                episodes={val.episodes}
                                imgUrl={val.image_url}
                                name={val.title}
                                rated={String(val.rated)}
                                score={val.score}
                                id={val.mal_id.toString()}
                            />
                        </div>
                    ))}

                {fetching && <Spinner color="#81a1c1" />}
            </div>
        </>
    );
}
