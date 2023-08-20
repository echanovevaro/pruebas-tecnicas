import React from 'react'
import { AddToListReaded, AddToListToRead } from '../components/Icons'

export default function BookDetail({ bookObj, toggleBook }) {
	const { book, readed, toRead, visible } = { ...bookObj }

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
										toggleBook({
											...bookObj,
											readed: !bookObj.readed,
											toRead: false,
											visible: false,
										})
									}}>
									<AddToListReaded />
								</button>

								<button
									className={`${bookObj.toRead ? 'checkedAtList' : ''}`}
									title={`${toRead ? 'discard ' : 'books to read'}`}
									onClick={() => {
										toggleBook({
											...bookObj,
											readed: false,
											toRead: !bookObj.toRead,
											visible: false,
										})
									}}>
									<AddToListToRead />
								</button>
							</div>
							<div className='text-det'>
								<div className='detail-title'>
									<h3>{book?.title}</h3>
								</div>
								<p>
									<b>ISBN:</b> {book?.ISBN}
								</p>
								<p>
									<b>Author:</b> <span>{book?.author?.name}</span>
								</p>
								<p>
									<span>
										<b>synopsis:</b> {book?.synopsis}
									</span>
								</p>
								<p>
									<b>Genre:</b> <span>{book?.genre}</span>
								</p>
								<p>
									<b>Pages:</b> <span>{book?.pages}</span>
								</p>
								<p>
									<b>Year:</b> <span>{book?.year}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
