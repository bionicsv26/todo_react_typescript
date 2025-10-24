import { HeaderBlock, HeaderNavLink, HeaderWrapper } from './Header.styled'

export const Header = () => {
  // const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
  //   return isActive ? `${classes.active} ${classes.link}` : classes.link
  // }

  return (
    <HeaderWrapper>
      <HeaderBlock>
        <HeaderNavLink to="/">ToDo</HeaderNavLink>
        <HeaderNavLink to="/list/">List</HeaderNavLink>
      </HeaderBlock>
    </HeaderWrapper>
  )
}