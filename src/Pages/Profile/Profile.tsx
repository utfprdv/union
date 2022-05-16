import Avatar from "Components/Avatar/Avatar";
import { NavigationButton } from "Components/Navigation/Navigation";
import Post from "Components/Post/Post";
import { HomeHeader } from "Pages/Home/Home";
import styled from "styled-components";
import posts from "../Home/Home.fixture.json";

const ProfileHeader = styled(HomeHeader)`
  background: ${(props) => props.theme.color.brand};
`;

const Card = styled.aside`
  background: ${(props) => props.theme.color.cardBackground};
  border-radius: 28px;
  margin: 0 1em -0 1em;
  transform: translateY(40%);
  padding: 1em;
  & > hgroup {
    margin-top: -20px;
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-40%);
`;

const ProfileName = styled.h1`
  font-size: 1.125em;
  text-align: center;
`;
const ProfileCourse = styled.h2`
  font-size: 0.875em;
  text-align: center;
  color: ${(props) => props.theme.color.secondary};
  margin: 0 1em;
`;

const FilterWrapper = styled.nav`
  padding: 1em;
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
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
      <ProfileHeader>
        <Card>
          <AvatarWrapper>
            <Avatar alt="name" url="https://i.pravatar.cc/300" size={102} />
          </AvatarWrapper>
          <hgroup>
            <ProfileName>Francisco Chavier Carvalho</ProfileName>
            <ProfileCourse>
              Engenharia de Bioprocessos e Biotecnologia
            </ProfileCourse>
            <ProfileCourse>Campus Dois Vizinhos</ProfileCourse>
          </hgroup>
        </Card>
      </ProfileHeader>
      <Filter />
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
};

export default Home;
