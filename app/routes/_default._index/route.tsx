import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Index = () => {
  return (
    <div>
      <h1>CI/CD Test In Remix!</h1>

      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default Index;
