import React from 'react'
import { AddToListReaded, AddToListToRead } from '../components/Icons'

export default function BookDetail({ bookObj, toggleBook, scrollCallbackEnd }) {
	const { book, readed, toRead } = { ...bookObj }

	return (
		<>
			<div className='item-a'>
				<div className='container-det'>
					<div className='detail-card'>
						<div className='img-det'>
							<img src={book?.cover} alt='cover-book' />
						</div>
						<div className='info-det'>
							<div className='detail-buttons'>
								<button
									className={`${bookObj.readed ? 'checkedAtList' : ''} `}
									title={`${readed ? 'discard ' : 'books readed'}`}
									onClick={() => {
										toggleBook({ ...bookObj, readed: !bookObj.readed, toRead: false })
									}}>
									<AddToListReaded />
								</button>

								<button
									className={`${bookObj.toRead ? 'checkedAtList' : ''}`}
									title={`${toRead ? 'discard ' : 'books to read'}`}
									onClick={() => {
										toggleBook({ ...bookObj, readed: false, toRead: !bookObj.toRead })
									}}>
									<AddToListToRead />
								</button>
							</div>
							<div className='text-det'>
								<div className='detail-title'>
									<h3>{book?.title}</h3>
								</div>
								<p>ISBN: {book?.ISBN}</p>
								<p>
									Author: <span>{book?.author?.name}</span>
								</p>
								<p>
									<span>synopsis: {book?.synopsis}</span>
								</p>
								<p>
									Genre: <span>{book?.genre}</span>
								</p>
								<p>
									Pages: <span>{book?.pages}</span>
								</p>
								<p>
									Year: <span>{book?.year}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
