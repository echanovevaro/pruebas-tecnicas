import React from 'react'
import Select from '../components/Select'

export default function Header({ fiLterBooksByGenre }) {
	return (
		<div className='header-container header'>
			<nav>
				<span>Editorial ar</span>
				<ul>
					<li>
						<Select fiLterBooksByGenre={fiLterBooksByGenre} />
					</li>
				</ul>
			</nav>
		</div>
	)
}
