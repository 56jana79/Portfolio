import React from "react";
import Pagecomponent from "../../../PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
// import jana from './src/assets/jana.jpg'
// import jana from "./src/jana.jpg"
// import jana from './assets/react.svg';
// import './assets/jack.jpg'
import './style.scss'

var Resume = ()=>{
    const Rcontent =  

   [
    {
  Tittle: 'Education',
  Schooldata:[
    {
        School:'Sri Bharathidhasan Matriculation Higher secondary School',
        Degree:'-SSLC',
        Year:'-2018',
        percentage:"percentage:75"
    },
    {
        School:'Sri Bharathidhasan Matriculation Higher secondary School',
        Degree:'-HSLC',
        Year:'-2020',
          percentage:"percentage:55"
    }
  ],
  Colleg:[
          {
            Cname:'karpagam college of engineering',
            Degree:'-B.Tech',
            Branch:'-Information Technology',
            Year:'-2024',
            cgpa:'CGPA:79 %'
          }
        
  ],
  project:[
    {
      
      Projectdescription:'This site covers a wide range of fitness topics, from beginner-friendly exercises to advanced workout tips. It also explores the science behind fitness trends and offers practical advice A comprehensive platform with personalized fitness and nutrition coaching. It also provides tools like calorie counters, step trackers, and exercise libraries, along with a supportive community'
      ,
      Projectname:'Health and Fitness',
      Toolused:"ToolUsed: React.Js"
    },{
    
      Projectdescription:'A travel blog website is an exciting platform where individuals, travel enthusiasts, or businesses share their travel experiences, tips, itineraries, photos, and sometimes even videos to inspire others. These blogs often serve as a great resource for planning trips, discovering hidden gems, and learning about different cultures, cuisines, and activities around the world.',
      Projectname:'Travel blog',
      Toolused:"ToolUsed: Java Script , HTML , CSS , Bootstrap"
    },
    {
    
      Projectdescription:"'This project is a Netflix web clone designed with a focus on UI/UX principles. It replicates the look and feel of Netflix's user interface while incorporating interactive elements and animations for an enhanced user experience.'",
      Projectname:'Netflix clone',
       Toolused:"ToolUsed: UI/UX"
    }
  ]



    }
  ]

  var personal =[
    {
      Tittle:'Personal Details',
      Name:'Name:Jana',
      Age:'Age:22',
      DOB:'DOB:06/02/2003',
      Email:'Email:janathiru2003@gmail.com',
      Phone:'Phone:7397676523',
      Address:"Address: 3/98 , Vadaseri north , Thanjavur , pin - 614905"
    },
    
     
    
   
  ]

return(
    <section id='resume' className='resume'>
    <Pagecomponent 
    headerTest='My Resume'
    icon={<BsInfoCircleFill  size={40} />}
    />
    
    <div className='resume_content'>
   {Rcontent.map((item)=>{
   return(
    <>
    <div className="resume-container">
      {/* <h2> {item.Tittle}</h2> */}
      <div className="Technology">
    <h2>Technologies</h2>
    
  <h3> Languages: Java, SQL, HTML, CSS, JavaScript , REACT.JS</h3>  
 <h3> Technologies: Git /GitHub, Figma, Excel, Bootstrap</h3>  
    </div>
    <div className="profile">
      <h2>profile</h2>
 <p> A Passionate Learner and an Empathetic Leader and completed my Bachelor’s Degree Specialized in Information
 Technology. The Impact of my Presence on Anything I Work on is The Top Of my Priorities . I am Currently
 Looking for Software Engineering Internship / Full-Time Role Where I Can Enhance My Skills as Well as
 Contribute To The Growth of The Organization .</p>
    </div>
       <div className="career-objective">
  <h2>Career Objective</h2>
<p> • Fervent Graduate Who Intends To Build A Career In an Esteemed Organization where I Can Offer an Excellent
Work Ethic and Explore Career Options in The Field Thereby Cordially Proffer For The Organization’s Growth</p>
       </div>
 <div className="personal details">
{
  personal.map((item)=>{
    return(
      <div className="personal-details">
      <h2>{item.Tittle}</h2>
      <h3>{item.Name}</h3>
      <h3>{item.Age}</h3>
      <h3>{item.DOB}</h3>
      <h3>{item.Email}</h3>
      <h3>{item.Phone}</h3>
      <h3>{item.Address}</h3>

      
      </div>
    )
  })
}


 </div>

          </div>
          <div className="educational-items">
        <div>
        {/* <h2> {item.Tittle}</h2> */}
        <h2>School</h2>
        {item.Schooldata.map((item)=>{
            return(
                <div className="school-content">
                  
                <h3>{item.School}</h3>
                <h4>{item.Degree}</h4>
                <h5>{item.Year}</h5>
                <h5>{item.percentage}</h5>

                <br />
                </div>
            )
        })}
        </div>

<div className="College-content">
<h2>College</h2>
{item.Colleg.map((college)=>{
    return(
        <>
        <h3>{college.Cname}</h3>
        <h4>{college.Degree}</h4>
        <h5>{college.Year}</h5>
        <h5>{college.cgpa}</h5>

        </>
    )
 
})}
</div>
<div className="project-content">
  <h2>Project</h2>
{item.project.map((project)=>{
  return(
    <>
    <h3><li>{project.Projectname}</li></h3>
    <h4>{project.Projectdescription}</h4>
    <h4>{project.Toolused}</h4>
    
    </>
  )
}
)}

</div>

</div>


        </>
   )    
   })}



        </div>
        
        
 
       </section>
)

}
export default Resume