import React from 'react'
import { SearchIcon } from '../components/Icons'
import Searcher from '../components/Searcher'

export default function Header({
	genre,
	pages,
	handlePageChange,
	handleGenreSelect,
	handleSearchValeChange,
	searchInput,
	genres,
}) {
	// console.log('uniqueGenres(books)', uniqueGenres())
	// console.log('applyFilters', applyFilters)

	return (
		<div className='header-container header'>
			<nav>
				<h1>Editorial AR</h1>
				<ul>
					<div className='search-books'>
						{/* <SearchIcon /> */}
						<Searcher
							handleSearchValeChange={handleSearchValeChange}
							searchInput={searchInput}
						/>
					</div>
					<li>
						<div className='select'>
							<select value={genre} onChange={(e) => handleGenreSelect(e)}>
								<option className='customValue' value='all books'>
									all books
								</option>
								{genres.map((g) => {
									return (
										<option className='customValue' key={g} value={g}>
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
