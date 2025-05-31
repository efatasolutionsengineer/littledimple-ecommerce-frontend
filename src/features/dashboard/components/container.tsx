'use client'

import { useState } from "react";
import { Header } from "./header";
import SidebarMenu from "./sidebar.menu";

export default function Container({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = (clicked: boolean) => {
        setIsOpen(clicked);
    }

    return (
        <div className="flex flex-row min-h-screen font-(family-name:--font-dm-sans) bg-gray-dashboard">
            <SidebarMenu isOpen={isOpen} onClose={() => handleClick(false)} />
            <div className={`mx-auto flex flex-col flex-1 transition-all duration-400 ease-in-out ${isOpen ? 'lg:ml-64 w-[calc(100vw-16rem)]' : 'ml-0 w-full'}`}>
                <Header isOpen={isOpen} onClick={handleClick} />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}