'use client'

import { Input } from "@/components/ui/input"
import Section from "../section"
import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,

} from "@/components/ui/table"

import {
    Select,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Icon } from "@iconify/react";
import TextareaWithLabel from "./textArea"
import Link from "next/link"




import { useState } from "react"



export default function RequestQuote() {

    const [date, setDate] = useState<Date>()

    const formInputs = [
        {
            label: 'RFQ No',
            placeholder: 'RFQ-10234'
        },

        {
            label: 'Title',
            placeholder: 'Request for Equipments'
        },

        {
            label: 'Department',
            placeholder: 'Maternity',
            close: true
        },
    ]

    const tHead = [
        'Items', 'Variants', 'Quantity', 'Price', 'Expected Delivery Date', 'Amount', ' '
    ]

    const tContent = [
        'Oxygen Concentrator', 'Oxygen Concentrator', 'Patient Monitor', 'Mechanical Ventilator'
    ]

    return (
        <Section title="Request for Quote" subTitle="Fill out these details to send the RFQ">
            <div className="mt-8 grid grid-cols-2 gap-4 border-b pb-6 mb-6">
                {formInputs.map((t, i) => <div className="mt-2" key={i}>
                    <label className="font-bold text-sm" htmlFor={t.label}>{t.label}</label>
                    <div className="relative flex items-center">
                        <Input className="bg-[#F0F2F5]" id={t.label} placeholder={t.placeholder} />
                        {t.close && <Icon width="18" height="18" icon={'mdi:multiply'} color="#667185" className="absolute right-4" />}
                    </div>
                </div>)}


                <div className="mt-2">
                    <label className="font-bold text-sm" htmlFor={''}>{'Expected delivery date'}</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full bg-[#F0F2F5] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon />
                                {date ? format(date, "PPP") : <span>2024-12-02</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <p className="text-xs font-[500] text-[#667185] mt-3">Calculated based on lead time and issue date</p>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-[#1D2739] ">Add Items</h3>
                <Table className="mt-4 border rounded-lg border-separate border-spacing-0 text-[#344054] overflow-hidden border-b pb-8">
                    <TableCaption className="hidden">A list of your recent invoices.</TableCaption>
                    <TableHeader className="bg-[#F9FAFB] h-[2.8rem]">
                        <TableRow className="">



                            {tHead.map((t, i) => <TableHead key={i}>{t}</TableHead>)}

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tContent.map((r, i) => <TableRow className="h-[3.25rem]" key={i}>
                            <TableCell className="w-[20%]" >
                                <Select>
                                    <SelectTrigger className=" bg-[#F0F2F5]">
                                        <SelectValue placeholder={r} />
                                    </SelectTrigger>

                                </Select></TableCell>
                            <TableCell className="w-[15%]"><Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder={'Blue'} />
                                </SelectTrigger>

                            </Select></TableCell>
                            <TableCell className="w-[15%]"><div className="relative flex items-center"><Input className="w-full" defaultValue={100} /> <div className="text-[#667185] px-1 bg-[#F0F2F5] text-xs h-4 right-2 absolute rounded">Pack</div></div></TableCell>
                            <TableCell className="w-[15%]"> <div className="relative flex items-center"><Icon width="18" height="18" color="#667185" className="absolute left-2" icon={'clarity:dollar-line'} /><Input className="w-full pl-8" defaultValue={'12.00'} /></div></TableCell>
                            <TableCell className="w-[15%]">   <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full  justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>2023-12-02</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover></TableCell>
                            <TableCell className="w-[15%] font-bold" > {'$1200.00'}</TableCell>
                            <TableCell><Icon width="24" height="24" color="#98A2B3" icon={'solar:trash-bin-minimalistic-linear'} /></TableCell>
                        </TableRow>)}

                    </TableBody>
                </Table>
                <div className="grid grid-cols-[20%,15%,15%,15%,15%,1fr]">
                    <div> </div>
                    <div> </div>
                    <div></div>
                    <div></div>
                    <p className="py-4 pl-3 text-[#475367]">Sub Total</p>
                    <p className="py-4 pl-3 text-[#475367]">$1200.00</p>
                </div>
            </div>
            <TextareaWithLabel />
            <div className="flex gap-8 justify-end mt-8">
                <Button className="text-[#475367]" variant={'outline'} asChild><Link href={'/procurement/quotes'}>Cancel</Link></Button>
                <Button className="border-[#175CFF] text-[#175CFF] w-[11.5rem]" variant={'outline'}>Save as draft</Button>
                <Button className="bg-[#175CFF] w-[11.5rem]" asChild><Link href={'response?tab=2'}>Continue</Link></Button>
            </div>
        </Section>
    )
}