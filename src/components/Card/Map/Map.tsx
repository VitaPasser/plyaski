'use client'
import React from 'react'
import { Map as Map2, Marker } from "pigeon-maps"

const Map = ({x, y}: {x:number, y:number}) => {
    return (
        <div className='object-cover w-1/2 aspect-[1/1.51] rounded-br-md overflow-hidden ' >
            <Map2 defaultCenter={[x, y]} defaultZoom={17}>
                <Marker width={50} anchor={[x, y]} />
            </Map2>
        </div>
    )
}

export default Map