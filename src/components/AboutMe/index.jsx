import React from 'react'
import style from './main.scss'
import FontAwesome from 'react-fontawesome'

const AboutMe = () => {
	return (
		<h1><FontAwesome className={style.faStack} name='user-o'/>About Myself</h1>
		)
}

export default AboutMe
