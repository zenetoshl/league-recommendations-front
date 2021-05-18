import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: colors.grey[800]
  },
  header: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: '80px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '40px 24px'
    }
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  stats: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
  },
  statsInner: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto'
  }
}))

const Header = (props) => {
  const { className, ...rest } = props

  const classes = useStyles()

  return (
    <div {...rest} className={classes.root}>
      <div className={classes.header}>
        <Typography align="center" gutterBottom variant="h2">
          League Recommend
        </Typography>
        <Typography align="center" component="h3" variant="subtitle1">
          Seja bem-vindo ao League Recommend! <br /> <br /> Aqui você pode receber recomendações de campeões para se jogar baseadas nas suas partidas anteriores, <br /> ou, se preferir, <br /> pode checar o seu nível de jogabilidade com o nosso modelo de predição de ranking. <br /> <br /> Use a barra superior para navegar entre as telas.
        </Typography>
      </div>
    </div>
  )

}

export default Header
