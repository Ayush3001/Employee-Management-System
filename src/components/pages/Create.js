import React from 'react'
import CreateEmployee from '../imports/CreateEmployee';
import Header from '../imports/Header.jsx';
import { useHistory } from 'react-router-dom';
export default function Create() {
const history=useHistory();
    return (
        <>
        <Header/>
        <div id="login">
            
            <div className="container">
                <div className="row login-box">
                    <CreateEmployee history={history}/>
                </div>
            </div>
      </div>
      </>
    )
}
