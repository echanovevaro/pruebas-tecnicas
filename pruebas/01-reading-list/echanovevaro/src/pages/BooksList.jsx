import React from 'react'

export default function BooksList({
	findBookById,
	booksReaded,
	booksToRead,
	refProps,
}) {
	return (
		<div className='item-d' ref={refProps}>
			{booksReaded && booksReaded.length > 0 && (
				<>
					<p>{'books that I have read'.toUpperCase()}</p>
					<div className='hr' />
					<ul className='container-dash'>
						{booksReaded.map((b) => (
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
				</>
			)}
			{booksToRead && booksToRead.length > 0 && (
				<>
					<p>{'books i want to read'.toUpperCase()}</p>
					<div className='hr' />
					<ul className='container-dash'>
						{booksToRead.map((b) => (
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
				</>
			)}
		</div>
	)
}
