import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "no": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "phone": "1-770-736-8031 x56442", "website": "hildegard.org" },
            { "no": 2, "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv", "phone": "010-692-6593 x09125", "website": "anastasia.net" },
            { "no": 3, "name": "Clementine Bauch", "username": "Samantha", "email": "Nathan@yesenia.net", "phone": "1-463-123-4447", "website": "ramiro.info" },
            { "no": 4, "name": "Patricia Lebsack", "username": "Karianne", "email": "Julianne.OConner@kory.org", "phone": "493-170-9623 x156", "website": "kale.biz" },
            { "no": 5, "name": "Chelsey Dietrich", "username": "Kamren", "email": "Lucio_Hettinger@annie.ca", "phone": "(254)954-1289", "website": "demarco.info" },
            { "no": 6, "name": "Mrs. Dennis Schulist", "username": "Leopoldo_Corkery", "email": "Karley_Dach@jasper.info", "phone": "1-477-935-8478 x6430", "website": "ola.org" },
            { "no": 7, "name": "Kurtis Weissnat", "username": "Elwyn.Skiles", "email": "Telly.Hoeger@billy.biz", "phone": "210.067.6132", "website": "elvis.io" },
            { "no": 8, "name": "Nicholas Runolfsdottir V", "username": "Maxime_Nienow", "email": "Sherwood@rosamond.me", "phone": "586.493.6943 x140", "website": "jacynthe.com" },
            { "no": 9, "name": "Glenna Reichert", "username": "Delphine", "email": "Chaim_McDermott@dana.io", "phone": "(775)976-6794 x41206", "website": "conrad.com" },
            { "no": 10, "name": "Clementina DuBuque", "username": "Moriah.Stanton", "email": "Rey.Padberg@karina.biz", "phone": "024-648-3804", "website": "ambrose.net" }
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
