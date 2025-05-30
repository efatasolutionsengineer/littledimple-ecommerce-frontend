import Container from "@/features/dashboard/components/container";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            {children}
        </Container>
    );
}
