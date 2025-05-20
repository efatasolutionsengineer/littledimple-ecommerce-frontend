'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface PopSlideContextType {
    isOpen: boolean;
    content: ReactNode | null;
    openPopup: (content: ReactNode) => void;
    closePopup: () => void;
}

const PopSlideContext = createContext<PopSlideContextType | undefined>(undefined);

export const usePopSlide = () => {
    const context = useContext(PopSlideContext);
    if (!context) {
        throw new Error('usePopSlide must be used within a PopSlideProvider');
    }
    return context;
};

export const PopSlideProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode | null>(null);

    const openPopup = (content: ReactNode) => {
        setContent(content);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setContent(null);
    };

    return (
        <PopSlideContext.Provider value={{ isOpen, content, openPopup, closePopup }}>
            {children}
            {isOpen && 
            <div className='fixed inset-0 bg-[#1A1A1A]/50 flex justify-end items-center z-50'>
            <div
                className={`fixed right-0 top-0 bottom-0 bg-white z-50 p-5 w-full sm:max-w-[30vw] max-h-[100vh] overflow-y-auto`}>
                {content}
            </div>
            </div>}
        </PopSlideContext.Provider>
    );
};