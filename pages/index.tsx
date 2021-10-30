import type { NextPage } from "next";

import { JikanQuery } from "../types";
import { useStore } from "../store";
import { AnimeCard, SearchInput, NavBar } from "../components";
import { useDebounce } from "use-debounce";
import { useRedaxios } from "use-redaxios";

const App: NextPage = () => {
    const query = useStore(store => store.state.query);
    const [debouncedQuery] = useDebounce(query, 1000);

    const { data } = useRedaxios<JikanQuery>(
        "https://api.jikan.moe/v3/search/anime?q=" + encodeURIComponent(debouncedQuery),
        {},
        // don't call the request if it's empty
        debouncedQuery ? [debouncedQuery] : undefined
    );

    return (
        <div className="w-screen h-screen flex flex-col items-center bg-nord-600 overflow-auto overflow-x-hidden">
            <NavBar />
            <div className="max-w-sm w-full mt-1">
                <SearchInput />
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
                                link={val.url}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default App;
