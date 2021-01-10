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
        var httpRequest = new HttpRequest()
        var jobListings = await httpRequest.getRequest("api/v1/jobs/");
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