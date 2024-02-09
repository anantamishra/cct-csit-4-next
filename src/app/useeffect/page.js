'use client'

import { useEffect } from "react"

export default function Page() {
    useEffect(() => {
        console.log("timely loaded")
    })

    useEffect(() => {
        console.log("timely loaded")
    }, [])


    return (
        <div>Use of Use Effect
            <AppHeader />
        </div>
    )
}


const AppHeader = () => {
    return (
        <div>Hello from App Header</div>
    )
}