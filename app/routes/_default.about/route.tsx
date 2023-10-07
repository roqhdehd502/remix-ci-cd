import { Link } from "@remix-run/react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Introduce About WebSite!</p>
      <hr />
      <h1>What is CI/CD?</h1>
      <p>
        CI/CD stands for Continuous Integration and Continuous Delivery (or
        Continuous Deployment), and it is a set of practices and principles in
        software development aimed at improving the development process and
        delivering high-quality software more efficiently.
      </p>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default About;
