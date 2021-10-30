import Link from "next/link";
import { Chart, Search } from "react-iconly";
import Button from "./button";

export default function NavBar() {
    return (
        <div className="w-screen h-auto bg-nord-500 flex justify-around items-center py-2">
            <Button icon={<Chart />}>Top</Button>

            <Link href="/search">
                <a>
                    <Button icon={<Search />}>Search</Button>
                </a>
            </Link>
        </div>
    );
}
