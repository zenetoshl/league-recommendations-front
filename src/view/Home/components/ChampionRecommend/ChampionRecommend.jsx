import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, TextField, Button, Divider } from '@material-ui/core'
import championsInfo from '../../../../utils/championsInfo'

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: colors.grey[800]
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: `4px 1px 1px 4px`,
        },
      },
  },
  header: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: '24px 12px',
    [theme.breakpoints.up('md')]: {
      padding: '24px 24px'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center', 
    flexDirection: 'row',
    width: '100%'
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
  },
  input: {
    width: '60%',
    marginRight: theme.spacing(0.5),
    borderRadius: '4px 1px 1px 4px'
  },
  send: {
    borderRadius: '1px 4px 4px 1px',
    backgroundColor: theme.palette.secondary.main,
    color: 'white'
  },
  divider: {
    padding: '48px 0px',
  },
  whiteText: {
      color: 'white'
  }
}))

const ChampionRecommend = (props) => {
  const { className, ...rest } = props
  const [summonerName, setSummonerName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([111, 15, 2])
  const [cardsInfo, setCardsInfo] = useState()
  const classes = useStyles()
  const handleSummonerChange = (e) => {
    setSummonerName(e.target.value)
  }

  useEffect(()=> {
    if(!data){}
    else if(!data[0]){
        setError(true)
    } else {
        setCardsInfo(data.map((d) => ({
            name: championsInfo.keys[d],
            bio: championsInfo.data[championsInfo.keys[d]].blurb,
            splashArt: `splash/${championsInfo.keys[d]}_0.jpg`
        })))
    }
  }, [data])

  return (
    <div {...rest} className={classes.root}>
      <div className={classes.header}>
        <Typography align="center" gutterBottom variant="h2">
          Recomendação de campeões
        </Typography>  
        <div className={classes.buttons}>
            <TextField className={classes.input} id="outlined-basic" label="Digite seu nome de invocador" variant="outlined" value={summonerName} onChange={handleSummonerChange}/>
            <Button className={classes.send} onClick={()=>console.log(cardsInfo)}>Enviar</Button>
        </div> 
        <Divider className={classes.divider} />

        {loading ? <Typography align="center" component="h2" variant="subtitle1"> Aguarde enquanto analisamos suas partidas... </Typography> 
        : !cardsInfo 
        ? error ? <Typography align="center" component="h2" variant="subtitle1"> Ocorreu um erro inesperado, tente novamente mais tarde. </Typography> 
        : <Typography align="center" component="h2" variant="subtitle1"> Envie seu nome de invocador para que possamos começar. </Typography>
        : cardsInfo.map((d) => (
            <div style={{ backgroundImage: `url(${d.splashArt})`, width: '90%', height: '400px', backgroundRepeat: 'no-repeat', padding: '176px 0px', borderRadius: '5px', display: 'flex', flexDirection: 'row', alignItems: 'start'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0px 16px', width: '50%', height: '90%'}}>
                    <Typography className={classes.whiteText} gutterBottom variant="h3">
                        {d.name}
                    </Typography>  
                    <Typography className={classes.whiteText} component="h2" variant="subtitle1"> {d.bio} </Typography>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ChampionRecommend
