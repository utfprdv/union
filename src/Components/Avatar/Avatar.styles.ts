import styled from "styled-components";

export const AvatarWrapper = styled.div<{ size: number }>`
  border-radius: 100%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;
  flex: 0 0 ${(props) => props.size}px;
  box-shadow: 0 0 0 4px white;

  & > img {
    object-fit: cover;
  }
`;
