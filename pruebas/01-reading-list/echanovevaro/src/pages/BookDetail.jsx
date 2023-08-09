import React from 'react'
import { AddToListReaded, AddToListToRead } from '../components/Icons'

export default function BookDetail({ book, bookReaded, bookToRead }) {
	console.log('book,', book)
	return (
		<>
			<div className='item-b'>
				<div className='container-det'>
					<img src={book?.cover} alt='cover-book' />
					<div className='detail-card'>
						<div className='detail-buttons'>
							<button onClick={() => bookReaded(book.ISBN)}>
								<AddToListReaded />
							</button>
							<button onClick={() => bookToRead(book.ISBN)}>
								<AddToListToRead />
							</button>
						</div>
						<div className='detail-title'>
							<h3>{book?.title}</h3>
						</div>
						<p>ISBN: {book?.ISBN}</p>
						<p>
							Autor: <span>{book?.author?.name}</span>
						</p>
						<p>
							synopsis: <span>{book?.synopsis}</span>
						</p>
						<p>
							Género: <span>{book?.genre}</span>
						</p>
						<p>
							Páginas: <span>{book?.pages}</span>
						</p>
						<p>
							Año: <span>{book?.year}</span>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
