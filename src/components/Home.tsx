import { Link } from "@material-ui/core";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Home;
