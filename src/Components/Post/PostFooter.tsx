import {
  ButtonAction,
  ButtonSecondary,
  HR,
  PostActions,
  PostActionSummary,
} from "./Post.style";
import { ReactComponent as IconCurtir } from "Assets/images/Icons/curtir.svg";
import { ReactComponent as IconComentar } from "Assets/images/Icons/comentar.svg";

const PostFooter = () => {
  return (
    <footer>
      <PostActionSummary>
        <ButtonSecondary>12 curtidas</ButtonSecondary>
        <ButtonSecondary>14 comentários</ButtonSecondary>
      </PostActionSummary>
      <HR />
      <PostActions>
        <ButtonAction>
          <IconCurtir />
          Curtir
        </ButtonAction>
        <ButtonAction>
          <IconComentar />
          Comentar
        </ButtonAction>
      </PostActions>
    </footer>
  );
};

export default PostFooter;
