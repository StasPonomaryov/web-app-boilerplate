import useUserStore from "../store/userStore";

function Home() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="home">
      <h2>Home page</h2>
      {user && user.name.length ? <span>Hello, {user.name}</span> : null}
    </div>
  )
}

export default Home;
