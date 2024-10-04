import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      

<Link href={"/country/pakistan"}>Pakistan</Link>
<Link href={"/country/india"}>India</Link>
{/* <Link>Pakistan</Link>
<Link>Pakistan</Link> */}

    </div>
  )
}

export default page