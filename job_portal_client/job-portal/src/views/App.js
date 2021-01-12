import './css/App.css';
import React from 'react';
//export default withRouter(RouterIndex);
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.js';
import JobListing from '../components/JobListing';
import CompanyListing from '../components/CompanyListing';

class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      activeTab : 0
    };
  }

  switchTab(index)
  {
    //this.props.history.push('/companyJobs');
    this.setState({activeTab : index});
  }

  render()
  {
    return (
      <div className="App">
        <Header></Header>
        <div className="tab-container">
          <div onClick={() => this.switchTab(0)} className={ `tab ${this.state.activeTab == 0 ? 'active' : ''}`}>JobListing</div>
          <div onClick={() => this.switchTab(1)} className={ `tab ${this.state.activeTab == 1 ? 'active' : ''}`}>Company</div>
        </div>
        {this.state.activeTab == 0 ? <JobListing></JobListing> : <CompanyListing history={this.props.history}></CompanyListing>}
    
      </div>
    );
  }
}

export default withRouter(App);
