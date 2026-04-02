import Counter from "../component/Counter";
export const metadata = {
  title: "Cabins",
  description: "Basic website layout for The Wild Oasis",
  icons:{
    icon:"/logo.png"
  }
};
async function page() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <h1>Cabin The wild oasis</h1>
            <ul>
                {data.users.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
            <Counter user={data.users}/>
        </div>
    );
}

export default page;
