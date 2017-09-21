import React from 'react'
import style from './main.scss'
import FontAwesome from 'react-fontawesome'

const Education = () => {
	return(
		<div className={style.mainDiv}>
		<h1><FontAwesome className={style.faStack} name='book'/>Education</h1>
		<div className={style.exp}>
			<h3>Skylab Coders Academy</h3>
			<p>2017 - 2017</p>
			<p>Intensive javascript course, with MEAN stack technologies (fullstack) </p>
		</div>
		<div className={style.exp}>			
			<h3>IFP grupo planeta</h3>
			<p>2016 - 2018</p>
			<p>Java, sql, Postgre, Html, Css</p>
		</div>
		</div>
		)
}

export default Education