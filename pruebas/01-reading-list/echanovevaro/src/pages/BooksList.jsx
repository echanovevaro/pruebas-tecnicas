<<<<<<< HEAD
import React from 'react'

export default function BooksList(props) {
	return (
		<div className='item-d'>
			{props.readed && props.readed.length > 0 && (
				<>
					<p>books that I have read</p>
					<div className='hr' />
					<ul className='container-dash'>
						{props.readed.map((book) => (
							<li
								key={book.ISBN}
								className='selected-book'
								onClick={() => {
									props.findBookById(book.ISBN)
								}}>
								<img src={book.cover} alt='cover-book' />
							</li>
						))}
					</ul>
				</>
			)}
			{props.toRead && props.toRead.length > 0 && (
				<>
					<p>books i want to read</p>
					<div className='hr' />
					<ul className='container-dash'>
						{props.toRead.map((book) => (
							<li
								key={book.ISBN}
								className='selected-book'
								onClick={() => {
									props.findBookById(book.ISBN)
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
=======
import React from 'react'

export default function BooksList(props) {
	return (
		<div className='item-d'>
			{props.readed && props.readed.length > 0 && (
				<>
					<p>books that I have read</p>
					<div className='hr' />
					<ul className='container-dash'>
						{props.readed.map((book) => (
							<li
								key={book.ISBN}
								className='selected-book'
								onClick={() => {
									props.findBookById(book.ISBN)
								}}>
								<img src={book.cover} alt='cover-book' />
							</li>
						))}
					</ul>
				</>
			)}
			{props.toRead && props.toRead.length > 0 && (
				<>
					<p>books i want to read</p>
					<div className='hr' />
					<ul className='container-dash'>
						{props.toRead.map((book) => (
							<li
								key={book.ISBN}
								className='selected-book'
								onClick={() => {
									props.findBookById(book.ISBN)
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
>>>>>>> af77d5ecb7900ebd365ccfefc7e6ff994b10751b
