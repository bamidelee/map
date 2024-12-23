

'use client'

import { useSearchParams } from "next/navigation"

export default function Tabs(){
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')
const tabs = [
    {
        title: 'Request Information',
        sub: 'Provide details about this RFQ'
    },

    {
        title: 'Terms and Attachments',
        sub: 'Payment and delivery terms'
    },

    {
        title: 'Review',
        sub: 'Confirm all information provided'
    },
]

    return(
        <div className="mx-8" >
            <div className="my-8 text-sm text-[#667185] flex gap-2 font-medium">
                <span className="text-[#175CFF]">Quotes</span> / <span className="">Quote Response</span>
            </div>
            <div className="flex border gap-36 rounded-lg p-6">
                {tabs.map((t, i) => <div key={i} className="flex gap-4">
                    <div className={`rounded-full text-lg flex justify-center items-center h-8 w-8 ${Number(tab) < i +1 && 'border border-[#98A2B3] text-[#98A2B3]'} ${Number(tab) > i +1 && 'bg-[#E7F6EC] text-[#0F973D]'} ${tab === String(i + 1)&& 'bg-[#175CFF] text-[#ffffff]'}`}>{i + 1}</div>
                    <div>
                        <p className={`${tab === String(i + 1) ? 'text-[#101928] font-bold': 'text-[#101928] font-[500]' }`}>{t.title}</p>
                        <p className={`${tab === String(i + 1) ? '#475367': 'text-[#667185]' }  text-xs`}>{t.sub}</p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}