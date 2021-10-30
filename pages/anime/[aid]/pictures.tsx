import { useRedaxios } from "use-redaxios";
import { useRouter } from "next/router";
import { JikanPictures } from "../../../types";
import Image from "next/image";

export default function Pictures() {
    const { aid } = useRouter().query;
    const { data } = useRedaxios<JikanPictures>(
        `https://api.jikan.moe/v3/anime/${aid}/pictures`,
        {},
        [aid]
    );

    return (
        <div className="w-full h-full flex flex-wrap justify-center items-center">
            {data &&
                data.pictures.map((val, i) => (
                    <div
                        key={i}
                        className="w-96 h-auto m-10 transition-all hover:scale-110"
                    >
                        <Image
                            src={val.large}
                            className="rounded-md"
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>
                ))}
        </div>
    );
}
