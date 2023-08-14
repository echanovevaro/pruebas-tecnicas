import React, { useState } from 'react'
import './Select.css'

export function Select({ fiLterBooksByGenre }) {
	const [selectedValue, setSelectedValue] = useState('all books')

	function handleChange(event) {
		const { value } = event.target
		fiLterBooksByGenre(value)
		setSelectedValue(value)
	}

	return (
		<div className='select'>
			<select value={selectedValue} onChange={handleChange} required>
				<option value='all books'>all books</option>
				<option value='Realismo mágico'>Realismo mágico</option>
				<option value='Terror'>Terror</option>
				<option value='Ciencia ficción'>Ciencia ficción</option>
				<option value='Zombies'>Zombies</option>
				<option value='Fantasía'>Fantasía</option>
				<option value='Novela romántica'>Novela romántica</option>
				<option value='Ficción clásica'>Ficción clásica</option>
				<option value='Novela picaresca'>Novela picaresca</option>
			</select>
		</div>
	)
}
