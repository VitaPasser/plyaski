'use client'
import React, { useEffect, useState } from 'react'
import { Map as Map2, Marker } from "pigeon-maps"

const Map = ({ x, y, className }: { x: number, y: number, className?: string }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className={`object-cover w-1/2 rounded-br-md overflow-hidden ${className ?? ''}`} >
            {
                isClient ?
                    <Map2 defaultCenter={[x, y]} defaultZoom={12}>
                        <Marker width={50} anchor={[x, y]} />
                    </Map2>
                    : <div className='w-full h-full bg-slate-400'></div>
            }
        </div>
    )
}

export default Map