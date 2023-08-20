import React from 'react'
import { Return } from '../components/Icons'

export default function BooksList({ findBookById, booksReaded, booksToRead }) {
	return (
		<div className='item-d'>
			{booksReaded && booksReaded.length > 0 && (
				<>
					<span>{'books that I have read'.toUpperCase()}</span>
					<div className='border-list' />
					<div className='container-list'>
						<button
							title='return to dashboard'
							onClick={() => {
								window.scrollTo(0, 0)
							}}>
							<Return />
						</button>

						<ul className='container-dash-list'>
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
					</div>
				</>
			)}
			{booksToRead && booksToRead.length > 0 && (
				<>
					<span>{'books i want to read'.toUpperCase()}</span>
					<div className='border-list' />
					<div className='container-list'>
						<button
							className='list-button'
							title='return to dashboard'
							onClick={() => {
								window.scrollTo(0, 0)
							}}>
							<Return />
						</button>
						<ul className='container-dash-list'>
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
					</div>
				</>
			)}
		</div>
	)
}
