import React from 'react';
import './css/JobCard.css';
export default class JobCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <div className="JobCard">
                <div className="ImageContainer">
                    <img src="https://workclass.co/static/logoSquare-940d6103725f712c7853c6eab20bfe31.png" height="120px"></img>
                </div>
                <div className="CompanyTitleContainer">
                    {this.props.jobInfo.company}
                </div>
                <div className="JobTitleContainer">
                    Job Title : {this.props.jobInfo.title}
                </div>
                <div className="JobPostedDateContainer">
                    Posted Date : {this.props.jobInfo.date}
                </div>
            </div>
        );
    }
}