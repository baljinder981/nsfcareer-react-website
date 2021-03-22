import React from 'react';

import {
  getSensorSimultionCount,
} from '../../apis';
class SimulationCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      simulationCount: ''
    }
  }

  componentDidMount(){
    const { count, sensor , isloadCount } = this.props;
    console.log('isloadCount -----------------',sensor, count)

    if (count || count === '0' || count === 0) {

    } else {
      if (isloadCount === 1) {
        getSensorSimultionCount({ sensor })
          .then(res => {
            console.log('res ---', res);
            if (res.data.message === "success") {
              this.setState({ simulationCount: res.data.count });
              this.props.setSimulationCount(res.data.count, sensor, res.data.simulation_status, res.data.computed_time, res.data.simulation_timestamp);
            } else {
              this.setState({ simulationCount: 0 });
              this.props.setSimulationCount(0, sensor, '', '', '');

            }
          }).catch(err => {
            console.log('err', err);
            this.setState({ simulationCount: 0 });
            this.props.setSimulationCount(0, sensor, '', '', '');
          })
      }

    }
  }
  componentWillReceiveProps() {
    const { count, sensor , isloadCount } = this.props;
    console.log('isloadCount -----------------',sensor, count)

    if (count || count === '0' || count === 0) {

    } else {
      if (isloadCount === 1) {
        getSensorSimultionCount({ sensor })
          .then(res => {
            console.log('res ---', res);
            if (res.data.message === "success") {
              this.setState({ simulationCount: res.data.count });
              this.props.setSimulationCount(res.data.count, sensor, res.data.simulation_status, res.data.computed_time, res.data.simulation_timestamp);
            } else {
              this.setState({ simulationCount: 0 });
              this.props.setSimulationCount(0, sensor, '', '', '');

            }
          }).catch(err => {
            console.log('err', err);
            this.setState({ simulationCount: 0 });
            this.props.setSimulationCount(0, sensor, '', '', '');
          })
      }

    }
  }

  render() {
    // console.log("Props are - ", this.props);
    const { count } = this.props;
    const { simulationCount } = this.state;
    return (
      <>
        {simulationCount || simulationCount === '0' || simulationCount === 0 ?
          count || count === '0' || count === 0 ?
            <p style={{ fontSize: "50px" }}>{count} </p>
            :
            <p style={{ fontSize: "50px" }}>{simulationCount} </p>
          :

          count || count === '0' || count === 0 ?
            <p style={{ fontSize: "50px" }}>{count} </p>
            :
            <i className="fa fa-spinner fa-spin" style={{ "font-size": "34px", "padding": '10px', 'color': '#0f81dc' }}></i>
        }
      </>
    );
  }
}

export default SimulationCount;
