import { createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#EFF3F7',
            dark: '#B3C0CA'
        },
        secondary: {
            main: '#DFE9F3'
        }
    },
    typography: {
        fontFamily: ['Playfair Display', 'serif']
    }
});

export default theme;

