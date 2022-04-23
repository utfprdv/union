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

const Post = ({ post }: PostProps) => {
  return (
    <PostArticle>
      <PostHeader>
        <PostUser>
          <Avatar alt={post.owner.nome} url={post.owner.image} size={40} />
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
