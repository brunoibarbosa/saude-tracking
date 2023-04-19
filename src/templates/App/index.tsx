import { ReactNode } from 'react'
import * as Styled from './styles'

export const App = ({ children }: { children: ReactNode }) => {
  return <Styled.Container>
    {children}
  </Styled.Container>
}
