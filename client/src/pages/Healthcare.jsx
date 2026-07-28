import {useEffect,useState} from "react";
import API from "../api/api";
import "./Healthcare.css";


function Healthcare(){

const [services,setServices]=useState([]);


useEffect(()=>{


API.get("/healthcare")

.then((res)=>{

console.log(res.data);

setServices(res.data);

})


.catch((err)=>{

console.log(err);

});


},[]);



return(

<div className="health-page">


<h1>
Government Healthcare Services
</h1>


<p>
Healthcare facilities available for senior citizens.
</p>



<div className="health-container">


{

services.length>0 ?


services.map((item)=>(


<div className="health-card" key={item._id}>


<h2>
{item.serviceName}
</h2>


<p>
{item.description}
</p>


<p>
📍 {item.location}
</p>


<a 
href={item.link}
target="_blank"
>
Visit Service
</a>


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