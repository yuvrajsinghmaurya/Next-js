type BlogProps = {
  params: {
    blogID: string;
  };
};



// for IRG rendring 
//  here we will use a varibale called export const revalidate = time 
export const revalidate = 5 // here five is second that means every 5 second it will regebrate the page 
export async function generateStaticParams() {
  // return [
  //   { blogID: '1' },
  //   { blogID: '2' },
  //   { blogID: '3' },
  //   { blogID: '4' },
  //   { blogID: '5' },
  // ];
  // here inplace of  this we this also  can come from api 
  // like 
// here i am calling fee api 
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()
   console.log(data)
  // now map the id of json 
  return data.map(({id} : {id:number}) =>({
    blogID:id.toString()
   
  }))

}




export default async function Blog({ params }: BlogProps) {
  const { blogID } = await params;
  console.log(await "blog id = " , blogID)
  // now call the api for title 
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${blogID}`)
  const todo = await response.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Blog Page
        </h1>

        <p className="text-2xl text-gray-700">
          Blog ID: <span className="font-semibold">{blogID}</span>
          <h2>{todo.title}</h2>
          <h1>{new Date().toLocaleTimeString()}</h1>
        </p>
      </div>
    </div>
  );
}