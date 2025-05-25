export const metadata = {
    title: 'Blog Details',
    description: 'Blog Details',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>
        {children}
    </>
}