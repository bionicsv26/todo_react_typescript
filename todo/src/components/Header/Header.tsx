import { toggleThemeAction } from '../../feature/themeList'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { HeaderBlock, HeaderNavLink, HeaderThemeToggleButton, HeaderToggleBlock, HeaderWrapper, Tooltip } from './Header.styled'


export const Header = () => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.themeList.theme.name)
  // const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
  //   return isActive ? `${classes.active} ${classes.link}` : classes.link
  // }

  return (
    <HeaderWrapper>
      <HeaderBlock>
        <HeaderNavLink to="/">ToDo</HeaderNavLink>
        <HeaderNavLink to="/list/">List</HeaderNavLink>
        <HeaderToggleBlock>
          <HeaderThemeToggleButton
            onClick={() => dispatch(toggleThemeAction())}
          // title={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >{currentTheme === 'light' ? '☀️' : '🌙'}
            <Tooltip>
              {currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            </Tooltip></HeaderThemeToggleButton>
        </HeaderToggleBlock>
      </HeaderBlock>
    </HeaderWrapper>
  )
}

// {currentTheme === 'light' ? '🌙' : '☀️'}