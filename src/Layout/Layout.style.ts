import styled from "styled-components";

export const LayoutWrapper = styled.main`
  background: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction: column;
`;
