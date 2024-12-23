

import { Checkbox } from "@/components/ui/checkbox"
import { Dispatch, SetStateAction, useState, useEffect } from "react"


interface Props{
    allChecked: boolean,
    setAllChecked: Dispatch<SetStateAction<boolean>>
}

export default function HandleCheckBox({allChecked, setAllChecked}: Props){
    const [checked, setChecked]= useState(false)

    useEffect(() => {
        if(allChecked){
            setChecked(true)
        }
    },[allChecked])

    useEffect(() => {
        if(!checked){
            setAllChecked(false)
        }
    },[checked])

    return(
        <Checkbox checked={checked}
        onCheckedChange={() => setChecked(!checked)}/>
    )
}