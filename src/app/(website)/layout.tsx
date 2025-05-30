import { Footer } from "@/features/footer"
import MainMenu from "@/shared/components/main-menu"
import { ReactNode } from "react"

export default function WebsiteLayout({children}: {children: ReactNode}) {
    return(
        <>
            <MainMenu />
            {children}
            <Footer />
        </>
    )
}