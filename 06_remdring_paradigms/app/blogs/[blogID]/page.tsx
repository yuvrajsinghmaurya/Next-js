type BlogProps = {
  params: {
    blogID: string;
  };
};

export default async function Blog({ params }: BlogProps) {
  const { blogID } = await params;
  console.log(await "blog id = " , blogID)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Blog Page
        </h1>

        <p className="text-2xl text-gray-700">
          Blog ID: <span className="font-semibold">{blogID}</span>
        </p>
      </div>
    </div>
  );
}