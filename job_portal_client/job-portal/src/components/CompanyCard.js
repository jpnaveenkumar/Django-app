import React from 'react';
import './css/CompanyCard.css';
export default class CompanyCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    navigateToJobCompany()
    {
        this.props.history.push('/company/'+this.props.companyName);
    }

    render()
    {
        return (
            <div onClick={() => this.navigateToJobCompany()} className="CompanyCard">
                <div className="ImageContainer">
                    <img src="https://workclass.co/static/logoSquare-940d6103725f712c7853c6eab20bfe31.png" height="120px"></img>
                </div>
                <div className="CompanyTitleContainer">
                    {this.props.companyName}
                </div>
            </div>
        );
    }
}