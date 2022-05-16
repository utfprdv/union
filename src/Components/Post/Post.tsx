import Avatar from "Components/Avatar/Avatar";
import {
  HR,
  PostArticle,
  PostBody,
  PostHeader,
  PostTime,
  PostUser,
} from "./Post.style";
import PostFooter from "./PostFooter";
import PostOwner from "./PostOwner";
import { PostProps } from "./Post.types";
import { Link } from "react-router-dom";

const Post = ({ post }: PostProps) => {
  return (
    <PostArticle>
      <PostHeader>
        <PostUser>
          <Link to={`/perfil/${post.owner.id}`}>
            <Avatar alt={post.owner.nome} url={post.owner.image} size={40} />
          </Link>
          <PostOwner owner={post.owner} />
        </PostUser>

        <PostTime dateTime={post.published}>{post.published}</PostTime>
      </PostHeader>
      <HR />

      <PostBody>{post.content}</PostBody>

      <PostFooter />
    </PostArticle>
  );
};

export default Post;
