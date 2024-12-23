'use client'

import RequestQuote from "@/components/features/procurement/request"
import Terms from "@/components/features/procurement/terms"
import { useSearchParams } from "next/navigation"
import Review from "@/components/features/procurement/review"


export default function Page() {
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')

    return (
        <div className="px-8">
            {tab === '1' ? <RequestQuote /> : tab ==='2'? <Terms/> : <Review/>}
        </div>
    )
}