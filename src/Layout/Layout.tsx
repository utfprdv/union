import React from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation/Navigation";
import { LayoutWrapper } from "./Layout.style";

type LayoutProps = {
  children: React.ReactNode;
};

const Content = styled.div`
  flex: 1 1 90%;
  overflow: auto;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Content>{children}</Content>
      <Navigation />
    </LayoutWrapper>
  );
};

export default Layout;
