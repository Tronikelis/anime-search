import type { ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    icon?: ReactNode;
    children?: any;
}

export default function Button(props: ButtonProps) {
    const { children, icon, onClick } = props;
    return (
        <button
            onClick={onClick}
            className="bg-nord-300 hover:bg-nord-400 rounded-lg shadow-lg font-semibold text-white p-2 transition-all hover:scale-105"
        >
            <div className="flex w-full h-full justify-evenly items-center">
                {icon}
                {children && (
                    <>
                        <div className="w-1" />
                        {children}
                    </>
                )}
            </div>
        </button>
    );
}
