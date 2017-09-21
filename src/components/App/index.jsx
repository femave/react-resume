import React from 'react'

import 'normalize-css'
import style from './main.scss'

import Contain from '../Contain'
import Asside from '../Asside'

const App = () => {
  return (
    <div className={style.main}>
    	<Contain />
    	<Asside />
    </div>
  )
}

export default App
