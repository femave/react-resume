import React from 'react'
import style from './main.scss'
import FontAwesome from 'react-fontawesome'

const Experience = () => {
	return(
		<div className={style.mainDiv}>
		<h1><FontAwesome className={style.faStack} name='diamond'/>Experience</h1>
		<div className={style.exp}>
			<div className={style.h3divs}><div className={style.h3divsBlack}><h3>Freelance JS developer</h3></div></div>
			<p>september 2017 - Present</p>
			<ul>
			 <li>Investigate and choose the best technology for each project</li>
			 <li>Develop new user-facing features</li>
			 <li>Optimize applications for maximum speed and scalability</li>
			 <li>Build reusable code and libraries for future use</li>
			 <li>Build API endopoints for specific apps</li>
			 <li>Collaborate with other team members and stakeholders</li>
			</ul>
		</div>
		<div className={style.exp}>			
			<div className={style.h3divs}><div className={style.h3divsBlack}><h3>Full Stack Project</h3></div></div>
			<p>2017</p>
			<p>Full stack project made with MEAN technologies</p>
			<a href="https://github.com/femave/webdevelopers">
			Link to project
			</a>
		</div>
		<div className={style.exp}>			
			<div className={style.h3divs}><div className={style.h3divsBlack}><h3>Front-end Project</h3></div></div>
			<p>2017</p>
			<p>Front-end project made with api from foursquare and using angular</p>
			<a href="https://github.com/amallen22/antojode">
			Link to project
			</a>
		</div>
		<div className={style.exp}>			
			<div className={style.h3divs}><div className={style.h3divsBlack}><h3>Comercial consultor at Tecnocasa</h3></div></div>
			<p>March 2015/Sep. 2015</p>
			<p>Advising people on how to buy or sell house and flats</p>
		</div>
		</div>
		)
}

export default Experience