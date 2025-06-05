"use client"
import { fetchList, fetchPromotion } from "@/app/page"
import { EventMiniature } from "@/components/Card/CardEvent"
import Link from "@/components/Link/Link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { useParams, useRouter } from "next/navigation"
import { useState, useEffect, Suspense } from "react"

interface Promotion {
    id: string,
    title: string,
    description: string,
    cost: string,
}

export default function PromotionPage() {

    const [userId, setUserId] = useState<string>()
    const [authorId, setAuthorId] = useState<string>()
    const router = useRouter()
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
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
            setUserId((await res.json()).sub)
        }
        checkAuth()
    }, [SERVER_URL, router])

    const params = useParams<{ page: string }>()
    const pageNumber = params.page;

    const [promotionServices, setPromotionServices] = useState<Promotion[]>()
    const [list, setList] = useState<EventMiniature>()
    const [selectPromotion, setSelectPromotion] = useState<Promotion>()
    const [payment, setPayment] = useState({
        name: '',
        city: '',
        number: '',
        month: '',
        year: '',
        cvc: '',
        method: 'card'
    })

    useEffect(() => {

        async function fetchPromotionService() {

            const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
            const url = server_url + `promotions`
            console.log(server_url)
            console.log(url)
            const data: fetchPromotion[] = await (await fetch(url)).json()
            console.log(data)
            if (!Array.isArray(data)) { return; }
            const list_data: Promotion[] = data.map((list_element: fetchPromotion) => {
                const list_end: Promotion = {
                    id: list_element.id,
                    title: list_element.name,
                    description: list_element.description,
                    cost: `${list_element.price} ${list_element.currency.quotation}`
                };
                return list_end
            })
            console.log(list_data)
            setPromotionServices(list_data)

        }
        if (!promotionServices) fetchPromotionService()

        async function fetchEventActions() {

            const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
            const url = server_url + `events/${pageNumber}`
            console.log(server_url)
            console.log(url)

            const data: fetchList = await (await fetch(url)).json()

            console.log(data)
            if (!data) { return; }

            setAuthorId(data.author.id);
            const list_data: EventMiniature = {
                id: data.id,
                header: data.name,
                description: data.description,
                address: data.address,
                phone: data.phoneNumber,
                map: { y: data.coords.coordinates[1], x: data.coords.coordinates[0] },
                tags: [data.category.name].concat(data.tags.map((tag) => tag.name)),
                image: {
                    src: `${server_url}${data.images[0].src}`
                }
            };
            console.log(list_data)
            setList(list_data)

        }
        if (!list) fetchEventActions()
        if (userId && authorId && (userId !== authorId)) {
            router.back()
            return;
        }
    })
    // const promotion_services = [
    //     {
    //         title: "Невелике просування",
    //         description: "Щоб виділитися на вулиці",
    //         cost: "250грн"
    //     },
    //     {
    //         title: "Середнє просування",
    //         description: "Щоб виділитися в кварталі",
    //         cost: "500грн"
    //     },
    //     {
    //         title: "Велике просування",
    //         description: "Щоб виділитися на районі",
    //         cost: "1250грн"
    //     },
    //     {
    //         title: "Місцеве просування",
    //         description: "Щоб виділитися в місті",
    //         cost: "2500грн"
    //     }
    // ]
    // const name_event = {
    //     name: "Потанцювати з пацанами2222222222222222222222222222222222222222222222222",
    //     id: 1
    // }
    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setPayment(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRadioChange = (value: string) => {
        setPayment(prev => ({
            ...prev,
            method: value
        }))
    }

    const handlePay = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectPromotion || !list) {
            alert('Оберіть послугу для просування')
            return
        }
        const url = SERVER_URL + 'promotion-events'
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
        const payload = {
            eventActionId: list.id,
            promotionId: selectPromotion.id,
        }
        console.log(payload)
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + (token ?? '')
            },
            body: JSON.stringify(payload)
        })
        if (res.ok) {
            alert('Оплата успішна!')
            router.push(`/info/event/${list.id}`)
        } else {
            alert('Помилка оплати')
        }
    }

    return (
        <div className="p-4 flex flex-col justify-center items-center min-h-screen gap-8">
            <div className="flex flex-row gap-4 justify-center flex-wrap">
                <Suspense>
                    {promotionServices?.map((service, key) => <Card key={key} className={`w-[350px] h-fit ${service.id == selectPromotion?.id ? 'border-red-500 scale-[1.06]' : ''}`}>
                        <CardHeader>
                            <CardTitle>{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <p>Ціна: {service.cost}</p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between gap-4">
                            <Link href={`/info/event/${list?.id}`} className="line-clamp-2 break-all">{list?.header}</Link>
                            <Button onClick={() => setSelectPromotion(service)}>Просунути</Button>
                        </CardFooter>
                    </Card>)}
                </Suspense>


            </div>
            <form onSubmit={handlePay}>
                <Card className="h-fit w-fit">
                    <CardHeader>
                        <CardTitle>Payment Method</CardTitle>
                        <CardDescription>
                            Add a new payment method to your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <RadioGroup defaultValue={payment.method} className="grid grid-cols-2 gap-4" onValueChange={handleRadioChange}>
                            <div>
                                <RadioGroupItem
                                    value="card"
                                    id="card"
                                    className="peer sr-only"
                                    aria-label="Card"
                                />
                                <Label
                                    htmlFor="card"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="mb-3 h-6 w-6"
                                    >
                                        <rect width="20" height="14" x="2" y="5" rx="2" />
                                        <path d="M2 10h20" />
                                    </svg>
                                    Card
                                </Label>
                            </div>
                            <div>
                                <RadioGroupItem
                                    value="paypal"
                                    id="paypal"
                                    className="peer sr-only"
                                    aria-label="Paypal"
                                />
                                <Label
                                    htmlFor="paypal"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <Icons.paypal className="mb-3 h-6 w-6" />
                                    Paypal
                                </Label>
                            </div>
                        </RadioGroup>
                        <div className="grid gap-2">
                            <Label htmlFor="name">ПІБ</Label>
                            <Input id="name" name="name" placeholder="ПІБ" value={payment.name} onChange={handlePaymentChange} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="city">Місто</Label>
                            <Input id="city" name="city" placeholder="" value={payment.city} onChange={handlePaymentChange} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="number">Номер картки</Label>
                            <Input id="number" name="number" placeholder="" value={payment.number} onChange={handlePaymentChange} />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="month">Термін дії</Label>
                                <Select value={payment.month} onValueChange={val => setPayment(prev => ({ ...prev, month: val }))}>
                                    <SelectTrigger id="month" aria-label="Month">
                                        <SelectValue placeholder="Місяць" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Січень</SelectItem>
                                        <SelectItem value="2">Лютий</SelectItem>
                                        <SelectItem value="3">Березень</SelectItem>
                                        <SelectItem value="4">Квітень</SelectItem>
                                        <SelectItem value="5">Травень</SelectItem>
                                        <SelectItem value="6">Червень</SelectItem>
                                        <SelectItem value="7">Липень</SelectItem>
                                        <SelectItem value="8">Серпень</SelectItem>
                                        <SelectItem value="9">Вересень</SelectItem>
                                        <SelectItem value="10">Жовтень</SelectItem>
                                        <SelectItem value="11">Листопад</SelectItem>
                                        <SelectItem value="12">Грудень</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="year">Рік</Label>
                                <Select value={payment.year} onValueChange={val => setPayment(prev => ({ ...prev, year: val }))}>
                                    <SelectTrigger id="year" aria-label="Year">
                                        <SelectValue placeholder="Рік" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 10 }, (_, i) => (
                                            <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                                                {new Date().getFullYear() + i}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" name="cvc" placeholder="CVC" value={payment.cvc} onChange={handlePaymentChange} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="gap-4 flex ">
                        <Button variant="outline" className="w-full" onClick={() => router.back()} type="button">Повернутися</Button>
                        <Button className="w-full" type="submit">Оплатити</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}