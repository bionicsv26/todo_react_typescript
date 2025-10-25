import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4;
  display: flex;
  align-items: center;
`

export const HeaderBlock = styled.header`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff99;
  }

  &.active {
    color: #ffffff33;
  }
`

export const HeaderToggleBlock = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`

export const HeaderThemeToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
`

export const Tooltip = styled.span`
  visibility: hidden;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 4px 8px;
  position: absolute;
  z-index: 1000;
  top: 50%;
  right: 125%; /* ← слева от кнопки */
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s;

  ${HeaderThemeToggleButton}:hover & {
    visibility: visible;
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%; /* стрелка направо */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
  }
`