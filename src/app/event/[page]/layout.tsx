import Link from "next/link";
import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import NavBarMobile from "@/components/Navbar/NavBarMobile";
import { FaArrowRight } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Frame from "@/components/Frame/Frame";

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
                <footer className='pb-16 flex flex-col gap-y-4 sm:flex-row justify-between w-full'>
                    <div className='flex flex-col gap-4'>
                        <p>
                            &copy; 2025 VitaPasser A$$-221 ONPU.
                        </p>
                        <Link href="/" className='hover:underline'>Політика конфіденційності</Link>
                        <div>
                            <label>
                                <p className='flex flex-row content-center items-center gap-2'><FiMail /> Підписатись на нові оголошення та новини</p>
                                <div className='flex flex-row content-center items-center gap-2 max-sm:flex-col'>
                                    <input className='border-[1px] border-black px-4 py-1 ' type="text" />
                                    <Button className='max-sm:rounded-full'>Підписатись <FaArrowRight /></Button>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col content-center justify-center gap-4'>
                        <div className='flex flex-col content-center justify-center gap-1'>
                            <Link href="https://www.linkedin.com/in/vitalii-vorobiov-42613725b/" className='hover:underline'>Linkedin</Link>
                            <Link href="https://t.me/VitaPasser" className='hover:underline'>Telegram</Link>
                        </div>
                        <div className='flex flex-col content-center justify-center'>
                            <p>Для рекламодавців:</p>
                            <Link href="tel:+38098XXXXXXX" className='hover:underline'>+380 98 XXXXXXX</Link>
                        </div>
                    </div>
                </footer>
            </Frame>
        </div>
    );
}
