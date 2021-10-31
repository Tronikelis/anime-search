import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    icon?: ReactNode;
}

export default function Card({ children, icon }: CardProps) {
    return (
        <div className="flex w-full h-full bg-nord-300 rounded-2xl justify-center items-center transition-all hover:scale-105 m-4">
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
