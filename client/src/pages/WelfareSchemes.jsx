import { useEffect, useState } from "react";
import API from "../api/api";
import "./WelfareSchemes.css";

function WelfareSchemes() {

    const [schemes,setSchemes] = useState([]);

    useEffect(()=>{

        API.get("/welfare")
        .then((res)=>{
            console.log(res.data);
            setSchemes(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });

    },[]);


    return (

        <div className="welfare-page">

            <h1>Government Welfare Schemes</h1>

            <p>
                Andhra Pradesh Government schemes helping senior citizens.
            </p>


            <div className="scheme-container">

            {
                schemes.length > 0 ?

                schemes.map((scheme)=>(
                    
                    <div className="scheme-card" key={scheme._id}>

                        <h2>
                            {scheme.schemeName}
                        </h2>


                        <h4>
                            Category:
                        </h4>

                        <p>
                            {scheme.category}
                        </p>


                        <h4>
                            Eligibility:
                        </h4>

                        <p>
                            {scheme.eligibility}
                        </p>


                        <h4>
                            Benefits:
                        </h4>

                        <p>
                            {scheme.benefits}
                        </p>


                        <a 
                        href={scheme.applyLink}
                        target="_blank"
                        >
                        Apply Now
                        </a>


                    </div>

                ))

                :

                <h2>
                    No Welfare Schemes Available
                </h2>

            }


            </div>


        </div>

    );

}


export default WelfareSchemes;