import { render, screen } from "@testing-library/react"
import { App } from "."

it('should test', () => {
  render(<App>Test</App>)
  screen.debug()
})
