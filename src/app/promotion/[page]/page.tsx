"use client"
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


export default function PromotionPage() {
    const promotion_services = [
        {
            title: "Невелике просування",
            description: "Щоб виділитися на вулиці",
            cost: "250грн"
        },
        {
            title: "Середнє просування",
            description: "Щоб виділитися в кварталі",
            cost: "500грн"
        },
        {
            title: "Велике просування",
            description: "Щоб виділитися на районі",
            cost: "1250грн"
        },
        {
            title: "Місцеве просування",
            description: "Щоб виділитися в місті",
            cost: "2500грн"
        }
    ]
    const name_event = {
        name: "Потанцювати з пацанами2222222222222222222222222222222222222222222222222",
        id: 1
    }
    return (
        <div className="p-4 flex flex-col justify-center items-center min-h-screen gap-8">
            <div className="flex flex-row gap-4 justify-center flex-wrap">
                {promotion_services.map((service, key) => <Card key={key} className="w-[350px] h-fit">
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
                        <Link href={`/info/event/${name_event.id}`} className="line-clamp-2 break-all">{name_event.name}</Link>
                        <Button>Просунути</Button>
                    </CardFooter>
                </Card>)}


            </div>
            <Card className="h-fit w-fit    ">
                <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>
                        Add a new payment method to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4">
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
                        {/* <div>
                            <RadioGroupItem
                                value="apple"
                                id="apple"
                                className="peer sr-only"
                                aria-label="Apple"
                            />
                            <Label
                                htmlFor="apple"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary "
                            >
                                <Icons.apple className="mb-3 h-6 w-6" />
                                Apple
                            </Label>
                        </div> */}
                    </RadioGroup>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="First Last" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="number">Card number</Label>
                        <Input id="number" placeholder="" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="month">Expires</Label>
                            <Select>
                                <SelectTrigger id="month" aria-label="Month">
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">January</SelectItem>
                                    <SelectItem value="2">February</SelectItem>
                                    <SelectItem value="3">March</SelectItem>
                                    <SelectItem value="4">April</SelectItem>
                                    <SelectItem value="5">May</SelectItem>
                                    <SelectItem value="6">June</SelectItem>
                                    <SelectItem value="7">July</SelectItem>
                                    <SelectItem value="8">August</SelectItem>
                                    <SelectItem value="9">September</SelectItem>
                                    <SelectItem value="10">October</SelectItem>
                                    <SelectItem value="11">November</SelectItem>
                                    <SelectItem value="12">December</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="year">Year</Label>
                            <Select>
                                <SelectTrigger id="year" aria-label="Year">
                                    <SelectValue placeholder="Year" />
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
                            <Input id="cvc" placeholder="CVC" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="gap-4 flex ">
                    <Button variant="outline" className="w-full">Повернутися</Button>
                    <Button className="w-full">Continue</Button>
                </CardFooter>
            </Card>
        </div>
    )
}