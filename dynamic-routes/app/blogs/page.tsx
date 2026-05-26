import Link from "next/link"

export default function Home(){
    return(
        <div>
            <h1>technical Agency</h1>
            <p><Link href='/blogs'>Blogs</Link></p>
        </div>
    )
}