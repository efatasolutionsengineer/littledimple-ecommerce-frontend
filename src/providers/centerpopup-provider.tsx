'use client'

import { ReactNode } from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

type CenterPopupContextType = {
    isOpen: boolean;
    content: ReactNode | null;
    openPopup: (content: ReactNode, maxWidthClass?: string) => void;
    closePopup: () => void;
}

const CenterPopupContext = createContext<CenterPopupContextType | undefined>(undefined)

export const useCenterPopup = () => {
    const context = useContext(CenterPopupContext)
    if (!context) {
        throw new Error('useCenterPopup must be used within a CenterPopupProvider');
    }
    return context;
};

export const CenterPopupProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode | null>(null);
    const [maxWidthClass, setMaxWidthClass] = useState('max-w-4xl');

    const openPopup = (content: ReactNode, maxWidthClass?: string) => {
        setMaxWidthClass(maxWidthClass || 'max-w-4xl');
        setContent(content);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setContent(null);
    };

    return (
        <CenterPopupContext.Provider value={{ isOpen, content, openPopup, closePopup }}>
            {children}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-100">
                    <div className={`bg-white rounded-lg p-4 shadow-md w-full ${maxWidthClass}`}>
                        {content}
                    </div>
                </div>
            )}
        </CenterPopupContext.Provider>
    );
}