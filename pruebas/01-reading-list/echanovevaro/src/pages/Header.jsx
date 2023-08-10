import React from 'react'
import Select from '../components/Select'

export default function Header({ selectedValue, fiLterBooksByGenre }) {
	return (
		<div className='header-container header'>
			<nav>
				<span>Editorial ar</span>
				<ul>
					<li>
						<Select
							selectedValue={selectedValue}
							fiLterBooksByGenre={fiLterBooksByGenre}
						/>
					</li>
				</ul>
			</nav>
		</div>
	)
}
