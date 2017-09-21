import React from 'react'
import style from './main.scss'
import FontAwesome from 'react-fontawesome'

const Skills = () => {
	return(
		<div className={style.mainDiv}>
			<h1><FontAwesome className={style.faStack} name='rocket'/>Skills</h1>
			<div className={style.design}>
				<div className={style.innerDesign}>
				<h3>DESIGN</h3>
				</div>
			</div>
			<div className={style.coding}>
				<div className={style.innerCoding}>
				<h3>CODING</h3>
				</div>
			</div>
			<div className={style.framework}>
				<div className={style.innerFramework}>
				<h3>FRAMEWORKS/LIBRARIES</h3>
				</div>
			</div>
			<p>
				#Angular #Javascript #Node #React.js #HTML5 #Jasmine Framework #MongoDB #Mongoose #jQuery #Express.js #Bootstrap #Git #GitHub #Lenguaje SASS #TDD #ES6 #CSS #MySQL #PostgreSQL #Yeoman #Redux
			</p>
			</div>
		)
}

export default Skills