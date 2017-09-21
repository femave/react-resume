import React from 'react'

import 'normalize-css'
import style from './main.scss'

import Title from '../Title'
import Experience from '../Experience'
import Education from '../Education'


const App = () => {
  return (
    <div className={style.asside}>
    	<Title />
    	<Experience />
    	<Education />
    </div>
  )
}

export default App
