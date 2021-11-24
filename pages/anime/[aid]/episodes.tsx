import redaxios from "redaxios";
import { GetServerSideProps } from "next";
import { JikanEpisodes } from "../../../types";
import { API_URL } from "../../../constants";

export const getServerSideProps: GetServerSideProps = async ({ params = {} }) => {
    const { aid } = params;
    const { data } = await redaxios.get<JikanEpisodes>(`${API_URL}/v3/anime/${aid}/episodes`);
    return { props: { data } };
};

export default function Episodes({ data }: { data?: JikanEpisodes }) {
    return (
        <div className="flex w-full h-full flex-nowrap flex-col">
            <div className="text-frost-300 font-bold text-4xl my-6 text-center">Episodes:</div>
            <div className="flex flex-wrap justify-center items-center">
                {data &&
                    data.episodes.map((val, i) => (
                        <div key={i} className="w-72 md:w-96 h-auto">
                            <div className="text-frost-200 text-left p-5 rounded-lg bg-nord-300 m-5 transition-all hover:scale-110">
                                <div className="w-full text-xl">Episode {i + 1}</div>
                                <div className="w-full text-lg">
                                    {val.title || val.title_japanese}
                                </div>
                                <div className="w-full text-right text-black text-sm">
                                    {val.aired?.split("T")[0]}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
