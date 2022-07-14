function Home({ user }) {
  if (user) {
    return <h1 className="home">Welcome, {user.user_name}, to Sites in the City!</h1>;
  } else {
    return <div><h1 className="home">Please Login or Sign Up to find your movie site</h1>
    <img src="https://i.giphy.com/media/kHs1lBhZWaK5rj7lt3/giphy.webp" alt="join us" className="home_signup"/>
    </div>;
  }
  
}

export default Home;