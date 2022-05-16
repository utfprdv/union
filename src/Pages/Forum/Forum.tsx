import Avatar from "Components/Avatar/Avatar";
import { NavigationButton } from "Components/Navigation/Navigation";
import Post from "Components/Post/Post";
import { HomeHeader, UserPostEditor } from "Pages/Home/Home";
import styled from "styled-components";
import posts from "../Home/Home.fixture.json";

const FilterWrapper = styled.nav`
  padding: 1em;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const Filter = () => {
  return (
    <FilterWrapper>
      <NavigationButton isActive secondary>
        Publicações
      </NavigationButton>
      <NavigationButton isActive={false} secondary>
        Projetos
      </NavigationButton>

      <NavigationButton isActive={false} secondary>
        Experiências
      </NavigationButton>
    </FilterWrapper>
  );
};

const Home = () => {
  return (
    <>
      <HomeHeader>
        <h1>Forum Engenharia de Software</h1>
        <UserPostEditor>
          <Avatar size={40} url={"https://i.pravatar.cc/300"} alt="" />
          <div>Escreva algo...</div>
        </UserPostEditor>
      </HomeHeader>
      <Filter />
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
};

export default Home;
