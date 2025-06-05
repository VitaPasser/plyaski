'use client'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Image from 'next/image'

interface Event {
    id: string
    header: string
    address: string
    tags: string[]
    description: string
    phone?: string
    images: {
        id: string
        src: string
    }[]
    map: {
        x: number
        y: number
    }
}

const MapPicker = dynamic(() => import('@/components/MapPicker/MapPicker'), { ssr: false })
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

interface EventFull extends Omit<Omit<Event, 'map'>, 'id'> {
    category: string
    map: {
        longitude: number
        latitude: number
    }
}

interface EventSend extends Omit<Omit<Omit<Omit<Omit<Omit<EventFull, 'tags'>, 'category'>, 'images'>, 'header'>, 'map'>, 'phone'> {
    tagIds: string[],
    categoryId: number,
    imagesIds: string[],
    name: string,
    coords: {
        longitude: number
        latitude: number
    },
    phoneNumber: string
}


export default function CreateEventPage() {
    const router = useRouter()
    useEffect(() => {
        const checkAuth = async () => {
            const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
            if (!token) {
                router.replace('/login')
                return
            }
            const res = await fetch(SERVER_URL + 'auth/auth', {
                method: 'GET',
                headers: {
                    'authorization': 'Bearer ' + token,
                }
            })
            if (!res.ok) {
                router.replace('/login')
            }
        }
        checkAuth()
    }, [router])

    const [form, setForm] = useState<Omit<EventFull, 'id'>>({
        header: '',
        address: '',
        tags: [],
        category: '',
        description: '',
        phone: '',
        images: [],
        map: { longitude: 0, latitude: 0 }
    })
    const [tagInput, setTagInput] = useState('')
    const [imageUploading, setImageUploading] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [imagePreviews, setImagePreviews] = useState<string[]>([])

    const [showMap, setShowMap] = useState(false)
    const [geoLoading, setGeoLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddTag = () => {
        if (tagInput.trim()) {
            setForm(prev => ({
                ...prev,
                tags: [...prev.tags, tagInput.trim()]
            }))
            setTagInput('')
        }
    }

    const handleRemoveTag = (idx: number) => {
        setForm(prev => ({
            ...prev,
            tags: prev.tags.filter((_, i) => i !== idx)
        }))
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const files = e.target.files
        if (!files || files.length === 0) return
        setImageUploading(true)
        const uploadedImages: { id: string, src: string }[] = []
        const previews: string[] = []
        for (let i = 0; i < files.length; i++) {
            const formData = new FormData()
            formData.append('file', files[i])
            const url = SERVER_URL + 'images/upload'
            console.log(url)
            console.log(formData)
            console.log('Bearer ' + (localStorage.getItem('token') ?? ''))
            const res = await fetch(url, {
                method: 'POST',
                body: formData,
                headers: {
                    'authorization': 'Bearer ' + (localStorage.getItem('token') ?? '')
                }
            })
            console.log(res)
            if (res.ok) {
                const data = await res.json()
                uploadedImages.push({ id: data.id, src: data.src })
                previews.push(data.src)
            } else {
                alert('Помилка завантаження зображення')
            }
        }
        setForm(prev => ({
            ...prev,
            images: [...prev.images, ...uploadedImages]
        }))
        setImagePreviews(prev => [...prev, ...previews])
        setImageUploading(false)
        e.target.value = ''
    }

    const handleRemoveImage = (idx: number) => {
        setForm(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== idx)
        }))
        setImagePreviews(prev => prev.filter((_, i) => i !== idx))
    }

    const handleMapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            map: {
                ...prev.map,
                [name]: Number(value)
            }
        }))
    }

    const handleGetLocation = () => {
        setGeoLoading(true)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setForm(prev => ({
                        ...prev,
                        map: {
                            longitude: pos.coords.longitude,
                            latitude: pos.coords.latitude
                        }
                    }))
                    setGeoLoading(false)
                },
                (err) => {
                    alert('Не вдалося отримати геолокацію: ' + err.message)
                    setGeoLoading(false)
                },
                {
                    enableHighAccuracy: true,
                    timeout: 2000,
                    maximumAge: 0,
                }
            )
        } else {
            alert('Геолокація не підтримується вашим браузером')
            setGeoLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const categoryId = (await (await fetch(SERVER_URL + 'category/findOrCreateByName/' + form.category, {
            method: 'POST',
            headers: {
                'authorization': 'Bearer ' + (localStorage.getItem('token') ?? '')
            }
        })).json()).id
        const tagIds = await Promise.all<string>(form.tags.map(async (tag) => {
            return (await (await fetch(SERVER_URL + 'tags/findOrCreateByName/' + tag, {
                method: 'POST',
                headers: {
                    'authorization': 'Bearer ' + (localStorage.getItem('token') ?? '')
                }
            })).json()).id
        }))
        const imagesIds = form.images.map((image) => image.id)
        const eventData: EventSend = {
            address: form.address,
            description: form.description,
            name: form.header,
            phoneNumber: form.phone ?? '+380000000000',
            coords: form.map,
            tagIds,
            categoryId,
            imagesIds
        }
        console.log(JSON.stringify(eventData))
        console.log(localStorage.getItem('token') ?? '')
        const res = await fetch(SERVER_URL + 'events/form', {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'authorization': 'Bearer ' + (localStorage.getItem('token') ?? ''),
                'Content-Type': 'application/json',
            }
        })

        if (res.ok) {
            const data = await res.json()
            router.push(`/info/event/${data.id}`)
        } else {
            alert('Помилка створення форми')
        }
    }

    return (
        <div className="max-w-xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Створити подію</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="header">Назва</Label>
                    <Input id="header" name="header" value={form.header} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="address">Адреса</Label>
                    <Input id="address" name="address" value={form.address} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" name="phone" value={form.phone} onChange={handleChange} />
                </div>
                <div>
                    <Label htmlFor="description">Опис</Label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full border rounded p-2"
                        value={form.description}
                        onChange={handleChange}
                        rows={4}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="phone">Категорія</Label>
                    <Input id="category" name="category" value={form.category} onChange={handleChange} />
                </div>
                <div>
                    <Label>Теги</Label>
                    <div className="flex gap-2 mb-2">
                        <Input
                            value={tagInput}
                            onChange={e => setTagInput(e.target.value)}
                            placeholder="Додати тег"
                            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddTag() } }}
                        />
                        <Button type="button" onClick={handleAddTag}>Додати</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {form.tags.map((tag, idx) => (
                            <span key={idx} className="bg-gray-200 rounded-full px-3 py-1 flex items-center">
                                {tag}
                                <button type="button" className="ml-2 text-red-500" onClick={() => handleRemoveTag(idx)}>×</button>
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <Label>Зображення</Label>
                    <div className="flex gap-2 mb-2">
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            disabled={imageUploading}
                        />
                        {imageUploading && <span>Завантаження...</span>}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {form.images.map((img, idx) => (
                            <span key={idx} className="bg-gray-200 rounded px-2 py-1 flex items-center">
                                <Image src={SERVER_URL + img.src} alt="" className="w-60 h-60 object-cover rounded mr-2" width={600} height={600} />
                                <button type="button" className="ml-2 text-red-500" onClick={() => handleRemoveImage(idx)}>×</button>
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <Label>Координати (широта, довгота)</Label>
                    <div className="flex gap-2 mb-2">
                        <Input
                            type="number"
                            name="y"
                            value={form.map.latitude}
                            onChange={handleMapChange}
                            placeholder="Широта"
                            step="any"
                            required
                        />
                        <Input
                            type="number"
                            name="x"
                            value={form.map.longitude}
                            onChange={handleMapChange}
                            placeholder="Довгота"
                            step="any"
                            required
                        />
                    </div>
                    <div className="flex gap-2 mb-2">
                        <Button type="button" variant="outline" onClick={handleGetLocation} disabled={geoLoading}>
                            {geoLoading ? 'Визначаємо...' : 'Взяти мою геолокацію'}
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setShowMap(v => !v)}>
                            {showMap ? 'Сховати карту' : 'Обрати на карті'}
                        </Button>
                    </div>
                    {showMap && (
                        <div className="h-72 w-full rounded overflow-hidden border mt-2">
                            <MapPicker
                                lat={form.map.latitude}
                                lng={form.map.longitude}
                                onPick={(lat: number, lng: number) => setForm(prev => ({
                                    ...prev,
                                    map: { longitude: lng, latitude: lat }
                                }))}
                            />
                        </div>
                    )}
                </div>
                <Button type="submit" className="mt-4">Створити подію</Button>
            </form>
        </div>
    )
}