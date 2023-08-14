import React from 'react'

export default function BooksDashboard({ books, findBookById }) {
	console.log('books db', books)

	return (
		<div className='item-b'>
			<ul className='container-dash'>
				{books
					.filter((b) => !b.readed && !b.toRead)
					.map((b) => (
						<li
							key={b.book.ISBN}
							className='selected-book'
							onClick={() => {
								findBookById(b.book.ISBN)
							}}>
							<img src={b.book.cover} alt='cover-book' />
						</li>
					))}
			</ul>
			<span>Resultados: {books.length}</span>
		</div>
	)
}
