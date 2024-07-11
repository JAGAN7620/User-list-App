import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "no": 1, "name": "Anu", "username": "itsmeanu", "email": "anu@234", "phone": "8954872378", "website": "wayne.org" },
            { "no": 2, "name": "Rinu", "username": "rinuzzzzz", "email": "rinu@76", "phone": "7865349078", "website": "atlanta.net" },
            { "no": 3, "name": "Christa", "username": "christy6766", "email": "cris@546", "phone": "9053426889", "website": "rez.lmt" },
            { "no": 4, "name": "Prasad", "username": "whychoo", "email": "prasad@34", "phone": "0954786534", "website": "lex.corp" },
            { "no": 5, "name": "Kent", "username": "imkent@", "email": "kent@4325", "phone": "908545469", "website": "demarco.info" },
            { "no": 6, "name": "Daniel", "username": "daniel@", "email": "danielnot@54", "phone": "89673456876", "website": "nestle.corp" },
            { "no": 7, "name": "Peter", "username": "spideyyyy", "email": "pete@464", "phone": "21079132", "website": "oscorp.info" },
            { "no": 8, "name": "Mr. V", "username": "callmev", "email": "vic@67", "phone": "586674340", "website": "jagua.com" },
            { "no": 9, "name": "Sonia", "username": "sonnnz", "email": "sonz@57", "phone": "863899996", "website": "stallion.com" },
            { "no": 10, "name": "Asar", "username": "asar_asar", "email": "asr@56", "phone": "0804554784", "website": "reliance.net" }
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div class="card" >
                    <div class="card-body">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Website</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map(
                                                        (value, index) => {
                                                            return <tr>
                                                                <th scope="row">{value.no}</th>
                                                                <td>{value.name}</td>
                                                                <td>{value.username}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.phone}</td>
                                                                <td>{value.website}</td>
                                                            </tr>
                                                        }
                                                    )

                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewAll
