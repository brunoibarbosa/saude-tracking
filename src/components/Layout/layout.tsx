import { Navbar } from "../Navbar";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
  </>
)
