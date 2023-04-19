import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MyThemeProvider } from "./MyThemeProvider";

export const renderTheme = (children: ReactNode) => {
  return render(<MyThemeProvider>{children}</MyThemeProvider>)
}
