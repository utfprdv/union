import { useRef } from "react";
import { AvatarWrapper } from "./Avatar.styles";

type AvatarProp = {
  size?: number;
  url: string;
  alt: string;
};

const Avatar = ({ size = 40, url, alt }: AvatarProp) => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <AvatarWrapper size={size}>
      <img src={url} width={size} height={size} ref={imageRef} alt={alt} />;
    </AvatarWrapper>
  );
};

export default Avatar;
