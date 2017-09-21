import React from 'react'
import style from './main.scss'
import FontAwesome from 'react-fontawesome'

const Contact = () => {
	return(
		<div>
		<h1><FontAwesome className={style.faStack} name='address-card'/>Contact Me</h1>
		<h3>Mobile: +34 682 04 32 89</h3>
		<h3>Email: marc.vergara.f@gmail.com</h3>
		<h3>Github: www.github.com/femave</h3>
		</div>
		)
}

export default Contact