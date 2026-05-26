export default async function Blog({ params }) {
    console.log(await params)
    const {slug} = await params
    return (
        <div>
            Blog Page  hello 
            {slug}
        </div>
    )
}