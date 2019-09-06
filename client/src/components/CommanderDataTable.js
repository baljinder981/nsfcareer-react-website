import React from 'react';
import RostarBtn from './Buttons/RostarBtn';
import Footer from './Footer';
import { getStatusOfDarkmode } from '../reducer';


class CommanderDataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      tabActive: 0,
      targetBtn: '',
    };
    console.log(this.props)
  }

  toggleTab = (value) => {
    this.setState({ tabActive: value });
  };

  getTargetBtn = (value) => {
    this.setState({ targetBtn: value });
  };

  componentDidMount() {
    if (getStatusOfDarkmode().status === true) {
      this.refs.card.style.background = '#232838';
      this.refs.table.classList.remove('commander-data-table');
      this.refs.table.classList.add('commander-dark-table');
    }
  }


  render() {
    return (
      <React.Fragment>


{/* <div className="row"> */}
            <div ref="card" className="col-md-12 pl-0 pr-0 mt-5  mb-5 data-table-view">
              <div className="btns-group d-flex">
                <RostarBtn
                  tabActive={this.toggleTab}
                  makeActive={this.state.tabActive}
                  getBtn={this.getTargetBtn}
                  currentBtn={this.state.targetBtn}
                  content="Overview"
                />
                <RostarBtn
                  tabActive={this.toggleTab}
                  makeActive={this.state.tabActive}
                  getBtn={this.getTargetBtn}
                  currentBtn={this.state.targetBtn}
                  content="Athletes"
                />
                <RostarBtn
                  tabActive={this.toggleTab}
                  makeActive={this.state.tabActive}
                  getBtn={this.getTargetBtn}
                  currentBtn={this.state.targetBtn}
                  content="Staff"
                />
              </div>
              <div ref="table" className="commander-data-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">#</th>
                      <th scope="col">Player Name</th>
                      <th scope="col">Sport</th>
                      <th scope="col">Position</th>
                      <th scope="col">Alerts</th>
                      <th scope="col">Impacts</th>
                      <th scope="col">Load</th>
                      <th className="w-25" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                          <input
                            id="checkbox-1"
                            className="checkbox-custom"
                            name="checkbox-3"
                            type="checkbox"
                          />
                          <label
                            htmlFor="checkbox-1"
                            className="checkbox-custom-label"
                          ></label>
                      </td>
                      <th scope="row">01</th>
                      <td>John Sylvester</td>
                      <td>Football</td>
                      <td>RB</td>
                      <td>0</td>
                      <td>2</td>
                      <td>0.046</td>
                      <td>
                        <div className="progress my-progress">
                          <div
                            style={{ width: '0%' }}
                            className="progress-bar my-progress-bar "
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <input
                            id="checkbox-2"
                            className="checkbox-custom"
                            name="checkbox-3"
                            type="checkbox"
                          />
                          <label
                            htmlFor="checkbox-2"
                            className="checkbox-custom-label"
                          ></label>
                      </td>
                      <th scope="row">02</th>
                      <td>John Sylvester</td>
                      <td>Football</td>
                      <td>RB</td>
                      <td>0</td>
                      <td>2</td>
                      <td>0.046</td>
                      <td>
                        <div className="progress my-progress">
                          <div
                            style={{ width: '4%' }}
                            className="progress-bar my-progress-bar"
                            role="progressbar"
                            aria-valuenow=""
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <input
                            id="checkbox-3"
                            className="checkbox-custom"
                            name="checkbox-3"
                            type="checkbox"
                          />
                          <label
                            htmlFor="checkbox-3"
                            className="checkbox-custom-label"
                          ></label>
                      </td>
                      <th scope="row">03</th>
                      <td>John Sylvester</td>
                      <td>Football</td>
                      <td>RB</td>
                      <td>1</td>
                      <td>2</td>
                      <td>0.046</td>
                      <td>
                        <div className="progress my-progress">
                          <div
                            style={{ width: '4%' }}
                            className="progress-bar my-progress-bar"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                      <input
                            id="checkbox-4"
                            className="checkbox-custom"
                            name="checkbox-3"
                            type="checkbox"
                          />
                          <label
                            htmlFor="checkbox-4"
                            className="checkbox-custom-label"
                          ></label>
                      </td>
                      <th scope="row">01</th>
                      <td>John Sylvester</td>
                      <td>Football</td>
                      <td>RB</td>
                      <td>0</td>
                      <td>2</td>
                      <td>0.046</td>
                      <td>
                        <div className="progress my-progress">
                          <div
                            style={{ width: '23%' }}
                            className="progress-bar my-progress-bar"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <input
                            id="checkbox-5"
                            className="checkbox-custom"
                            name="checkbox-3"
                            type="checkbox"
                          />
                          <label
                            htmlFor="checkbox-5"
                            className="checkbox-custom-label"
                          ></label>
                      </td>
                      <th scope="row">02</th>
                      <td>John Sylvester</td>
                      <td>Football</td>
                      <td>RB</td>
                      <td>0</td>
                      <td>2</td>
                      <td>0.046</td>
                      <td>
                        <div className="progress my-progress">
                          <div
                            style={{ width: '4%' }}
                            className="progress-bar my-progress-bar"
                            role="progressbar"
                            aria-valuenow=""
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <input
                            id="checkbox-6"
                            className="checkbox-custom"
                            name="checkbox-3"
                            type="checkbox"
                          />
                          <label
                            htmlFor="checkbox-6"
                            className="checkbox-custom-label"
                          ></label>
                      </td>
                      <th scope="row">03</th>
                      <td>John Sylvester</td>
                      <td>Football</td>
                      <td>RB</td>
                      <td>0</td>
                      <td>2</td>
                      <td>0.046</td>
                      <td>
                        <div className="progress my-progress">
                          <div
                            style={{ width: '0%' }}
                            className="progress-bar my-progress-bar"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        {/* </div> */}
        
        {/* <div className="container pt-5 my-5">
          <PenstateUniversity />
          <div className="row my-3">
            <div className="col-md-8">
              <DashboardDropdownSelector />
            </div>
          </div>
          
        </div> */}
        {/* <Footer/> */}
      </React.Fragment>
    );
  }
}

export default CommanderDataTable;
