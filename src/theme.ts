import { createTheme, PaletteMode } from "@mui/material";
import { lime, teal } from "@mui/material/colors";


export const themeFunc = (mode: PaletteMode) => createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            }
        }
    },
    palette: {
        mode,
        primary: {
            main: teal[400],
            light: teal[300],
            dark: teal[700],
        },
        warning: {
            main: lime[400],
            light: lime[300],
            dark: lime[700],
        }
    }
})