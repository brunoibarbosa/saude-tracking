import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { ReactNode } from 'react'
import { GlobalStyles } from './global-styles'

export const MyThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  )
}
