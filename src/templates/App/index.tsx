import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Routes } from '../../routes'
import { Layout } from '../../components'
import * as Styled from './styles'

const titlesPage = {
  '/': 'Início',
  '/acompanhar': 'Acompanhar',
  '/sobre': 'Sobre',
  '/contatos': 'Contatos'
}

export const App = () => {
  const location = useLocation()

  useEffect(
    () => {
      const mainTitle = 'Saúde Tracking'
      const page = titlesPage[location.pathname as keyof typeof titlesPage]
      document.title = page ? `${mainTitle} | ${page}` : mainTitle
    },
    [location],
  )

  return (
    <Styled.Container>
      <Layout>
        <Routes />
      </Layout>
    </Styled.Container>
  )
}
