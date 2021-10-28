import Image from "next/image";
import { motion } from "framer-motion";

interface AnimeCardProps {
    name: string;
    desc: string;
    episodes: number;
    score: number;
    rated: string;
    imgUrl: string;
}

export default function AnimeCard(props: AnimeCardProps) {
    const { desc, episodes, name, rated, score, imgUrl } = props;
    return (
        <motion.div
            className="w-80 md:w-96 lg:w-[580px] h-auto flex p-6 rounded-xl flex-col md:flex-row justify-around items-center bg-white shadow-xl"
            whileHover={{ scale: 1.05, cursor: "pointer" }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="w-full h-auto pr-2">
                <Image
                    className="rounded-md"
                    src={imgUrl}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <div className="w-full h-auto pl-2">
                <div className="flex justify-evenly items-center w-full mt-2 md:mt-0">
                    <div className="text-indigo-500 text-lg font-semibold">{name}</div>
                    <div className="text-black text-right">{`⭐${score}`}</div>
                </div>
                <div className="text-center text-gray-700 w-full mt-1">{desc}</div>

                <div className="flex w-full justify-evenly items-center">
                    <div className="text-red-500 w-full mt-1">{rated}</div>
                    <div className="text-black">
                        {episodes}
                        {"/"}
                        {episodes}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
