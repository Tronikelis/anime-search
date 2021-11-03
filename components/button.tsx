import type { HTMLAttributes, ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    iconEnd?: ReactNode;
    iconStart?: ReactNode
    children?: any;
    className?: HTMLAttributes<HTMLButtonElement>["className"];
}

export default function Button(props: ButtonProps) {
    const { children, iconEnd, iconStart, onClick, className } = props;
    return (
        <button
            onClick={onClick}
            className={
                "bg-nord-300 hover:bg-nord-400 rounded-lg shadow-lg font-semibold text-white p-2 transition-all hover:scale-105 " +
                className
            }
        >
            <div className="flex w-full h-full justify-evenly items-center">
                {iconStart}
                {children && (
                    <>
                        <div className="w-1" />
                        {children}
                    </>
                )}
                {iconEnd}
            </div>
        </button>
    );
}
