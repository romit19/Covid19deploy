import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from '../Cards/Cards.module.css'
import Countup from 'react-countup'
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...'
    }
    console.log()

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>INFECTED</Typography>
                        <Typography variant='h5'>
                            <Countup start={0}
                                end={confirmed.value}
                                duration={1} />
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>No. of Active COVID cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>RECOVERED</Typography>
                        <Typography variant='h5'>
                            <Countup start={0}
                                end={recovered.value}
                                duration={1} />
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>No. of Recovered</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>DEATH</Typography>
                        <Typography variant='h5'>
                            <Countup start={0}
                                end={deaths.value}
                                duration={1} />
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>No. of COVID Death</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards