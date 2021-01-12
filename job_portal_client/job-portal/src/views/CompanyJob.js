import React from 'react';
import './css/CompanyJob.css';
import Header from '../components/Header.js';
import JobListing from '../components/JobListing.js';
export default class CompanyJob extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        var companyName = this.props.match.params.company_name;
        return(
            <div>
                <Header></Header>
                <div className="jobListingContainer">
                    <JobListing companyName = {companyName}></JobListing>
                </div>
            </div>
        );
    }
}