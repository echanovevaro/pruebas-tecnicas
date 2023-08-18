import React from 'react'

export default function BooksDashboard({ books, findBookById }) {
	console.log('cuantos libros', books.length)
	return (
		<div className='item-b'>
			<ul className='container-dash'>
				{books
					.filter((b) => !b.readed && !b.toRead)
					.map((b) => (
						<li
							key={b?.book.ISBN}
							className='selected-book'
							onClick={() => {
								findBookById(b.book.ISBN)
							}}>
							<img src={b.book.cover} alt='cover-book' />
						</li>
					))}
			</ul>

			<h4>Resultados: {books.length}</h4>
		</div>
	)
}
