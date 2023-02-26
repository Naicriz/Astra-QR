import '../globals.css'
import HeaderStore from "../Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <HeaderStore />
            {children}
        </section>
    )
}
