import { useStore } from "../store";

export default function SearchInput() {
    const { setQuery } = useStore(store => store.actions);
    const query = useStore(store => store.state.query);

    return (
        <div className="w-full h-full p-4">
            <div className="font-semibold text-purple-600">Search:</div>
            <input
                type="text"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={e => setQuery(e.target.value)}
                value={query}
            />
        </div>
    );
}
