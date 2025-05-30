'use client'

import Image from "next/image"
import logo from '@/assets/images/brand-logo.png'
import userProfile from '@/assets/images/user-profile.jpeg'
import BurgerMenu from "@/assets/icons/burger.menu"
import { useEffect, useState } from "react"
import Logout from "@/assets/icons/logout"

export const Header = ({ onClick, isOpen: status }: { onClick: (clicked: boolean) => void, isOpen: boolean }) => {
    const [isOpen, setIsOpen] = useState(status);
    const [isProfileOpened, setIsProfileOpened] = useState(false);

    useEffect(() => {
        setIsOpen(status);
    }, [status]);

    useEffect(() => {
        onClick(isOpen);
    }, [isOpen]);

    const handleProfileClick = () => {
        setIsProfileOpened(!isProfileOpened);
    }

    return (
        <div className="sticky top-0 z-50 w-full bg-white h-[61px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                {!isOpen
                    ? <>
                        <Image src={logo} alt="logo" height={60} />
                        <button
                            type="button"
                            className="rounded-full bg-gray-100/60 p-2 hover:bg-white-light/90 border border-gray-100/60 hover:bg-gray-100 transition"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <BurgerMenu className="h-5 w-5" />
                        </button>
                    </>
                    : null}
            </div>

            <div className="flex items-center gap-4">
                <Image src={userProfile} alt="logo" className="rounded-full" width={35} height={35} onClick={handleProfileClick} />
                <ProfilePopover isOpen={isProfileOpened} />
            </div>
        </div>
    )
}

const ProfilePopover = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className={`${isOpen ? 'absolute top-full right-2 w-60 bg-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] border border-gray-100/60' : 'hidden'}`}>
            <div className="p-4 flex flex-row gap-4">
                <Image src={userProfile} alt="logo" className="rounded-full" width={35} height={35} />
                <div className="flex flex-col">
                    <h1 className="text-sm font-medium">John Doe</h1>
                    <p className="text-xs text-gray-500">john.doe@example.com</p>
                </div>
            </div>
            <div>
                <button className="text-right text-sm text-red-500 flex items-center justify-start p-4 border-t border-gray-100 w-full hover:bg-gray-100/60 transition">
                    <Logout className="h-4.5 w-4.5 shrink-0 rotate-90" />
                    <span className="ml-2">Sign Out</span>
                </button>
            </div>
        </div>
    )
}