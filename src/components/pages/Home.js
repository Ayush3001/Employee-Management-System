import React from 'react'
import Topbar from '../imports/Topbar';
import Sidebar from '../imports/Sidebar';
import "./home.css";
import Header from '../imports/Header.jsx';
export default function Home() {
    return (
        <div className="home">
            <Header />
            <div className="homeWidgets">

            </div >
            <Topbar />

            <div className="container">
                <Sidebar />
            </div>
        </div>
    )
}

