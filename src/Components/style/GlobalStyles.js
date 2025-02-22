import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyle"

export const GlobalStyles = createGlobalStyle`
body{
    background: ${themes.dark.backgroundColor};

    @media (prefers-color-scheme:dark) {
        background: ${themes.dark.backgroundColor};
    }
}
`
