import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import UserRoles from "../components/UserRoles";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <Content />
    <UserRoles />
  </Fragment>
);

export default Home;
