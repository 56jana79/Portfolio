import React from "react";
import Pagecomponent from "../../../PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import './style.scss'
var Contact = ()=>{

    var media = [
      {
         Head:"Social Media",
  
         Contacts:[
            {
               m1:'LinkedIn',
               link:`https://www.linkedin.com/in/jana-t-aa78962b2/`
            },
            {
                 m1:'Git Hub',
               link:`https://github.com/56jana79`
            },
            
                {
                    m1:'Naukri',
                  link:`https://www.naukri.com/mnjuser/homepage?utm_source=google&utm_medium=cpc&utm_campaign=Brand`
               }
            
         ]

        },
        
    ]

return(
    <section id='contact' className='contact'>
    <Pagecomponent 
    headerTest='My Contact'
    icon={<BsInfoCircleFill  size={40} />}
    />
   
<div className="contact-container">
{media.map((item)=>{
return(
<div>
<h2 className="contact-header">{item.Head} </h2>


<div className="contacts-container">
{item.Contacts.map((item2)=>{
    return(
        <div className="links-container">
        <h2>{item2.m1}</h2>
        <a href={item2.link} className="anker">{item2.link}</a>
        </div>
    )

})}
</div>

</div>

)
})}

</div>

       </section>
)

}
export default Contact