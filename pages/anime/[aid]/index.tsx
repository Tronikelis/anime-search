import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { Chart, Document, Image2 } from "react-iconly";
import Link from "next/link";

interface CardProps {
    children: ReactNode;
    icon?: ReactNode;
}

const Card = ({ children, icon }: CardProps) => {
    return (
        <div className="flex w-96 h-60 bg-nord-300 rounded-2xl font-bold text-frost-200 text-4xl justify-center items-center transition-all hover:scale-105 hover:cursor-pointer m-4">
            {icon}
            <div className="w-2" />
            {children}
        </div>
    );
};

export default function Anime() {
    const router = useRouter();
    const { aid } = router.query;

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex w-full h-1/2 justify-center items-center font-bold text-frost-300 text-4xl md:text-6xl text-center">
                {/** window does not exist on server */}
                {typeof window !== "undefined" ? window.localStorage.getItem("name") : ""}
            </div>
            <div className="flex w-full h-full justify-center items-start p-4 flex-wrap">
                <Link href={aid + "/stats"} passHref>
                    <a>
                        <Card icon={<Chart size={46} />}>Stats</Card>
                    </a>
                </Link>
                <Link href={aid + "/episodes"} passHref>
                    <a>
                        <Card icon={<Document size={46} />}>Episodes</Card>
                    </a>
                </Link>
                <Link href={aid + "/pictures"} passHref>
                    <a>
                        <Card icon={<Image2 size={46} />}>Pictures</Card>
                    </a>
                </Link>
            </div>
        </div>
    );
}
