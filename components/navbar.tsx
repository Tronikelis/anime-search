import Link from "next/link";
import { Heart2, Search, Home } from "react-iconly";
import Button from "./button";

export default function NavBar() {
    return (
        <div className="w-screen h-auto bg-nord-500 flex justify-around items-center py-2">
            <Link href="/trending">
                <a>
                    <Button icon={<Heart2 />}>Trending</Button>
                </a>
            </Link>

            <Link href="/">
                <a>
                    <Button icon={<Home />}></Button>
                </a>
            </Link>

            <Link href="/search">
                <a>
                    <Button icon={<Search />}>Search</Button>
                </a>
            </Link>
        </div>
    );
}
