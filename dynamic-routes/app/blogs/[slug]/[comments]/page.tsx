export default async function comments({ params }) {
    console.log(await params)
    const {slug , comments} = await params
    return (
        <div>
            comments  fro nested dynaic routes
            {slug} and the nested comments is {comments}
        </div>
    )
}