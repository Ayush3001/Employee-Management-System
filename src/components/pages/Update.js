import React from 'react'
import EditEmployee from '../imports/EditEmployee';
import Header from '../imports/Header.jsx';
import { useHistory } from 'react-router-dom';
export default function Update (props) {


        console.log(props.match.params.id);
        const history = useHistory();
        
        return (
            <><Header/>
            <div id="login">
                <div className="container">
                    <div className="row login-box">
                        <EditEmployee id = {props.match.params.id} history={history}/>
                        
                    </div>
                </div>
          </div>
          </>
        )



}

