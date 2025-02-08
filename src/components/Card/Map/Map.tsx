'use client'
import React from 'react'
import { Map as Map2, Marker } from "pigeon-maps"

const Map = ({x, y, className}: {x:number, y:number, className?: string}) => {
    return (
        <div className={`object-cover w-1/2 rounded-br-md overflow-hidden ${className ?? ''}`} >
            <Map2 defaultCenter={[x, y]} defaultZoom={17}>
                <Marker width={50} anchor={[x, y]} />
            </Map2>
        </div>
    )
}

export default Map