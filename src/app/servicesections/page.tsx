'use client'
import React, { Suspense } from "react"
import Loader from "../home/Loader"
import Pages from './page2'
function Page(){
    return(
        <Suspense fallback={<div><Loader /></div>}>
 <Pages />

        </Suspense>
    )
}
export default Page