import React from "react";
import { Link, Route, Router, Routes, useParams } from "react-router-dom";

export const About = () => <h1>About page</h1>;

export const Home = () => <h1>Home page</h1>;

export const Contact = () => {
  const { name } = useParams();
  return <h1 data-testid="contact-name">{name}</h1>;
};

const TestRouter = () => {
  const name = "John Doe";
  return (
    <>
      <nav data-testid="navbar">
        <Link data-testid="home-link" to="/">
          Home
        </Link>
        <Link data-testid="about-link" to="/about">
          About
        </Link>
        <Link data-testid="contact-link" to={`/contact/${name}`}>
          Contact
        </Link>
      </nav>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about:name" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default TestRouter;
