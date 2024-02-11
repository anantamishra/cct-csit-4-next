'use client'

import { useEffect } from "react"

export default function Page() {
    useEffect(() => {
        console.log("timely loaded")
    },)

    useEffect(() => {
        console.log("timely loaded on component mount")
    }, [])

    useEffect((argument) => {
        console.log("argument passed")
    }, [argument])

    return (
        <div>Use of Use Effect
        </div>
    )
}
