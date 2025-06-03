import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("First load");

    return () => {
      console.log("hello world");
    };
  }, []);

  return <div>Home</div>;
};

export default Home;
