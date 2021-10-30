import { Chart, Search } from "react-iconly";
import Button from "./button";

export default function NavBar() {
    return (
        <div className="w-screen h-auto bg-nord-500 flex justify-around items-center py-2">
            <Button>
                <Chart filled />{" Top"}
            </Button>

            <Button>
                <Search filled />{" Search"}
            </Button>
        </div>
    );
}
