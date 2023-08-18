import React from 'react'

export default function Searcher({ handleSearchValeChange, searchInput }) {
	return (
		<div className='searcher'>
			<input
				type='search'
				required
				minLength='4'
				placeholder='Search...'
				onChange={(e) => handleSearchValeChange(e)}
				value={searchInput}
			/>
		</div>
	)
}
