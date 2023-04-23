import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const LogoNameSaude = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  letter-spacing: -1px;
`

export const LogoNameTracking = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  letter-spacing: -1px;
`
export const MenuNavWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  animation: ${fadeIn} 0.2s ease-in;
  left: 0;
  top: calc(100% + 1px);
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  box-sizing: border-box;
  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .1);
  color: ${({ theme }) => theme.colors.white};

  nav {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: flex-end;
  }
`

export const MenuButton = styled.button`
  background: none;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  height: fit-content;
  padding: 0.5rem;

  span {
    display: block;
    width: 1.5rem;
    height: 2px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  & > div {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 1.5rem 2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.white}`};
  }

  &[data-index="true"] > div {
    background-color: ${({ theme }) => theme.colors.white};

    & ${MenuButton} {
      border-color: ${({ theme }) => theme.colors.secondary};

      span {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }

    & ${LogoNameSaude} {
      color: ${({ theme }) => theme.colors.primary};
    }

    & ${LogoNameTracking} {
      color: ${({ theme }) => theme.colors.secondary};
    }

    & ${MenuNavWrapper} {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

export const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CustomNavLink = styled(NavLink)`
  color: inherit;
  font-weight: 500;
  font-size: 0.9rem;
  width: fit-content;
  position: relative;

  span {
    position: relative;
    z-index: 2;
  }

  &[data-active="true"]::before {
    width: calc(100% + 4px)
  }

  &::before {
    position: absolute;
    content: '';
    right: -2px;
    bottom: 1px;
    height: 3px;
    transition: .2s all;
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 4px;
    z-index: 1;
    width: 0;
  }
`
