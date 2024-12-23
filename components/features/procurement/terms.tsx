
'use client'
import Section from "../section"

import {
    Select,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Terms() {


    const formInputs = [
        {
            label: 'Payment Terms',
            placeholder: 'Net 30'
        },

        {
            label: 'Delivery Schedule',
            placeholder: 'Immediate delivery'
        },

        {
            label: 'Shipping Method',
            placeholder: 'Courier Services'
        },

    ]


    return (
        <Section title="Terms and Attachments" subTitle="Provide detailed information on payment and delivery terms">
            <div className="mt-8 grid grid-cols-2 gap-4 border-b pb-6 mb-6">
                {formInputs.map((t, i) => <div className="mt-2" key={i}>
                    <label className="font-bold text-sm" htmlFor={t.label}>{t.label}</label>
                    <Select>
                        <SelectTrigger className="w-full  mt-1">
                            <SelectValue placeholder={t.placeholder} />
                        </SelectTrigger>

                    </Select>
                </div>)}

                <div className="mt-2">
                    <label className="font-bold text-sm" htmlFor={''}>{'Lead time'}</label>
                    <div className="relative flex items-center mt-1">
                        <Input className="" id={'lead'} placeholder={'10'} />
                        <Select>
                            <SelectTrigger className="w-[3.875rem] h-[1.5rem] bg-[#F0F2F5]  absolute right-2">
                                <p className="text-xs">Days</p>

                            </SelectTrigger>

                        </Select>
                    </div>
                </div>


            </div>

            <div className="border-b pb-8">
                <h3 className="font-bold text-[#1D2739] ">Attachments</h3>
                <p className="text-sm text-[#98A2B3] mt-2 ">Attach all necessary files or documents</p>
                <div className="flex flex-col justify-center gap-4 w-[50%] items-center py-6 border-2 border-dashed rounded-2xl mt-6">
                    <div className="bg-[#F0F2F5] h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center">
                        <Icon width="25" height="25" icon={'meteor-icons:upload-cloud'} color="#475367" />

                    </div>
                    <div className="space-y-2">
                        <div>
                            <span className="text-[#175CFF] font-[500] text-sm" >Click to upload</span> <span className="text-sm text-[#475367]">or drag and drop</span>
                        </div>
                        <p className="text-xs text-[#98A2B3]">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-[6rem] h-[1px] bg-[#F0F2F5]"></div>
                        <span>OR</span>
                        <div className="w-[6rem] h-[1px] bg-[#F0F2F5]"></div>
                    </div>
                    <Button variant={'outline'} className="text-[#175CFF] border-[#175CFF] h-[2.25rem] w-[7rem] font-bold">Browse Files</Button>
                </div>
            </div>

            <div className="flex gap-8 justify-end mt-8">
                <Button className="text-[#475367]" variant={'outline'} asChild><Link href={'/procurement/quotes'}>Cancel</Link></Button>
                <Button className="border-[#175CFF] text-[#175CFF] w-[11.5rem]" variant={'outline'}>Save as draft</Button>
                <Button className="bg-[#175CFF] w-[11.5rem]" asChild><Link href={'response?tab=3'}>Continue</Link></Button>
            </div>
        </Section>
    )
}