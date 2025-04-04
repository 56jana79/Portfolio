import './style.scss'
import React from 'react'
import Pagecomponent from '../../../PageHeader'
import {BsInfoCircleFill} from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import {DiApple , DiReact} from 'react-icons/di'
import {FaJava , FaDatabase} from 'react-icons/fa'

var About = ()=>{

    var personal = [{
        label:"Name",
        Value:"Jana"
    },
    {
        label:"Age",
        Value:"22"
    },
    {
        label:"Adress",
        Value:"India"
    },
    {
        label:"Email",
        Value:"janathiru2003@gmail.com"
    },
    {
        label:"Degree",
        Value:"B.Tech"
    },
    {
        label:"Branch",
        Value:"Information Technology"
    }]
    var jobsummery = `I am a Front End Developer and I was a fresher who have experience in building websites and web applications.
     I specialize in JavaScript, HTML, CSS, and have professional experience working with React.  
     I am passionate about building scalable and responsive websites that help businesses achieve their goals.`

return(
    <section id='about' className='about'>
 <Pagecomponent 
 headerTest='About Me'
 icon={<BsInfoCircleFill  size={40} />}
 />

 <div className='about_content'> 
    <div className='about_content_personalWrapper'>
    <Animate
    play
    duration={1.5}
    delay={0.5}
    start={{
        transform:'translateX(-900px)',
    }}
    end={{
        transform:'translateX(0px)',
    }}
    > 
<h3 className='role'>Front End Developer </h3>
<p>{jobsummery}</p>
</Animate>  
<Animate
    play  
    duration={1.5}
    delay={0.5}
    start={{
        transform:'translateY(900px)',
    }}
    end={{
        transform:'translateY(0px)',
    }}
    >
<h3 className='personaldetail'>Personal Information</h3>
<ul>

    {personal.map((item,index)=>{
        return(
            <li key={index}>
                <span className='tittle'>{item.label}:</span>
                <span className='value'>{item.Value}</span>
            </li>
        )
    })}
</ul>
</Animate>
    </div>
    <div className='about_content_servicesWrapper'>
      
    <Animate
    play  
    duration={1.5}
    delay={0.5}
    start={{
        transform:'translateX(900px)',
    }}
    end={{
        transform:'translateX(0px)',
    }}
    >
        <div className='about_content_servicesWrapper_innerContent'>
        <div className='i1'>
            <FaJava color='rgb(8, 194, 57)' size={60} />
        </div>
        <div className='i2'>
        <DiApple color='rgb(8, 194, 57)' size={60} />

        </div>
        <div className='i3'>
        <FaDatabase color='rgb(8, 194, 57)' size={60} />

        </div>
        <div className='i4'>
        <DiReact color='rgb(8, 194, 57)' size={60} />

        </div>
        </div>
       
        </Animate>
    </div>

 </div>
 
    </section>

)

}
export default About