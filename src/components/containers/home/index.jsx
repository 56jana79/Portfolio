import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import {Animate} from 'react-simple-animate'
var Home = ()=>{

    var navigate = useNavigate()
console.log(navigate)
    var tocontactpage = ()=>{
navigate('/contact')
    }
return(
    <div>
        <section id="home" className="home ">
            <div className="home_text-wrapper">
<h1>
    Hello, I'm <span className="home_text-wrapper-name">JANA</span>
    <br />

    <span className="home_text-wrapper-job">Frontend Developer</span>
</h1>
  </div>
<Animate
play
duration={0.5}
delay={1
    
}
start={{
    transform:'translateY(550px)',
}}
end={{
    transform:'translateY(0px)',
}}
>
  <div className='home_content-me'>
<button onClick={tocontactpage}>Hire me</button>

  </div>
  </Animate>

        </section>
    </div>
)

}
export default Home