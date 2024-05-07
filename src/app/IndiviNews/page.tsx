'use client'
import React, { Suspense } from "react";
import Individe from './Individe'
function Page(){

    return(
        <Suspense fallback={<div>...Loading</div>}>
         <Individe />
        </Suspense>

    )
}
export default Page