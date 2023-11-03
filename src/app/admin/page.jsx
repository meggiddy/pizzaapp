export const metadata = {
  title: "Admin",
  description: "Admin dashboard",
};
function Admin() {
  return (
    <div className="flex justify-center py-60">
      <div className="flex flex-col w-72 ">
        {" "}
        <h1 className="mx-auto my-2 text-2xl">Admin Dashboard</h1>
        <input className="py-2 my-2 rounded" placeholder="username"></input>
        <input className="py-2 my-2 rounded" placeholder="password"></input>
        <button className="py-2 my-2 bg-amber-400 rounded-lg" type="button">Sign In</button>
      </div>
    </div>
  );
}

export default Admin;
