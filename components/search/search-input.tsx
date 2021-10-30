import { useStore } from "../../store";

export default function SearchInput() {
    const { setQuery } = useStore(store => store.actions);
    const query = useStore(store => store.state.query);

    return (
        <div className="w-full h-full p-4">
            <div className="font-bold text-frost-200">Search:</div>
            <input
                type="text"
                className="bg-nord-100 appearance-none border-2 rounded w-full py-2 px-4 text-nord-300 leading-tight focus:outline-none focus:border-frost-200 font-semibold"
                onChange={e => setQuery(e.target.value)}
                value={query}
            />
        </div>
    );
}
