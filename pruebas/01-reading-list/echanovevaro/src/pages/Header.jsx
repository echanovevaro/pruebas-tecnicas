import React from 'react'
import { SearchIcon } from '../components/Icons'
import Searcher from '../components/Searcher'

export default function Header({
	genre,
	pages,
	handlePageChange,
	handleGenreSelect,
	books,
	onSearch,
	search,
}) {
	console.log('booksHeader', books)
	let filteredGenre = books.map((b) => b.book.genre)
	return (
		<div className='header-container header'>
			<nav>
				<h1>Editorial AR</h1>
				<ul>
					<div className='search-books'>
						{/* <SearchIcon /> */}
						<Searcher />
					</div>
					<li>
						<div className='select'>
							<select
								value={genre}
								onChange={(e) => handleGenreSelect(e.target.value)}>
								<option className='customValue' value='all books' selected='selected'>
									all books
								</option>
								{filteredGenre
									.filter((b, i) => filteredGenre.indexOf(b) === i)
									.map((g) => {
										return (
											<option className='customValue' value={`${g.toString()}`}>
												{g}
											</option>
										)
									})}
							</select>
						</div>
					</li>
					<li className='range-slider'>
						<input
							className='input-range'
							type='range'
							onChange={(e) => handlePageChange(e.target.value)}
							value={pages}
							min='0'
							max='1400'
							step='1'
						/>
						<span className='range-value'>{pages}</span>
					</li>
				</ul>
			</nav>
		</div>
	)
}

/* <select
value={genre}
onChange={(e) => handleGenreSelect(e.target.value)}>
{books.map((b) =>{ 
	return <option className='customValue' genre={`${b.book.genre}`} value={genre.value}}>
			{b.book.genre}
			 </option>

	
})} */

// {/* <option className='customValue' value='all books'>
// 	all books
// </option>
// <option className='customValue' value='Realismo mágico'>
// 	Realismo mágico
// </option>
// <option className='customValue' value='Terror'>
// 	Terror
// </option>
// <option className='customValue' value='Ciencia ficción'>
// 	Ciencia ficción
// </option>
// <option className='customValue' value='Zombies'>
// 	Zombies
// </option>
// <option className='customValue' value='Fantasía'>
// 	Fantasía
// </option>
// <option className='customValue' value='Novela romántica'>
// 	Novela romántica
// </option>
// <option className='customValue' value='Ficción clásica'>
// 	Ficción clásica
// </option>
// <option className='customValue' value='Novela picaresca'>
// 	Novela picaresca
// </option> */}
// </select>
