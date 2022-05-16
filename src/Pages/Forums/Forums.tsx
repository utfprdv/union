import { HomeHeader } from "Pages/Home/Home";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileHeader = styled(HomeHeader)`
  background: #000;
`;

const Card = styled.aside`
  background: ${(props) => props.theme.color.cardBackground};
  border-radius: 28px;
  padding: 3em 1em;
  text-align: center;
`;

const ForumName = styled.h2``;

const Grid = styled.section`
  display: grid;
  gap: 20px;
  margin: 1em;
  transform: translateY(-60px);
`;

const forums = [
  {
    path: "eng",
    label: "Engenharia de Software",
  },
  {
    path: "bio",
    label: "Engenharia de Bioprocessos",
  },
  {
    path: "zoo",
    label: "Zootecnia",
  },
  {
    path: "agro",
    label: "Agronomia",
  },
  {
    path: "engflorestal",
    label: "Engenharia FLoarestal",
  },
  {
    path: "cie",
    label: "Ciências Biológicas",
  },
];
const Home = () => {
  return (
    <>
      <ProfileHeader>
        <h1>Forums</h1>
        <br />
        <br />
        <br />
      </ProfileHeader>
      <Grid>
        {forums.map((f) => (
          <Link to={f.path} key={f.path}>
            <Card>
              <ForumName>{f.label}</ForumName>
            </Card>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default Home;
