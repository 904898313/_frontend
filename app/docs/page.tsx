type User = {
  id: number;
  name: string;
  email: string;
}

export const dynamic = 'force-dynamic'; // Force dynamic rendering for this page

const Page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await res.json();
    return (
      <div>
        <div>{new Date().getTime()}</div>
        {
          data?.map((data) => {
            return (
              <div key={data.id} className="max-w-screen-xl mx-auto p-4">
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="mt-2">{data.email}</p>
              </div>
            )
          })
        }
      </div>
    );
};

export default Page;
