import { Pessoa } from "Interfaces/Pessoa";
import { PostUserCourse, PostUserName } from "./Post.style";

const PostOwner = ({ owner }: { owner: Pessoa }) => {
  return (
    <hgroup>
      <PostUserName>{owner.nome}</PostUserName>
      <PostUserCourse>{owner.curso.nome}</PostUserCourse>
    </hgroup>
  );
};

export default PostOwner;
