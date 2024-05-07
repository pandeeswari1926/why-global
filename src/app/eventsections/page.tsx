'use client'
import React, { Suspense } from "react"
import Pages from './page1'
function Page(){

    return(
        <Suspense fallback={<div>....Loading</div>}>
          <Pages />
        </Suspense>
    )
}
export default Page