import '../globals.css'
import HeaderStore from "./header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="justify-center h-screen">
            <HeaderStore />
            {children}
        </section>
    )
}
