import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import {Page} from '../../components'
import {
  Header, PredictRank, ChampionRecommend
} from './components'

//actualState = 0 - Home
//actualState = 1 - Recommend
//actualState = 2 - Predict

const useStyles = makeStyles(() => ({
  root: {},
  MobileFormTitle: {
    color: '#6F6C6B',
    textAlign: 'center'
  },
  mobileButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '18px',
    padding: '24px',
  },
  mobileButton: {
    width: '100%',
    justifyContent: 'center',
    display: 'flex',

  }
}))

const Home = () => {
  const classes = useStyles()

  const [actualState, setActualState] = useState(0)

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <div className={classes.mobileButtonsContainer}>
        <Button className={classes.mobileButton} onClick={() => setActualState(1)}><Typography style={{opacity: actualState == 1 ? 1 : 0.4}}  variant='h6' className={classes.MobileFormTitle}> Recomendação de campeões </Typography></Button>
        <Button className={classes.mobileButton} onClick={() => setActualState(0)}><Typography style={{opacity: actualState == 0 ? 1 : 0.4}} variant='h6' className={classes.MobileFormTitle}> Home </Typography></Button>
        <Button className={classes.mobileButton} onClick={() => setActualState(2)}><Typography style={{opacity: actualState == 2 ? 1 : 0.4}}  variant='h6' className={classes.MobileFormTitle}> Predição de ranking </Typography></Button>
      </div>
      {
        actualState == 0 ? <Header/> : actualState == 1 ? <ChampionRecommend /> : <PredictRank />
      }
    </Page>
  )
}

export default Home
