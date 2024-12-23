'use client'

import Section from "@/components/features/section"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react";
import ItemTable from "@/components/features/procurement/itemTable";
import Link from "next/link";




export default function Page() {


    const quoteLeft = [
        'Title', 'RFQ No', 'Requestor', 'Status', 'Department'
    ]


    return (

        <div className="px-8 text-gray-100">
            <div className="flex justify-between my-8 items-center">
                <div className="">
                    <h1 className="font-bold text-[1.5rem] text-black">Quote details</h1>
                    <p className="text-sm">Created on Wed, 12th June 2022, 08:00am</p>
                </div>
                <div className="flex gap-4 ">
                    <Button className="w-[5.625rem] bg-blue-100" asChild><Link href={'quotes/response?tab=1'}>Respond</Link></Button>
                    <Button className="w-[5.625rem] bg-[#D42620]"  ><Icon width="24" height="24" icon={'mdi:multiply'} />Reject</Button>
                </div>
            </div>
            <Section headerRow title="Quote Information" subTitle="Expected delivery date : 2024-12-02">
                <div className="mt-8 flex justify-between">

                    <div className="flex flex-col gap-4">
                        {quoteLeft.map((q, i) => <p key={i} className="text-[#555E68] font-[500] opacity-65">{q}</p>)}
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-medium text-[#344054]">Request for Equipments</p>
                        <p className="font-medium text-[#344054]">#344054</p>
                        <div className="flex items-center gap-2">
                            <div className="#101928 font-bold text-sm rounded-full h-8 w-8 flex items-center justify-center bg-[#FFECE5]">JD</div>
                            <span className="font-medium text-[#344054]">Jane Doe</span>
                            <span className="h-[6px] w-[6px] rounded-full bg-[#98A2B3]"></span>
                            <span className="text-[#98A2B3]">Head Nurse, Paediatrics</span>
                        </div>
                        <p className="text-[#F56630] font-500 text-xs px-2 self-start rounded-lg bg-[#FFECE5]">Awaiting</p>
                        <p className="font-medium text-[#101928]">Maternity</p>
                    </div>

                    <div className="flex flex-col gap-4 border self-start rounded-lg p-4 w-[22rem]">
                        <div className="flex gap-2 items-center">
                            <Icon width="24" height="24" icon={'heroicons:building-office-2'} />
                            <span className="text-[#475367] text-xs">Client</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="#101928 font-bold text-sm rounded-full h-8 w-8 flex items-center justify-center bg-[#FFECE5]">W</div>
                            <div>
                                <p className="text-[#101928] text-sm font-[500]">Westend Hospital</p>
                                <p className="text-[#475367] text-xs">Clear street</p>
                            </div>
                        </div>
                    </div>

                </div>

            </Section>
            <ItemTable />

            <div className="flex justify-between border p-6 items-center mb-16 rounded-lg">
                <div className="flex gap-3 items-start">
                    <Icon color="#1D2739" className="mt-1" width="32" height="32" icon={'iconamoon:file-document-bold'} />
                    <div>
                        <p className="text-[#1D2739] text-xl font-bold">Terms and Attachments</p>
                        <p className="text-sm text-[#475367]">Review payment and delivery terms</p>
                    </div>
                </div>
                <Icon color="#1D2739" className="mt-1" width="24" height="24" icon={'solar:alt-arrow-down-linear'} />
            </div>
        </div>
    )
}