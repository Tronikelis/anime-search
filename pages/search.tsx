import { useDebounce } from "use-debounce";
import { useRedaxios } from "use-redaxios";
import Spinner from "react-spinners/ScaleLoader";
import { API_URL } from "../constants";
import { JikanQuery } from "../types";

import { useStore } from "../store";
import { AnimeCard, SearchInput } from "../components";

export default function Search() {
    const query = useStore(store => store.state.query);
    const [debouncedQuery] = useDebounce(query, 300);

    const { data, fetching } = useRedaxios<JikanQuery>(
        `${API_URL}/v3/search/anime?q=` + encodeURIComponent(debouncedQuery),
        {},
        // don't call the request if it's empty
        debouncedQuery ? [debouncedQuery] : undefined
    );

    return (
        <>
            <div className="w-full mt-1 flex justify-center items-center">
                <div className="w-72 md:w-96">
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
                                id={val.mal_id}
                            />
                        </div>
                    ))}

                {fetching && <Spinner color="#81a1c1" />}
            </div>
        </>
    );
}
