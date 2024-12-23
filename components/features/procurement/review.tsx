'use client'
import Section from "../section"
import { Icon } from "@iconify/react";
import ItemTable from "./itemTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";


export default function Review() {

    const quoteLeft = [
        'Title', 'RFQ No', 'Requestor', 'Department', 'Expected delivery date'
    ]

    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let timer: any;

        if (loading) {
          timer = setTimeout(() => {
            
            setLoading(false);
            toast({
                description:(<div className="flex gap-2 items-center ">
                    <div className="h-[1.5rem] w-[1.5rem] border flex items-center justify-center bg-[#E7F6EC] border-[#B5E3C4] rounded-lg">
                        <Icon color="#04802E"  width="9" height="9" icon={'material-symbols:check-circle'} />
                    </div>
                    <p className="font-bold text-sm">RFQ ID sent successfully!</p>
                </div>),
              
              }) // Reset or handle post-timer behavior
          }, 2000); // 3-second timeout
        }
    
        // Cleanup function to clear the timer on unmount or when the condition changes
        return () => {
          if (timer) {
            clearTimeout(timer);
            
          }
        };
      }, [loading]); //

    return (
        <div className=" text-gray-100">
            <AlertDialog open={loading} onOpenChange={setLoading}>

                <AlertDialogContent className="w-[21rem]">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="hidden">Confirmation</AlertDialogTitle>
                        <AlertDialogDescription>


                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex justify-center items-center">
                        <div className="relative h-12 w-12">
                            <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-[#175CFF] border-t-transparent animate-spin"></div>
                        </div>
                    </div>
                    <p className="font-[500] text-sm text-center ">Sending Quote...</p>
                    {/* <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Button className="bg-[#175CFF] w-[5.75rem]" asChild>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </Button>
                    </AlertDialogFooter> */}
                </AlertDialogContent>
            </AlertDialog>
            <Section headerRow title="Request Information" subTitle={<Icon color="#98A2B3" width="24" height="24" icon={'hugeicons:pencil-edit-02'} />}>
                <div className="mt-8 flex justify-between">
                    <div className="flex flex-col gap-4">
                        {quoteLeft.map((q, i) => <p key={i} className="text-[#555E68] font-[500] opacity-65">{q}</p>)}
                    </div>
                    <div className="flex flex-col gap-[.80rem]">
                        <p className="font-medium text-[#344054]">Request for Equipments</p>
                        <p className="font-medium text-[#344054]">#RQ 01234</p>
                        <div className="flex items-center gap-2">
                            <div className="#101928 font-bold text-sm rounded-full h-8 w-8 flex items-center justify-center bg-[#FFECE5]">JD</div>
                            <span className="font-medium text-[#344054]">Jane Doe</span>
                            <span className="h-[6px] w-[6px] rounded-full bg-[#98A2B3]"></span>
                            <span className="text-[#98A2B3]">Head Nurse, Paediatrics</span>
                        </div>
                       
                        <p className="font-medium text-[#101928]">Maternity</p>
                        <p className="font-medium text-[#101928]">2024-12-02</p>
                    </div>
                    <div></div>
                </div>

            </Section>
            <ItemTable />

            <div className="flex justify-between border p-6 items-center mb-8 rounded-lg">
                <div className="flex gap-3 items-start">
                    <Icon color="#1D2739" className="mt-1" width="32" height="32" icon={'iconamoon:file-document-bold'} />
                    <div>
                        <p className="text-[#1D2739] text-xl font-bold">Terms and Attachments</p>
                        <p className="text-sm text-[#475367]">Review payment and delivery terms</p>
                    </div>
                </div>
                <Icon color="#1D2739" className="mt-1" width="24" height="24" icon={'solar:alt-arrow-down-linear'} />
            </div>

            <div className="flex gap-8 justify-end my-8">
                <Button className="text-[#475367]" variant={'outline'} asChild><Link href={'/procurement/quotes'}>Cancel</Link></Button>
                <Button className="border-[#175CFF] text-[#175CFF] w-[11.5rem]" variant={'outline'}>Save as draft</Button>

                <AlertDialog>
                    <Button className="bg-[#175CFF] w-[11.5rem]" asChild><AlertDialogTrigger>Submit</AlertDialogTrigger></Button>

                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Confirmation</AlertDialogTitle>
                            <AlertDialogDescription>
                                You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <Button className="bg-[#175CFF] w-[5.75rem]" asChild>
                                <AlertDialogAction onClick={() => setLoading(true)}>Continue</AlertDialogAction>
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </div>

        </div>
    )
}