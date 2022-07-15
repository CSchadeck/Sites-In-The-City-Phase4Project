function Home({ user }) {
  if (user) {
    return <div> <h1 className="home">Welcome {user.user_name} to Sites in the City!</h1>
 <img src="https://media0.giphy.com/media/XeSseNoeHuNXquI0tm/giphy.gif?cid=ecf05e47w2ycyi1ghedx1bfllu1eonmbzt4qdapetiubplpm&rid=giphy.gif&ct=g" alt="join us" className="home_signup"/>
 <h2 className="home">Explore and share some site where famous movies where filmed! Head over to the VIEW tab to see some movie sites shared from other movie buffs. Share some of yours TOO! </h2>
      </div> ;
  } else {
    return <div><h1 className="home">Please Login or Sign Up to find your movie site</h1>
    <img src="https://i.giphy.com/media/kHs1lBhZWaK5rj7lt3/giphy.webp" alt="join us" className="home_signup"/>
    </div>;
  }
  
}

export default Home; 