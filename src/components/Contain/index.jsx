import React from 'react'
import FontAwesome from 'react-fontawesome'

import 'normalize-css'
import style from './main.scss'

import Photo from '../Photo'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Contact from '../Contact'
import Asside from '../Asside'

const Contain = () => {
  return (
    <div className={style.main}>
    	<Photo />
    	<AboutMe />
    	<Skills />
    	<Contact />
    </div>
  )
}

export default Contain
