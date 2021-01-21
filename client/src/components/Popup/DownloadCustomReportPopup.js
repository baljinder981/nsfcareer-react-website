import React from 'react';

import share_icon from '../icons/share_icon.png';
import DatePicker from "react-datepicker";
import { Row, Col, Card, Container, DropdownButton, Dropdown, Button, Table } from 'react-bootstrap';
// import "react-datepicker/dist/react-datepicker.css";
import Report from '../ReportContent/ExportCustomReport';
import { PDFDownloadLink } from '@react-pdf/renderer';

class DownloadReportPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      mps_95:'',
      csdm_15:'',
      axonal_15: '',
      masxsr_15: '',
      ischecked: true,
      startDate: new Date(),
      endDate: new Date(),
      selectedItem: 'Today',
      merticsImage: ''
    };

  }

  scrollToTop(){
  }
  componentDidMount() {
    
  }

  downFullImage = () => {
    let title = 'Maximum Principal Strain'
    let canvas = document.querySelector("#c");
    const c = document.createElement('canvas');
    c.width = 900;
    c.height = 350;
    const plotCanvas = document.querySelector(".chartjs-render-monitor");
    console.log("plotcanvas", plotCanvas)
    c.getContext('2d').font = "20px Arial";
    // c.getContext('2d').fillText('Location of ' + title, 300, 37);
    c.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 50, 400, 300);
    c.getContext('2d').drawImage(plotCanvas, 0, 0, plotCanvas.width, plotCanvas.height, 400, 50, 500, 300);
    let dc = c.toDataURL();
    console.log('dc',dc)
    this.setState({merticsImage: dc})
    // var link = document.createElement("a");
    // link.download = "full_image.png";
    // link.href = dc;
    // link.target = "_blank";
    // link.click();
    // return dc;
  }


  handleChange =(e)=>{
    this.downFullImage();
    console.log(e.target.name,!this.state[e.target.name] ? e.target.value :'' );
    this.setState({ischecked: false})
    let the = this;
    setTimeout(()=>{
      the.setState({ischecked: true});
    },1000)
    this.setState({[e.target.name]: !this.state[e.target.name] ? e.target.value :'' });

  }
  render() {
    console.log("propsData 3", this.props);
    const { startDate, endDate, selectedItem } = this.state;

    let fileName = "unknown.pdf";
    if(this.props.data.data){
      fileName = this.props.data.data.player['first-name']+'_'+this.props.data.data.player['last-name']+'_'+this.props.data.data.org_id.split('-')[1]+'.pdf';
    }

    return (
      <div style={this.props.isVisible} className="modal__wrapper ">
        
        <div className="download-custom-report-box">
          <img
            className="delete__icon"
             onClick={() => this.props.makeVisible({ display: 'none' })}
            src="/img/icon/close.svg"
            alt=""
          />
          <Row className="head">
            <Col md={12} lg={12}>
              {/*<h2>Select Dates</h2>*/}
              
            </Col>
            <Row className="datepickers">
              <Col md={3}>
                <p
                  style={{
                    'font-size': '20px',
                    'font-weight': '600'
                  }}
                >
                Select Dates
                </p>
              </Col>
              <Col md={3} style={{'text-align': 'left'}}>
                <DropdownButton id="dropdown-basic-button" title={selectedItem}>
                  <Dropdown.Item onClick={()=>this.setState({selectedItem: 'Today'})}>Today</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.setState({selectedItem: 'Yesterday'})}>Yesterday</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.setState({selectedItem: 'Last 7 Days'})}>Last 7 Days</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.setState({selectedItem: 'Last 30 Days'})}>Last 30 Days</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.setState({selectedItem: 'This Month'})}>This Month</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.setState({selectedItem: 'Last Month'})}>Last Month</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.setState({selectedItem: 'Custom Range'})}>Custom Range</Dropdown.Item>
                </DropdownButton>
              </Col>
              {selectedItem === 'Custom Range' && 
                <>
                  <Col md={3}>
                    <DatePicker 
                      selected={startDate} 
                      onChange={(date) => this.setState({startDate: date})} 
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                    />
                  </Col>
                  <Col md={3}>
                    <DatePicker 
                      selected={endDate} 
                      onChange={(date) => this.setState({endDate: date})} 
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                    />
                  </Col>
                </>
              }
              {selectedItem !== 'Custom Range' && 
                <>
                  <Col md={2}>
                    <Button variant="success">APPLY</Button>
                  </Col>
                  <Col md={2}>
                    <Button variant="secondary">CANCEL</Button>
                  </Col>
                </>
              }
            </Row>
            <Row className="datepickers">
              <Col md={3}>
              </Col>
              {selectedItem === 'Custom Range' && 
                <>
                  <Col md={2} style={{'text-align': 'left'}}>
                    <Button variant="success">APPLY</Button>
                  </Col>
                  <Col md={2} style={{'text-align': 'left'}}>
                    <Button variant="secondary">CANCEL</Button>
                  </Col>
                </>
              }

            </Row>
          </Row>
          <Row style={{'width':'100%','color': 'black'}}>
              <Col md={3}>
                <p className="select-metric-h">
                Select Strain Metric
                </p>
              </Col>
              <Col md={9} className="select-metric-container">
                <p>Select all that apply</p>
                 <Table >
                  <tbody>
                    <tr>
                      <td><input name="mps_95" type="checkbox" onChange={this.handleChange}/></td>
                      <td>MPS-15</td>
                      <td><input name="csdm_15" type="checkbox" onChange={this.handleChange} /></td>
                      <td>CSDM<sub>15</sub></td>
                    </tr>
                    <tr>
                      <td><input name="axonal_15" type="checkbox" onChange={this.handleChange} disabled/></td>
                      <td style={{'color': '#b3b3b3'}}>Axonal Strain<sub>15</sub></td>
                      <td><input name="masxsr_15" type="checkbox" onChange={this.handleChange} disabled/></td>
                      <td style={{'color': '#b3b3b3'}}>MASxSR<sub>15</sub></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
          </Row>
            <Row style={{'width':'100%','color': 'black'}}>
              <Col md={3}>
              </Col>
              <Col md={4}>
                <button className="Download-button-custom-report"><img src={share_icon} style={{width:'24px'}} alt="share_icon" />  Share</button><br/>
              </Col>
              <Col md={4}>
                {this.state.ischecked &&
                  <PDFDownloadLink document={<Report Metric={this.state} jsonfile={this.props.brainRegions} data={this.props.data.data} />} className="export-cumulative-player" fileName={fileName} style={{
                    color: 'white'
                    }}>
                      <button className="Download-button-custom-report">Download</button>
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                  </PDFDownloadLink>
                }
                {!this.state.ischecked ? (
                      <div className="d-flex justify-content-center center-spinner">
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : null}
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default DownloadReportPopup;
