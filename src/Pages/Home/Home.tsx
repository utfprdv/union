import Avatar from "Components/Avatar/Avatar";
import Post from "Components/Post/Post";
import styled from "styled-components";
import posts from "./Home.fixture.json";

export const HomeHeader = styled.header`
  background: ${(props) => props.theme.color.brandSecondary};

  & > h1 {
    font-size: 1.125em;
    text-align: center;
    color: white;
    padding-top: 2em;
  }
`;

export const UserPostEditor = styled.div`
  background: ${(props) => props.theme.color.cardBackground};
  padding: 2em;
  margin: 0 0.5em;
  transform: translateY(30px);
  border-radius: 2em;
  position: relative;
  box-shadow: 0 3px 6px 0 #ccc;
  display: flex;
  align-items: center;
  gap: 1em;
  color: #999;
`;

const Home = () => {
  return (
    <>
      <HomeHeader>
        <h1>UTFPR Campus Dois Vizinhos</h1>
        <UserPostEditor>
          <Avatar size={40} url={"https://i.pravatar.cc/300"} alt="" />
          <div>Escreva algo...</div>
        </UserPostEditor>
      </HomeHeader>
      <br />
      <br />
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
};

export default Home;
