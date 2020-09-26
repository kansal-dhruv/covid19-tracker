import React, { Component } from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
// import styles from '.src/components/CardComponent.module.css'
import './CardComponent.css'
class CardComponent extends Component{
    render(){
            const df=this.props.props;
            // console.log(df);
            return(
                <div className="container-m">
                <Grid container spacing={3} justify='center'>
                    <Card className="card-m infected">
                    <CardContent>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography align="left">No. of cases confirmed:</Typography>
                        <Typography align="left"><CountUp start={0} end={df.confirmed.value} separator="," duration={2} /> (+ <CountUp  start={0} end={df.increase_confirmed} separator=","/>)</Typography>
                        <Typography color="textSecondary" align="left">Last Updated: {new Date(df.lastUpdate).toDateString()}</Typography>
                    </CardContent>
                    </Card>

                    <Card className="card-m deaths">
                    <CardContent >
                        <Typography color="textSecondary">Deaths</Typography>
                        <Typography align="left">No. of cases confirmed:</Typography>
                        <Typography align="left" ><CountUp start={0} end={df.deaths.value} separator="," duration={2}/> (+ <CountUp start={0} end={df.increase_deaths} separator=","/>)
                        </Typography>
                        <Typography color="textSecondary" align="left">Last Updated: {new Date(df.lastUpdate).toDateString()}</Typography>
                    </CardContent>
                    </Card>
                    <Card className="card-m recovered">
                    <CardContent >
                        <Typography color="textSecondary">Recovered</Typography>
                        <Typography align="left">No. of cases confirmed:</Typography>
                        <Typography align="left" ><CountUp start={0} end={df.recovered.value} separator="," duration={2}/></Typography>
                        <Typography color="textSecondary" align="left">Last Updated: {new Date(df.lastUpdate).toDateString()}</Typography>
                    </CardContent>
                    </Card>
                </Grid>
                </div>
            )
    }
}


export default CardComponent;

