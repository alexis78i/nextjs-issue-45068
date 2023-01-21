import React from "react";
import Link from "next/link";

function Page(){
  return(
    <div>Dynamic page becomes static when it is built. <Link href="/dynamic/test">test</Link></div>
  )
}

export default Page