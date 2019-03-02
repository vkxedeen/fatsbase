import React from "react";
import Menu from "../components/Menu";
import Table from "../components/Table";

const Home = props => {
  return (
    <div>
      <Menu />
      <Table {...props} />
    </div>
  );
};

export default Home;
