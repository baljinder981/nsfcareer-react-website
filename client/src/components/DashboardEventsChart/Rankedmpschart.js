import React from 'react';
import { Line } from 'react-chartjs-2';
// import { Link } from 'react-router-dom';

const options = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,
    fill: false,
    legend: {
        display: false
    },
    plugins: {
        datalabels: {
            // hide datalabels for all datasets
            display: false
        }
    },
    scales: {
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Ranked MPS'
            },
            id: 'A',
            position: 'left',
            ticks: {
				beginAtZero: true,
				min: 0,
				stepSize: 0.10,
				max: 0.4
            }
        }],
        xAxes: [{

            scaleLabel: {
                display: true,
                labelString: 'Value'
            }
        }]
    }
};

class Rankedmpschart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
				labels: [0, 0.1,0.2,0.3,0.4],
                fill: false,
				datasets: [{
					lineTension: 0.1,
					label: 'MPS',
					backgroundColor: '#88DD88',
					borderColor: '#88DD88',
					pointRadius: 0,
					fill: false,
					data: this.props.data.datasets,
				}]

            },
        };
		console.log("this.state.data",props);
    }

  /*  static getDerivedStateFromProps (props, state) {     
        
        return {
			
            data: this.state.data,
        };
    }*/

    render() {
		
        return (
            <div className="brain-card-pt-2-5 row pl-4 pr-4 pb-4 dark-bg text-center ">
                <div className="bran-smiulation-dash-chart">
                    <Line data={this.state.data} options={options} redraw={true} />
                </div>
            </div>
              
        );
    }
}

export default Rankedmpschart;
