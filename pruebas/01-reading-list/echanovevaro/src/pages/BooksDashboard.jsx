import React from 'react'

export default function BooksDashboard({ books, findBookById }) {
	console.log('books db', books)

	return (
		<div className='item-a'>
			<ul className='container-dash'>
				{books.map((book) => (
					<li
						key={book.ISBN}
						className='selected-book'
						onClick={() => {
							findBookById(book.ISBN)
						}}>
						<img src={book.cover} alt='cover-book' />
					</li>
				))}
			</ul>
		</div>
	)
}
