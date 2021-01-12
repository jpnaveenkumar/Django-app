import React from 'react';
import './css/CompanyListing.css';
import HttpRequest from '../frameworks/HttpRequest';
import CompanyCard from './CompanyCard';
export default class CompanyListing extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = { 
            companyListing : []
        };
    }

    async componentWillMount()
    {
        var httpRequest = new HttpRequest()
        var companyListing = await httpRequest.getRequest("api/v1/company/");
        console.log(companyListing.data);
        this.setState({
            companyListing : companyListing.data 
        });
    }

    render()
    {
        return (
            <div className="company-listing">
                {   
                    this.state.companyListing.map((name, index) => 
                        {
                            return <CompanyCard  history={this.props.history} companyName = {name} key={index}></CompanyCard>;
                        }
                    )
                }
            </div>
        );
    }
}