import React from 'react';
import './css/JobListing.css';
import HttpRequest from '../frameworks/HttpRequest';
import JobCard from './JobCard';
export default class JobListing extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            "jobListings" : []
        };
    }

    async componentWillMount()
    {
        var companyName = '';
        var url = '';
        if(this.props.companyName){
            companyName = this.props.companyName;
            url= "api/v1/company/"+companyName;
        }else{
            url = "api/v1/jobs/";
        }
        var httpRequest = new HttpRequest()
        var jobListings = await httpRequest.getRequest(url);
        console.log(jobListings.data);
        this.setState({
            jobListings : jobListings.data 
        });
    }

    render()
    {
        return (
            <div className="job-listing">
                {   
                    this.state.jobListings.map((job) => 
                        {
                            return <JobCard jobInfo = {job} key={job.id}></JobCard>;
                        }
                    )
                }
            </div>
        );
    }
}