import { ReactNode } from "react";

export const LoadDataUntilReady = (
    { children, placeholder, isLoading }:
        {
            isLoading: boolean
            children: React.ReactNode
            placeholder: ReactNode
        }
) => {
    if (isLoading) return placeholder;
    return children;
}