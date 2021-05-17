import { colors } from '@material-ui/core'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const white = '#FFFFFF'
const black = '#000000'

const options = {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.pink[800],
    main: colors.pink[500],
    light: colors.pink[300]
  },
  secondary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.lightBlue[900],
    light: colors.lightBlue[600]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
}

export default options
