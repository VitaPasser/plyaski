import Header from "@/components/Header/Header";
import Frame from "@/components/Frame/Frame";
import Footer from "@/components/Footer/Footer";

export default async function EventLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header className="pb-12" classNameNavElements="hover:bg-white/90 bg-white" />
            <Frame className='flex-col gap-12 justify-between min-h-screen'>
                <main className="w-full">
                    {children}
                </main>
                <Footer />
            </Frame>
        </>
    );
}
