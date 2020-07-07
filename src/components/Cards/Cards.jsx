import React from 'react'
import Card from './Card'
import { Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'

export default function Cards({ data: {confirmed, recovered, deaths, lastUpdate} }) {
    if(!confirmed) {
        return 'Loading....'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify='center'>
                <Card 
                    style={styles.infected} 
                    type='Infected' 
                    countup={<CountUp start={0} end={confirmed.value} duration={3} separator="."></CountUp>}           
                    text="Number of infected people of COVID-19" 
                    lastUpdate={lastUpdate}
                />
                <Card 
                    style={styles.active} 
                    type='Active' 
                    countup={<CountUp start={0} end={confirmed.value - recovered.value} duration={3} separator="."></CountUp>}  
                    text="Number of active cases of COVID-19" 
                    lastUpdate={lastUpdate}
                    percent={<span className={styles.color}><span style={{fontWeight: 'bold'}}>{((confirmed.value - recovered.value) / confirmed.value * 100).toFixed(1)}%</span> active</span>}     
                    />
                <Card 
                    style={styles.recovered} 
                    type='Recovered' 
                    countup={<CountUp start={0} end={recovered.value} duration={3} separator="."></CountUp>}  
                    lastUpdate={lastUpdate}
                    text="Number of recovered from COVID-19" 
                    percent={<span className={styles.color1}><span style={{fontWeight: 'bold'}}>{(recovered.value / confirmed.value * 100).toFixed(1)}%</span> recovered</span>}    
                />
                <Card 
                    style={styles.deaths} 
                    type='Deaths' 
                    countup={<CountUp start={0} end={deaths.value} duration={3} separator="."></CountUp>}                      
                    text="Number of deaths cased by COVID-19" 
                    lastUpdate={lastUpdate}
                    percent={<span className={styles.color2}><span style={{fontWeight: 'bold'}}>{(deaths.value / confirmed.value * 100).toFixed(1)}%</span> fatality rate</span>}
                />
            </Grid>
        </div>
    )
}
