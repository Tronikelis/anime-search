import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="bg-nord-300 hover:bg-nord-400 rounded-md font-semibold text-white"
        >
            <div className="p-2 flex justify-evenly items-center w-full">
                {children}
            </div>
        </button>
    );
}
