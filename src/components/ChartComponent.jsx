import React, {Component} from 'react';
import {fetchDaily} from '../api/api.js'
import {Line,Bar} from 'react-chartjs-2';
import './ChartComponent.css';
class ChartComponent extends Component{
    constructor(){
        super();
        this.state={
            data: null,
        };
    }
    async componentDidMount(){
        let data=await fetchDaily();
        console.log(data);
        this.setState({data});
    }
    label_create(arr){
        arr.map((dd)=> console.log(dd.reportDate));
        // for(let i=0;i<arr.length;i++)
        // {
        //     console.log(i);
        //     console.log(arr[i]);
        // }
    };
    render(){
        if(this.state.data===null)
            return (<div></div>)
        else
        {
            console.log(this.state.data);
            let chart=(
                <Line data={{
                    labels:this.state.data.map((dd)=>dd.reportDate),
                    datasets: [{
                        data: this.state.data.map((dd)=>dd.totalConfirmed),
                        label:'Infected',
                        borderColor: 'rgba(0,0,255,0.5)',
                        fill: false,
                    },{
                        data: this.state.data.map((dd)=>dd.deaths.total),
                        label:'Deaths',
                        borderColor: 'rgba(255,0,0,0.5)',
                        fill: false,
                    }
                ]
                }}
                 />
            );
            return <div>{chart}</div>
        }
    }
}
export default ChartComponent;
