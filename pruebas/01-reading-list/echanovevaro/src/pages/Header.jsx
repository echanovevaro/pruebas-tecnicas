import React from 'react'
import { Search } from '../components/Icons'

export default function Header({
	genre,
	pages,
	handlePageChange,
	handleGenreSelect,
	onSearch,
	search,
}) {
	return (
		<div className='header-container header'>
			<nav>
				<h2>Editorial ar</h2>
				<ul>
					<li>
						<div className='select'>
							<select
								value={genre}
								onChange={(e) => handleGenreSelect(e.target.value)}>
								<option className='customValue' value='all books'>
									all books
								</option>
								<option className='customValue' value='Realismo mágico'>
									Realismo mágico
								</option>
								<option className='customValue' value='Terror'>
									Terror
								</option>
								<option className='customValue' value='Ciencia ficción'>
									Ciencia ficción
								</option>
								<option className='customValue' value='Zombies'>
									Zombies
								</option>
								<option className='customValue' value='Fantasía'>
									Fantasía
								</option>
								<option className='customValue' value='Novela romántica'>
									Novela romántica
								</option>
								<option className='customValue' value='Ficción clásica'>
									Ficción clásica
								</option>
								<option className='customValue' value='Novela picaresca'>
									Novela picaresca
								</option>
							</select>
						</div>
					</li>

					<li className='range-slider'>
						<input
							className='input-range'
							type='range'
							onChange={(e) => handlePageChange(e.target.value)}
							oninput={pages}
							value={pages}
							min='0'
							max='1400'
							step='1'
						/>
						<span className='range-value'>{pages}</span>
					</li>
				</ul>
				<div className='search-books'>
					<div className='searcher'>
						<input type='text' />
					</div>
				</div>
			</nav>
		</div>
	)
}
