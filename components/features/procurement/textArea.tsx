import { Textarea } from "@/components/ui/textarea"

export default function TextareaWithLabel() {
  return (
    <div className="border-b pb-8">
        <div className="grid w-[50%] gap-1.5">
          <label className="font-bold text-sm text-[#475367]" htmlFor="message">Note</label>
          <Textarea placeholder="Enter note here" id="message" rows={5} />
          <p className="text-right text-[#667185] text-xs font-[500]">0/200</p>
        </div>
    </div>
  )
}
