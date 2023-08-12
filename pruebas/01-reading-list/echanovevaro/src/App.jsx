import React, { useEffect, useState } from 'react'
import { library } from '../../books.json'
import './index.css'
import BooksDashboard from './pages/BooksDashboard'
import BookDetail from './pages/BookDetail'
import Header from './pages/Header'
import BooksList from './pages/BooksList'

export default function App() {
	const [books, setBooks] = useState([])
	const [filteredBooks, setFilteredBooks] = useState([])
	const [loadding, setLoadding] = useState(true)
	const [book, setBook] = useState()
	const [readed, setReaded] = useState([])
	const [toRead, setToRead] = useState([])
	const [checkedRaded, setCheckedReaded] = useState(false)
	const [checkedToRead, setCheckedToRead] = useState(false)

	function toogleReadedBook(id) {
		let readedByIdFunc = findReadedById(id)

		if (readedByIdFunc) {
			setBooks((prev) => [...prev, readedByIdFunc])
			setReaded((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
			setBook(undefined)
		} else {
			setBooks((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
			setToRead((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
			setReaded((prev) => [...prev, findById(id)])
			setBook(undefined)
		}
	}

	function toogleToReadBook(id) {
		let toReadByIdFunc = findToReadById(id)
		if (toReadByIdFunc) {
			setBooks((prev) => [...prev, toReadByIdFunc])
			setToRead((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
			setBook(undefined)
		} else {
			setBooks((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
			setReaded((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
			setToRead((prev) => [...prev, findById(id)])
			setBook(undefined)
		}
	}

	function fiLterBooksByGenre(selectedValue) {
		setFilteredBooks(books.filter((b) => b.genre == selectedValue))
	}
	function findReadedById(id) {
		let readedById = readed.find((b) => b.ISBN == id)
		console.log('readedById', readedById)
		if (readedById) {
			setBook(readedById)
			setCheckedReaded(true)
			setCheckedToRead(false)
			return readedById
		} else {
			setCheckedReaded(false)
		}
	}
	function findToReadById(id) {
		let toReadById = toRead.find((b) => b.ISBN == id)
		if (toReadById) {
			setBook(toReadById)
			setCheckedToRead(true)
			setCheckedReaded(false)
			return toReadById
		} else {
			setCheckedToRead(false)
		}
	}
	function findBookById(id) {
		let bookById = books.find((b) => b.ISBN == id)
		if (bookById) {
			setBook(bookById)
			setCheckedReaded(false)
			setCheckedToRead(false)
			return bookById
		}
	}

	function findById(id) {
		let findInAllBooksById = [...readed, ...toRead, ...books].find(
			(b) => b.ISBN == id,
		)
		if (findInAllBooksById) {
			return findInAllBooksById
		}
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

	return (
		<>
			{!loadding && (
				<div className='container'>
					<Header fiLterBooksByGenre={fiLterBooksByGenre} />
					{filteredBooks.length === 0 ? (
						<BooksDashboard books={books} findBookById={findBookById} />
					) : (
						<BooksDashboard books={filteredBooks} findBookById={findBookById} />
					)}

					{book && (
						<BookDetail
							book={book}
							toogleToReadBook={toogleToReadBook}
							toogleReadedBook={toogleReadedBook}
							checkedReaded={checkedRaded}
							checkedToRead={checkedToRead}
						/>
					)}
					{(readed || toRead) && (
						<BooksList
							readed={readed}
							toRead={toRead}
							findToReadById={findToReadById}
							findReadedById={findReadedById}
						/>
					)}
				</div>
			)}
		</>
	)
}
