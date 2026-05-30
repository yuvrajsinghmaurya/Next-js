export default async function File({ params }: { params: Promise<{ filePath: string[] }> }) {
    const { filePath } = await params;

    return (
        <div>
            File {filePath.join('/')}
        </div>
    );
}
