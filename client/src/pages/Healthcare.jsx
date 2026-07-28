import { useEffect, useState } from "react";
import API from "../api/api";
import "./Healthcare.css";


function Healthcare() {

    const [healthcare, setHealthcare] = useState([]);


    useEffect(() => {

        API.get("/healthcare")
            .then((res) => {

                console.log(res.data);
                setHealthcare(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);



    return (

        <div className="health-page">

            <h1>
                Government Healthcare Services
            </h1>


            <p>
                Healthcare facilities available for senior citizens.
            </p>



            <div className="health-container">


                {
                    healthcare.length > 0 ?

                    healthcare.map((item) => (

                        <div className="health-card" key={item._id}>


                            <h2>
                                🏥 {item.hospitalName}
                            </h2>


                            <h4>
                                Services Provided:
                            </h4>

                            <p>
                                {item.services}
                            </p>


                            <h4>
                                Contact:
                            </h4>

                            <p>
                                📞 {item.contact}
                            </p>


                            <h4>
                                Location:
                            </h4>

                            <p>
                                📍 {item.location}
                            </p>


                        </div>

                    ))

                    :

                    <h2>
                        No Healthcare Services Available
                    </h2>

                }


            </div>


        </div>

    );

}


export default Healthcare;