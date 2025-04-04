import React from 'react'
import Pagecomponent from '../../../PageHeader'
import {BsInfoCircleFill} from 'react-icons/bs'
// import jack from '../assets/jack.jpg'
// import fitness from 'portfolio/src/components/images/jana.jpg';
import './style.scss'
var Portfolio = ()=>{


var projects = [
    { 
        c:"1",
        P1:"project 1 : Health and Fitness ",
        a:" http://localhost:5173/ "
       
    },
    {
        c:"1",
        P1:"project 2 : Travel Blog ",
        a:"https://56jana79.github.io/TravelWebsite/"
    },
    {
        c:"1",
        P1:"project 3 : Netflix Clone ",
         a:"https://www.figma.com/design/CQFejVw5H2T3yLecH0EDMA/Untitled?node-id=8-44"
    },

]


return(
    <section id='portfolio' className='portfolio'>
    <Pagecomponent 
    headerTest='My Projects'
    icon={<BsInfoCircleFill  size={40} />}
    />
    <div className='containers'>
    {projects.map((item)=>{
        return(
            <div className='project' key={item.c}>
              <a href={item.a} className='anker'> <h2>{item.P1}</h2></a> 
            </div>
        )
    }
    )}

    </div>


       </section>
)
}

export default Portfolio