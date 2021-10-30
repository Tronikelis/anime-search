import { NavBar } from ".";

export default function Layout({ children }: any) {
    return (
        <>
            <div className="w-screen h-screen flex flex-col items-center bg-nord-600 overflow-auto overflow-x-hidden">
                <NavBar />
                {children}
            </div>
        </>
    );
}
