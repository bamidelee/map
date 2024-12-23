
import Section from "../section";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,

} from "@/components/ui/table"
import image from '@/public/Misc icon.png'
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"
import HandleCheckBox from "./handledCheckbox";
import { useState } from "react";



export default function ItemTable() {

    const [allChecked, setAllChecked] = useState(false)
    const tHead = [
        'Items', 'Variants', 'Quantity', 'Price', 'Amount', 'Expected Delivery Date'
    ]

    const row = [
        {
            items: {
                top: 'Oxygen concentrator',
                bottom: '#28373'
            },
            variant: 'Blue',
            quantity: '100 pieces',
            price: '$200.00',
            amount: '$2,000.0',
            expected: '2024-08-07'
        },

        {
            items: {
                top: 'Mechanical ventilator',
                bottom: '#28373'
            },
            variant: 'NIL',
            quantity: '45 Kg',
            price: '$350.00',
            amount: '$2,500.00',
            expected: '2024-08-07'
        },

        {
            items: {
                top: 'Patient Monitor',
                bottom: '#28373'
            },
            variant: 'Blue',
            quantity: '30 Units',
            price: '$300.00',
            amount: '$1,500.00',
            expected: '2024-08-07'
        },

        {
            items: {
                top: 'Oxygen concentrator',
                bottom: '#28373'
            },
            variant: 'Blue',
            quantity: '35 Units',
            price: '$200.00',
            amount: '$1,500.0',
            expected: '2024-08-07'
        },
    ]

    return (
        <Section shadow title="Item(s)">
            <Table className="mt-4 border rounded-lg border-separate border-spacing-0 text-[#344054] overflow-hidden">
                <TableCaption className="hidden">A list of your recent invoices.</TableCaption>
                <TableHeader className="bg-[#F9FAFB] h-[2.8rem]">
                    <TableRow className="">

                        <TableHead><Checkbox checked={allChecked} onCheckedChange={() => setAllChecked(!allChecked)} /></TableHead>
                        {tHead.map((t, i) => <TableHead key={i}>{t}</TableHead>)}

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {row.map((r, i) => <TableRow className="h-[3.25rem]" key={i}>
                        <TableCell className="border-t"><HandleCheckBox allChecked={allChecked} setAllChecked={setAllChecked} /></TableCell>
                        <TableCell className="border-t max-w-[20%]"><div className="flex gap-3">
                            <Image alt="product" width={40} height={40} className="rounded-lg" src={image} />
                            <div>
                                <p className="text-[#101928] font-[500] max-w-[8rem] overflow-hidden text-ellipsis whitespace-nowrap">{r.items.top}</p>
                                <p>{r.items.bottom}</p>
                            </div>
                        </div></TableCell>
                        <TableCell className="border-t w-[15%]">{r.variant}</TableCell>
                        <TableCell className="border-t w-[15%]">{r.quantity}</TableCell>
                        <TableCell className="border-t w-[15%]"> {r.price}</TableCell>
                        <TableCell className="border-t w-[15%]"> {r.amount}</TableCell>
                        <TableCell className="border-t w-[15%]"> {r.expected}</TableCell>
                    </TableRow>)}

                </TableBody>
            </Table>
            <div className="grid grid-cols-[5%,20%,15%,15%,15%,15%,1fr]">
                <div> </div>
                <div> </div>
                <div></div>
                <div></div>
                <div></div>
                <div className="flex flex-col gap-8 mt-8 pl-3">
                    <span>Sub Total</span>
                    <span>Total</span>
                    
                </div>
                <div className="flex flex-col gap-8 mt-8 pl-3">
                <span>$8,000.00</span>
                    
                    <span className="font-bold">$8,750.00</span>
                </div>




            </div>
         
        </Section>
    )

}