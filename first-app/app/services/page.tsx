import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>services </h1>
      <p>
        <Link href='/services/web-dev'> web developement</Link>
      </p>

      <p>
        <Link href='/services/app-dev'> App developement</Link>
      </p>
      
    </div>
  )
}

export default page
