'use client'
import { Map, Marker } from "pigeon-maps"
import { useState, useEffect } from "react"

export default function MapPicker({
    lat,
    lng,
    onPick
}: {
    lat: number,
    lng: number,
    onPick: (lat: number, lng: number) => void
}) {
    const [position, setPosition] = useState<[number, number]>([
        lat || 48.3794,
        lng || 31.1656
    ])

    useEffect(() => {
        setPosition([
            lat || 48.3794,
            lng || 31.1656
        ])
    }, [lat, lng])

    return (
        <Map
            height={300}
            defaultCenter={[48.3794, 31.1656]}
            center={position}
            zoom={6}
            onClick={({ latLng }) => {
                setPosition(latLng)
                onPick(latLng[0], latLng[1])
            }}
        >
            <Marker
                width={40}
                anchor={position}
            />
        </Map>
    )
}
