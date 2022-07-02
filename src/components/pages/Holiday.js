import React from 'react'
import Header from '../imports/Header';

export default function Holiday(){


    let columnProp = {
        fontSize: "20px",
        fontWeight: "bold"
    }
    var tableStyle={
        marginLeft: "30px",
        marginRight: "30px",
        marginTop:"20px"
    }
    var dashboardStyle ={
        fontSize: "22px",
        marginLeft: "30px",
        textDecoration: "none"
    }
        return (
            <div>
                <Header>
                </Header>
                <main>
                    <table responsive="true" className="table table-striped" style={tableStyle}>
                        <thead style={columnProp}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date and Month</th>
                                <th scope="col">Holiday Name</th>
                                <th scope="col">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1 January</td>
                                <td>New Year's Day</td>
                                <td>Restricted Holiday</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>26 Jan</td>
                                <td>Republic Day</td>
                                <td>National Holiday</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>5 Feb</td>
                                <td>Vasant Panchami</td>
                                <td>Restricted Holiday</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>18 Mar</td>
                                <td>Holi</td>
                                <td>Gazetted Holiday</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>10 Apr</td>
                                <td>Rama Navami</td>
                                <td>Restricted Holiday</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>8 May</td>
                                <td>Mother's Day</td>
                                <td>Observance</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>19 Jun</td>
                                <td>Father's Day</td>
                                <td>Observance</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>13 Jul</td>
                                <td>Guru Purnima</td>
                                <td>Observance</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>15 Aug</td>
                                <td>Independence Day</td>
                                <td>Gazetted Holiday</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>26 Sep</td>
                                <td>First Day of Sharad Navratri</td>
                                <td>Observance, Hinduism</td>
                            </tr>

                            <tr>
                                <td>11</td>
                                <td>5 Oct</td>
                                <td>Dussehra</td>
                                <td>Gazetted Holiday</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>24 Oct</td>
                                <td>Diwali/Deepavali</td>
                                <td>Gazetted Holiday</td>
                            </tr>
                           
                            <tr>
                                <td>13</td>
                                <td>8 Nov</td>
                                <td>Guru Nanak Jayanti</td>
                                <td>Gazetted Holiday</td>
                            </tr>

                            <tr>
                                <td>14</td>
                                <td>31th December</td>
                                <td>New Year's Eve</td>
                                <td>Observance</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="/home" style={dashboardStyle}><i className="fas fa-angle-double-left"></i>
                       &nbsp; Dashboard
                    </a>
                </main>

            </div>
        )
    
}
