import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

const Avatar = ({
    id,
    avatar,
    link,
    className,
    classNameImg
}: {
    id?: string
    avatar: string
    link?: string
    className?: string
    classNameImg?: string
}) => {
    const Link2 = ({
        children, className
    }: {
        className?: string
        children: React.ReactNode
    }) => {
        return id ?
            <Link className={className} href={`/info/forum/all-articles/user/${id}`}>
                {children}
            </Link> : link ?
                <Link className={className} href={link}>
                    {children}
                </Link> :
                <>{children}</>
    }
    return (
        <Link2 className={className}>
            <Image className={`aspect-square rounded-full object-cover w-[40px] h-[40px] ${classNameImg ?? ""}`} src={`/${avatar}`} width='160' height='160' alt='avatar' />
        </Link2>
    )
}

export default Avatar