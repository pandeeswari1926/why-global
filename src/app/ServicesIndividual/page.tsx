'use client'
import React from "react"
import { Suspense } from "react"
import Child from "./page1"

function Page(){
    return (
        <Suspense fallback={<div>...Loading</div>}>
           <Child />
        </Suspense>

    )
}
export default Page