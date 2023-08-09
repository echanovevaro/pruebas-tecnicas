import React, { useEffect, useState } from 'react'
import { library } from '../../../books.json'
import './index.css'
import BooksDashboard from './pages/BooksDashboard'
import BookDetail from './pages/BookDetail'
import Header from './pages/Header'
import BooksList from './pages/BooksList'

export default function App() {
	const [books, setBooks] = useState([])
	const [loadding, setLoadding] = useState(true)
	const [book, setBook] = useState()
	const [readed, setReaded] = useState([])
	const [toRead, setToRead] = useState([])

	function addBookToListToRead(id) {
		if (!toRead.some((b) => b.ISBN === id)) {
			let bookById = findBookById(id)
			console.log('bookById', bookById)
			if (bookById) {
				setToRead((prev) => [...prev, bookById])
				setBooks((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
				setReaded((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
				setBook(undefined)
			}
		}
	}
	function addBookToListReaded(id) {
		if (!readed.some((b) => b.ISBN === id)) {
			let bookById = findBookById(id)

			if (bookById) {
				setReaded((prev) => [...prev, bookById])
				setBooks((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
				setToRead((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
				setBook(undefined)
			}
		}
	}

	function findBookById(id) {
		console.log('id', id)
		let bookById = [...books, ...readed, ...toRead].find((b) => b.ISBN == id)
		console.log(bookById)
		setBook(bookById)
		return bookById
	}

	async function gettBooks() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(library)
			}, 500)
		})
	}

	useEffect(() => {
		const startBooks = async () => {
			setLoadding(true)
			const data = await gettBooks()
			setLoadding(false)
			const booksMap = data?.map((b) => ({ ...b.book }))
			setBooks(booksMap)
		}
		startBooks()
	}, [])
	console.log('book', book)
	return (
<<<<<<< HEAD
		<>
			{!loadding && (
				<div className='container'>
					<Header />
					<BooksDashboard books={books} findBookById={findBookById} />
					{book && (
						<BookDetail
							book={book}
							bookReaded={addBookToListReaded}
							bookToRead={addBookToListToRead}
						/>
					)}
					{(readed || toRead) && (
						<BooksList readed={readed} toRead={toRead} findBookById={findBookById} />
					)}
				</div>
			)}
		</>
=======
		<div className='container'>
			<Header />
			<BooksDashboard books={books} findBookById={findBookById} />
			{book && (
				<BookDetail
					book={book}
					bookReaded={addBookToListReaded}
					bookToRead={addBookToListToRead}
				/>
			)}
			{(readed || toRead) && (
				<BooksList readed={readed} toRead={toRead} findBookById={findBookById} />
			)}
		</div>
>>>>>>> af77d5ecb7900ebd365ccfefc7e6ff994b10751b
	)
}
