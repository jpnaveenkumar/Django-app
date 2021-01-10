import { render } from "react-dom"
import './css/Header.css';
import React from 'react';
export default class Header extends React.Component
{
    render()
    {
        return (
        <div className="header">
            <div style={{display: 'flex'}}>
                <img src="https://workclass.co/static/logoSquare-940d6103725f712c7853c6eab20bfe31.png" height="50px"></img>
                <h3>Job Portal</h3>
            </div>
        </div>);
    }
}