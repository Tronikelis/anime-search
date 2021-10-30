import { motion } from "framer-motion";

export default function Button({ children }: any) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-nord-300 hover:bg-nord-400 rounded-md font-semibold text-white"
        >
            <div className="p-2 flex justify-evenly items-center w-full">{children}</div>
        </motion.button>
    );
}
