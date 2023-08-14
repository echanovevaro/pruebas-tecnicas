import React, { useEffect, useState } from 'react'
import { Select } from '../components/Select'

export default function Header({ fiLterBooksByGenre, fiLterBooksByPages }) {
	console.log('fiLterBooksByPagesHeader', fiLterBooksByPages)
	const [numberPage, setNumberPage] = useState(1400)
	console.log('numberPage', numberPage)

	function handleChange(event) {
		const { value } = event.target
		fiLterBooksByPages(value)
		setNumberPage(value)
	}

	return (
		<div className='header-container header'>
			<nav>
				<span>Editorial ar</span>
				<ul>
					<li>
						<Select fiLterBooksByGenre={fiLterBooksByGenre} />
					</li>
					<li>
						<input
							type='range'
							min='0'
							max='1400'
							step='1'
							onChange={handleChange}
							value={numberPage}
						/>
					</li>
				</ul>
			</nav>
		</div>
	)
}
