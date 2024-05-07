'use client'
import { Suspense } from "react";

import React from "react";
import Tsh from './Tsh'
function Page(){
return(
    <Suspense fallback={<div>...Loading</div>}>

<Tsh />
    </Suspense>
        
        
    
)
}

export default Page
