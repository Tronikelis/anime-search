import Link from "next/link";
import { Heart2, Search, Home } from "react-iconly";
import { Button } from ".";

export default function NavBar() {
    return (
        <div className="w-screen h-auto bg-nord-500 flex justify-around items-center py-2">
            <Link href="/trending">
                <a>
                    <Button iconStart={<Heart2 />}>Trending</Button>
                </a>
            </Link>

            <Link href="/">
                <a>
                    <Button iconStart={<Home />}></Button>
                </a>
            </Link>

            <Link href="/search">
                <a>
                    <Button iconStart={<Search />}>Search</Button>
                </a>
            </Link>
        </div>
    );
}
