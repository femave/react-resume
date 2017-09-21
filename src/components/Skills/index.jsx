import React from 'react'
import style from './main.scss'
import FontAwesome from 'react-fontawesome'

const Skills = () => {
	return(
		<div className={style.display}>
		<h1><FontAwesome className={style.faStack} name='rocket'/>Skills</h1>
		</div>
		)
}

export default Skills