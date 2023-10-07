import { Outlet, useLoaderData } from "@remix-run/react";

import styled from "styled-components";

import { loader } from "./server";

export { loader } from "./server";

const DefaultLayout = () => {
  const payload = useLoaderData<typeof loader>();

  console.log(payload);

  return (
    <>
      <header>
        <h5>님</h5>
      </header>
      <Main id="main">
        <Outlet />
      </Main>
      <footer>
        <h1>야! 나는 푸터</h1>
      </footer>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: end;
  gap: 5rem;
`;

const Main = styled.main`
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  overflow-x: hidden;
`;

export default DefaultLayout;
