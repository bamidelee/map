

import RequestQuote from "@/components/features/procurement/request"
import Terms from "@/components/features/procurement/terms"

import Review from "@/components/features/procurement/review"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({searchParams}: {searchParams: any}) {
   
    const tab = searchParams.tab
    return (
        <div className="px-8">
            {tab === '1' ? <RequestQuote /> : tab ==='2'? <Terms/> : <Review/>}
        </div>
    )
}