import React from 'react'
import style from './main.scss'

const Photo = () => {
	return(
		<div className={style.center}>
		<img className={style.img} src={'http://res.cloudinary.com/femave/image/upload/v1504782819/bny8yxbkzxotnxbu0tlx.jpg'} alt={`Marc image`}/>
		</div>
		)
}

export default Photo