import Header from "@/components/Header/Header";
import NavBarMobile from "@/components/Navbar/NavBarMobile";
import Frame from "@/components/Frame/Frame";
import Footer from "@/components/Footer/Footer";

export default async function EventLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='relative font-sans group ' id='root'>
            <NavBarMobile />
            <Frame className='flex-col gap-12 justify-between min-h-screen'>
                <Header classNameNavElements="hover:bg-white/90 bg-white"/>
                <main className="w-full">
                    {children}
                </main>
                <Footer />
            </Frame>
        </div>
    );
}
