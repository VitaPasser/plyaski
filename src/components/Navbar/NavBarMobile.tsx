"use client"
import ButtonOpenNavBar from './ButtonOpenNavBar'
import NavElement from './NavElement';

const NavBarMobile = (
    {
        classNameNavElements
    }: {
        classNameNavElements?: string
    }
) => {

    return (
        <div className='md:hidden hidden group-[.is-open-menu]:block'>
            <div className='h-screen w-screen fixed top-0 right-0 left-0 z-50 justify-center items-center inset-0 max-h-full'>
                <div className='z-50 bg-white text-black h-full w-full'>
                    <div className='flex flex-col justify-center items-center content-center place-content-center h-full w-full'>
                        <NavElement className={`rounded-full border-b-[1px] ${classNameNavElements ?? 'hover:bg-white/90'}`} url='/info/near-clubs/'>Найближчі клуби</NavElement>
                        <NavElement className={`rounded-full border-b-[1px] mt-4 ${classNameNavElements ?? 'hover:bg-white/90'}`} url='/info/near-events/'>Найближчі заклади</NavElement>
                        <NavElement className={`rounded-full border-b-[1px] mt-4 ${classNameNavElements ?? 'hover:bg-white/90'}`} url='/info/'>Суспільство</NavElement>
                        <NavElement className={`rounded-full border-b-[1px] mt-4 ${classNameNavElements ?? 'hover:bg-white/90'}`} url='/info/about/'>О нас</NavElement>
                        <ButtonOpenNavBar
                            className="rounded-full border-0 border-b-[1px] mt-4 px-2"
                            onClick={() =>
                                document
                                    .getElementById('root')
                                    ?.classList
                                    .toggle("is-open-menu")}
                        >
                            Закрити
                        </ButtonOpenNavBar>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavBarMobile