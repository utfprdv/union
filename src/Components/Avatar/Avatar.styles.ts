import styled from "styled-components";

export const AvatarWrapper = styled.div<{ size: number }>`
  border-radius: 100%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`;
