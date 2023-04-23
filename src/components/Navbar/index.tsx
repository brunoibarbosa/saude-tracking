import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import * as S from './styles'

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const location = useLocation()
  const isIndex = location.pathname === '/'

  return (
    <S.Header data-index={isIndex}>
      <div>
        <S.Logo>
          <NavLink to="/">
            <img src={isIndex ? "/images/logo.svg" : "/images/white_logo.svg"} alt="Logo da Saúde Tracking" />
            <div>
              <S.LogoNameSaude>Saúde</S.LogoNameSaude>
              <S.LogoNameTracking>Tracking</S.LogoNameTracking>
            </div>
          </NavLink>
        </S.Logo>
        <S.MenuButton onClick={() => setOpenNav(prev => !prev)}>
          <span />
          <span />
          <span />
        </S.MenuButton>
        {openNav && (
          <S.MenuNavWrapper>
            <nav>
              <S.CustomNavLink to="/" data-active={isIndex}>
                <span>Início</span>
              </S.CustomNavLink>
              <S.CustomNavLink to="/acompanhar" data-active={location.pathname === '/acompanhar'}>
                <span>Acompanhar</span>
              </S.CustomNavLink>
              <S.CustomNavLink to="/sobre" data-active={location.pathname === '/sobre'}>
                <span>Sobre</span>
              </S.CustomNavLink>
              <S.CustomNavLink to="/contatos" data-active={location.pathname === '/contatos'}>
                <span>Contatos</span>
              </S.CustomNavLink>
            </nav>
          </S.MenuNavWrapper>
        )}
      </div>
    </S.Header>
  )
}
