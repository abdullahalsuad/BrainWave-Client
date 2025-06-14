import { useEffect } from "react";

const Home = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Home</div>;
};

export default Home;
