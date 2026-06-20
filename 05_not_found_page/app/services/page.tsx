"use client"
import { usePathname } from "next/navigation"

export default function service(){
    const pathname = usePathname()
    console.log(pathname)

    return(
        <h1>this is the servise you can use</h1>
)
}