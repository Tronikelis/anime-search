import { useRedaxios } from "use-redaxios";
import { useRouter } from "next/router";
import { JikanPictures } from "../../../types";
import Image from "next/image";
import { API_URL } from "../../../constants";

export default function Pictures() {
    const { aid } = useRouter().query;
    const { data } = useRedaxios<JikanPictures>(
        `${API_URL}/v3/anime/${aid}/pictures`,
        {},
        [aid]
    );

    return (
        <div className="w-full h-full flex flex-wrap justify-center items-center">
            {data &&
                data.pictures.map((val, i) => (
                    <div
                        key={i}
                        className="w-64 md:w-96 h-auto m-10 transition-all hover:scale-110"
                    >
                        <Image
                            src={val.large}
                            className="rounded-3xl"
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                ))}
        </div>
    );
}
