import "./Emergency.css";


function Emergency(){


const contacts=[


{
icon:"🚑",
title:"Ambulance",
number:"108"
},


{
icon:"👵",
title:"Senior Citizen Helpline",
number:"14567"
},


{
icon:"🚓",
title:"Police Emergency",
number:"100"
},


{
icon:"🏥",
title:"Health Helpline",
number:"104"
}


];



return(


<div className="emergency-page">


<h1>
🚨 Emergency Support
</h1>



<p>
Quick access to important emergency services for senior citizens.
</p>



<div className="emergency-grid">


{

contacts.map((item,index)=>(


<div 
className="emergency-card"
key={index}
>


<h2>
{item.icon} {item.title}
</h2>


<h3>
{item.number}
</h3>



<a href={`tel:${item.number}`}>
Call Now
</a>


</div>


))


}


</div>



</div>


);


}


export default Emergency;