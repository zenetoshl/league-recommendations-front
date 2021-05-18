import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Typography, TextField, Button, Divider } from '@material-ui/core'
import championsInfo from '../../../../utils/championsInfo'
import axios from 'axios';

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
  }
}))

const ChampionRecommend = (props) => {
  const { className, ...rest } = props
  const [summonerName, setSummonerName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState()
  const [rank, setRank] = useState()
  const classes = useStyles()
  const handleSummonerChange = (e) => {
    setSummonerName(e.target.value)
  }

  useEffect(()=> {
    if(!data){}
    else if(data.error){
        setError(true)
    } else {
        setRank(data.value)
    }
  }, [data])

  return (
    <div {...rest} className={classes.root}>
      <div className={classes.header}>
        <Typography align="center" gutterBottom variant="h2">
          Predição de Ranking
        </Typography>  
        <div className={classes.buttons}>
            <TextField className={classes.input} id="outlined-a" label="Digite seu nome de invocador" variant="outlined" value={summonerName} onChange={handleSummonerChange}/>
            <Button className={classes.send} onClick={()=> {
              setLoading(true)
              axios.get(`http://191.239.247.63:5000/ranking?summoner=${summonerName}`)
              .then(res => {
                const persons = res.data
                console.log({value: persons[0]})
                setData({value: persons[0]})
              }).catch(err => {
                setError(true)
              }).then(()=>{
                setLoading(false)
              })
            }}>Enviar</Button>
        </div>
        <Divider className={classes.divider} />
        
        {loading ? <Typography align="center" component="h2" variant="subtitle1"> Aguarde enquanto analisamos suas partidas... </Typography> 
        : !rank 
        ? error ? <Typography align="center" component="h2" variant="subtitle1"> Ocorreu um erro inesperado, tente novamente mais tarde. </Typography> 
        : <Typography align="center" component="h2" variant="subtitle1"> Envie seu nome de invocador para que possamos começar. </Typography>
        : 
            <div style={{ width: '90%', height: '400px', backgroundRepeat: 'no-repeat', padding: '40px 0px', borderRadius: '5px'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0px 16px', height: '90%'}}>
                    <Typography align='center' className={classes.whiteText} gutterBottom variant="h3">
                        {rank == 3? 'Ótimo' : rank == 2 ? 'Bom' : 'Ruim'}
                    </Typography>  
                    <Typography className={classes.whiteText} component="h2" variant="subtitle1"> *Os ranks do modelo são divididos da seguinte forma: <br/> <br/> O rank ruim está entre as ligas de ferro e prata <br/> O rank bom está entre as ligas ouro e diamante <br/> E o rank ótimo está entre as ligas mestre e desafiante. </Typography>
                </div>
            </div>
        }
        
      </div>
    </div>
  )

}

export default ChampionRecommend
