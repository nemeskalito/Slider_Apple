'use client'

import { useState } from 'react'
import './slider.css'

import slidesData from './slides'

const SlideItem = ({ data, handler }) => {
	return (
		<li className='slide-list__item'>
			<button onClick={() => handler(data.id)} className='button'>
				{data.isActive ? (
					<>
						<span>
							<strong>{data.title}.</strong> {data.desc}
						</span>
					</>
				) : (
					<>
						<img className='button__icon' src='./img/icons/plus.svg' alt='#' />
						<strong>{data.title}</strong>
					</>
				)}
			</button>
		</li>
	)
}

const Slider = () => {
	const [slides, setSlides] = useState(slidesData)

	const clickHandler = id => {
		console.log(id)
		setSlides(prev => {
			return prev.map(slide => {
				let isActive = false
				if (slide.id === id) isActive = true

				return { ...slide, isActive: isActive }
			})
		})
	}

	return (
		<div className='slider'>
			<div className='controls'>
				<ul className='slide-list'>
					{slides.map((slide, index) => (
						<SlideItem handler={clickHandler} data={slide} key={index} />
					))}
				</ul>
			</div>
		</div>
	)
}
export default Slider
