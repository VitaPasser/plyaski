import React from 'react'

const ButtonOpenNavBar = ({ className, children }: {
    children: React.ReactNode,
    onClick: () => void,
    className?: string
}) => {
    return (
        <button
            className={`md:hidden flex border-[1px] rounded-full divide-x-[1px] transition ease-in-out delay-150 hover:scale-110 hover:backdrop-contrast-0 hover:bg-white/30 p-1 ${className ?? ""}`}
            onClick={() =>
                document
                .getElementById('root')
                ?.classList
                    .toggle("is-open-menu")
            }
        >
            {children}
        </button>
    )
}

export default ButtonOpenNavBar