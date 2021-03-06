import React from 'react'
import style from './main.scss'
import FontAwesome from 'react-fontawesome'

const AboutMe = () => {
	return (
		<div className={style.mainDiv}>
			<h1><FontAwesome className={style.faStack} name='user-o'/>About Myself</h1>
			<p>Currently intersted in javascript projects (MEAN stack) to keep
			developing my skills:<br/>Javascript, angularjs, node, html5, css,
			jquery, TDD, mongodb, express, bootrstrap, git, sass, etc.<br/>
			Learning React, Webpack and Redux with side projects
			</p>
		</div>
		)
}

export default AboutMe
