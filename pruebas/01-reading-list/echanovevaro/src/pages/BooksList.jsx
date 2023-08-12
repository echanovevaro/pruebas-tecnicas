import React from 'react'

export default function BooksList(props) {
	return (
		<div className='item-d'>
			{props.readed && props.readed.length > 0 && (
				<>
					<p>{'books that I have read'.toUpperCase()}</p>
					<div className='hr' />
					<ul className='container-dash'>
						{props.readed.map((book) => (
							<li
								key={book.ISBN}
								className='selected-book'
								onClick={() => {
									props.findReadedById(book.ISBN)
								}}>
								<img src={book.cover} alt='cover-book' />
							</li>
						))}
					</ul>
				</>
			)}
			{props.toRead && props.toRead.length > 0 && (
				<>
					<p>{'books i want to read'.toUpperCase()}</p>
					<div className='hr' />
					<ul className='container-dash'>
						{props.toRead.map((book) => (
							<li
								key={book.ISBN}
								className='selected-book'
								onClick={() => {
									props.findToReadById(book.ISBN)
								}}>
								<img src={book.cover} alt='cover-book' />
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
