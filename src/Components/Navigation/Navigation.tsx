import styled from "styled-components";
import { ReactComponent as IconFeed } from "Assets/images/Icons/feed.svg";
import { ReactComponent as IconForum } from "Assets/images/Icons/forum.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as IconPerfil } from "Assets/images/Icons/perfil.svg";

const NavigationWrapper = styled.nav`
  display: flex;
  padding: 0.5em 1em;
  flex: 0 0 10%;
  position: sticky;
  bottom: 0;
  height: 4.375em;
  background: ${(props) => props.theme.color.background};
  box-shadow: 0 16px 24px 0px #000;
`;

export const NavigationButton = styled.button<{
  isActive: boolean;
  secondary?: boolean;
}>`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 0.5em;
  font-size: ${(props) => (props.secondary ? "0.8125em" : "1em")};
  background: ${(props) => {
    if (props.isActive && props.secondary) {
      return props.theme.color.brandSecondary;
    }
    if (props.secondary) {
      return props.theme.color.divider;
    }
    return props.isActive ? props.theme.color.brand : "transparent";
  }};
  border: 0;
  padding: ${(props) => (props.secondary ? "1em 1.3em" : "1em 2em")};
  border-radius: 40px;
  color: ${(props) => {
    if (props.isActive && props.secondary) {
      return "white";
    }
    if (props.secondary) {
      return props.theme.color.fadedCopy;
    }
    return props.theme.color.body;
  }};

  & > svg {
    width: 20px;
  }
  & > span {
    display: ${(props) => (props.isActive ? "inline-block" : "none")};
  }
`;

const NavigationItem = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 33.3%;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationItem>
        <NavLink to="/">
          {({ isActive }) => (
            <NavigationButton isActive={isActive}>
              <IconFeed /> <span>Feed</span>
            </NavigationButton>
          )}
        </NavLink>
      </NavigationItem>

      <NavigationItem>
        <NavLink to="forum">
          {({ isActive }) => (
            <NavigationButton isActive={isActive}>
              <IconForum /> <span>Forum</span>
            </NavigationButton>
          )}
        </NavLink>
      </NavigationItem>

      <NavigationItem>
        <NavLink to="perfil">
          {({ isActive }) => (
            <NavigationButton isActive={isActive}>
              <IconPerfil /> <span>Perfil</span>
            </NavigationButton>
          )}
        </NavLink>
      </NavigationItem>
    </NavigationWrapper>
  );
};

export default Navigation;
