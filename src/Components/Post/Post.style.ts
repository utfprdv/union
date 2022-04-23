import styled from "styled-components";

export const PostArticle = styled.article`
  background: ${(props) => props.theme.color.cardBackground};
  margin-bottom: 1em;
`;

export const PostUser = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const PostUserName = styled.h2`
  font-size: 0.875em;
  font-weight: 700;
`;

export const PostUserCourse = styled.h3`
  color: ${(props) => props.theme.color.brandSecondary};
  font-size: 0.8125em;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(100vw - 40px - 100px - 16px);
  overflow: hidden;
`;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

export const PostBody = styled.p`
  padding: 1em;
  font-size: 0.875em;
`;

export const HR = styled.hr`
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.color.divider};
`;

export const PostTime = styled.time`
  color: ${(props) => props.theme.color.bodySecondary};
  font-size: 0.75em;
  flex: 0 0 5.4375em;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1em;
`;

export const PostActionSummary = styled.div`
  padding: 0 1em 1em 1em;
  display: flex;
  justify-content: space-between;
`;

export const ButtonSecondary = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.color.bodySecondary};
  font-size: 0.8125em;
  padding: 0;
`;

export const ButtonAction = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.color.bodySecondary};
  display: flex;
  font-size: 0.875em;
  font-weight: 600;
  align-items: center;
  gap: 0.5em;
  & > svg {
    flex: 0 0 18px;
  }
`;
