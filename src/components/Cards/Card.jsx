import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import cx from 'classnames'
import styles from './Cards.module.css'

export default function a({style, type, countup, percent, text, lastUpdate}) {
    return (
        <Grid item component={Card} xs={12} lg={2} className={cx(style, styles.card)}>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>{type}</Typography>
                <Typography variant="h4">{countup}</Typography>
                <Typography variant="body2">{percent}</Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{text}</Typography>
            </CardContent>
        </Grid>
    )
}
