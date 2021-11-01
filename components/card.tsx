import { HTMLAttributes, ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    icon?: ReactNode;
    className?: HTMLAttributes<HTMLDivElement>["className"];
}

export default function Card({ children, icon, className }: CardProps) {
    return (
        <div
            className={
                "flex w-full h-full bg-nord-300 rounded-2xl justify-center items-center transition-all hover:scale-105 p-4" +
                ` ${className}`
            }
        >
            {icon && (
                <>
                    {icon}
                    <div className="w-2" />
                </>
            )}
            {children}
        </div>
    );
}
