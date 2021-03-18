import React from 'react';

import { 
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row
} from 'reactstrap';

class manageAccessPopup extends React.Component {
  constructor() {
    super();
    this.state = {
        user_types : [],
        first_name : '',
        last_name : '',
        email : '',
        isRequesting : false,
        OrganizationName: '',
		superAdminvalue: false,
		apiAccessvalue: false,
		simulationportelaccessvalue: false,
    };
	
	 
  }
  updateUserType(userType) {
     
  }
	handleAccessFor = (e) => {
		e.preventDefault();
		var selectedvalue = e.target.value;
		if(selectedvalue == "Super Addmin"){
			var superadmin = document.getElementsByClassName('superadmin');
			if(superadmin[0].checked){
				setTimeout(() => {
					this.setState({
					superadminvalue: true,
				});	
				}, 100)
			}else{
				setTimeout(() => {
					this.setState({
					superadminvalue: false,
				});	
				}, 100)
			}
		}
		if(selectedvalue == "API Access"){
			var apiaccess = document.getElementsByClassName('apiaccess');
			if(apiaccess[0].checked){
				setTimeout(() => {
					this.setState({
					apiAccessvalue: true,
				});	
				}, 100)
			}else{
				setTimeout(() => {
					this.setState({
					apiAccessvalue: false,
				});	
				}, 100)
			}
		}
		if(selectedvalue == "Simulation Portel Access"){
			var portelaccess = document.getElementsByClassName('portelaccess');
			if(portelaccess[0].checked){
				setTimeout(() => {
					this.setState({
					simulationportelaccessvalue: true,
				});	
				}, 100)
			}else{
				setTimeout(() => {
					this.setState({
					simulationportelaccessvalue: false,
				});	
				}, 100)
			}
		}
		
	}
 handlesave = () =>{
		var superadmin = document.getElementsByClassName('superadmin');
		var apiaccess = document.getElementsByClassName('apiaccess');
		var portelaccess = document.getElementsByClassName('portelaccess');
		var superadminValue =0;
		var apiaccessValue =0;
		var portelaccessValue =0;
		if(superadmin[0].checked){
			superadminValue = 1;
		}
		if(apiaccess[0].checked){
		   apiaccessValue = 1;
		}
		if(portelaccess[0].checked){
		   portelaccessValue = 1;
		}
		let updateData = {
		data : this.props.data,
		superadmin: superadminValue,
		apiaccess : apiaccessValue,
		portelaccess : portelaccessValue,
		}
		this.props.isUpdateData2(updateData);
  }
  handleDelete = (e)=> {
  }
  scrollToTop(){
    //  window.scrollTo(0, 0)
  }


  render() {   
  if(this.state.simulationportelaccessvalue){
  console.log("simulationportelaccessvalue",this.state.simulationportelaccessvalue)
  }
  if(this.state.apiAccessvalue){
  console.log("apiAccessvalue",this.state.apiAccessvalue)
  }
  if(this.state.superAdminvalue){
  console.log("superadminvalue",this.state.superAdminvalue)
  }   
   return (
        <div style={this.props.isVisible} className="modal__wrapper">
         {this.props.isVisible ? this.scrollToTop() : null}
        <div className="modal__show" style={{'background':'#fff','width':'35%','border':'3px solid #0f81dc','height':'auto','color':'#000','padding':'28px 0'}}>
          <img
            className="delete__icon"
             onClick={() => this.props.makeVisible3({ display: 'none' })}
            src="/img/icon/close.svg"
            alt=""
          />

          <h2>Manage Access</h2>
		  <h3>{this.props.data.name}</h3>
			<label style={{'width':'50%','text-align': 'left','font-size': '20px','font-weight': '500'}}><input type="radio" name="access" class="superadmin" checked ={this.state.superadminvalue} onChange={this.handleAccessFor} value="Super Addmin" style={{'width': '20px','height': '20px','margin-right': '15px'}} /> Super Addmin</label>
			<label style={{'width':'50%','text-align': 'left','font-size': '20px','font-weight': '500'}}><input type="radio" name="access" class="apiaccess" checked ={this.state.apiAccessvalue} onChange={this.handleAccessFor} value="API Access" style={{'width': '20px','height': '20px','margin-right': '15px'}} /> API Access</label>
			<label style={{'width':'50%','text-align': 'left','font-size': '20px','font-weight': '500'}}><input type="radio" name="access" class="portelaccess" checked ={this.state.simulationportelaccessvalue} onChange={this.handleAccessFor} value="Simulation Portel Access" style={{'width': '20px','height': '20px','margin-right': '15px'}}/> Simulation Portel Access</label>
          <div className="delete-confirmation-button">
            <button className="btn button-back"  onClick={this.handlesave}>Revoke Access</button>            
          </div>
        </div>
      </div>
    );
  }
}

export default manageAccessPopup;
