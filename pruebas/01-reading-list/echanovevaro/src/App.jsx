import React, { useEffect, useState } from 'react'
import { library } from '../../books.json'
import './index.css'
import BooksDashboard from './pages/BooksDashboard'
import BookDetail from './pages/BookDetail'
import Header from './pages/Header'
import BooksList from './pages/BooksList'

export default function App() {
	const [books, setBooks] = useState([])
	const [genre, setGenre] = useState('all books')
	const [search, setSearch] = useState(false)
	const [loading, setLoading] = useState(true)
	const [book, setBook] = useState()

	const [pages, setPages] = useState(1400)
	console.log('pages', pages)

	const handlePageChange = (num) => {
		console.log('Entra page', num)
		setPages(num)
	}

	const handleGenreSelect = (value) => {
		setGenre(value)
	}

	// console.log('filteredBooks', filteredBooks)

	// function toggleReadedBook(id) {
	// 	let readedByIdFunc = findReadedById(id)

	// 	if (readedByIdFunc) {
	// 		setBooks((prev) => [...prev, readedByIdFunc])
	// 		setReaded((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
	// 		setBook(undefined)
	// 	} else {
	// 		setBooks((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
	// 		setToRead((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
	// 		setReaded((prev) => [...prev, findById(id)])
	// 		setBook(undefined)
	// 	}
	// }

	// function toggleToReadBook(id) {
	// 	let toReadByIdFunc = findToReadById(id)
	// 	if (toReadByIdFunc) {
	// 		setBooks((prev) => [...prev, toReadByIdFunc])
	// 		setToRead((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
	// 		setBook(undefined)
	// 	} else {
	// 		setBooks((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
	// 		setReaded((prev) => prev.filter((b) => b.ISBN !== book.ISBN))
	// 		setToRead((prev) => [...prev, findById(id)])
	// 		setBook(undefined)
	// 	}
	// }

	// function fiLterBooksByGenre(selectedValue) {
	// 	setBooks((prev) =>)
	// }

	// function fiLterBooksByPages(number) {
	// 	setBooks(books.filter((b) => b.book.pages number))
	// }

	function toggleBook(book) {
		let nextBooks = books.filter((b) => b.book.ISBN !== book.book.ISBN)
		setBooks([...nextBooks, book])
		setBook(undefined)
	}

	console.log('books', books)
	// const createCountFromBooks = (books) => {
	// 	const count = {}
	// 	books.forEach(({ book }) => {
	// 		const { genre } = book
	// 		count[genre] = count[genre] ? count[genre] + 1 : 1
	// 	})
	// 	return count
	// }

	// function findReadedById(id) {
	// 	let readedById = readed.find((b) => b.ISBN == id)
	// 	console.log('readedById', readedById)
	// 	if (readedById) {
	// 		setBook(readedById)
	// 		setCheckedReaded(true)
	// 		setCheckedToRead(false)
	// 		return readedById
	// 	} else {
	// 		setCheckedReaded(false)
	// 	}
	// }
	// function findToReadById(id) {
	// 	let toReadById = toRead.find((b) => b.ISBN == id)
	// 	if (toReadById) {
	// 		setBook(toReadById)
	// 		setCheckedToRead(true)
	// 		setCheckedReaded(false)
	// 		return toReadById
	// 	} else {
	// 		setCheckedToRead(false)
	// 	}

	function findBookById(id) {
		let bookById = books.find((b) => b.book.ISBN == id)
		if (bookById) {
			setBook(bookById)
		}
	}

	// function findById(id) {
	// 	let findInAllBooksById = [...readed, ...toRead, ...books].find(
	// 		(b) => b.ISBN == id,
	// 	)
	// 	if (findInAllBooksById) {
	// 		return findInAllBooksById
	// 	}
	// }
	function searchToggleSelect() {
		console.log('click')
		setSearch((prev) => !prev)
	}

	async function getBooks() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(library)
			}, 500)
		})
	}

	useEffect(() => {
		const startBooks = async () => {
			setLoading(true)
			const data = await getBooks()
			setLoading(false)
			const booksMap = data?.map((b) => ({
				book: b.book,
				readed: false,
				toRead: false,
			}))
			setBooks(booksMap)
		}
		startBooks()
	}, [])

	return (
		<div>
			{!loading && (
				<div className='container'>
					<Header
						genre={genre}
						pages={pages}
						handlePageChange={handlePageChange}
						handleGenreSelect={handleGenreSelect}
						onSearch={searchToggleSelect}
						search={search}
					/>

					<BooksDashboard
						books={
							genre === 'all books'
								? books.filter((b) => b.book.pages <= pages)
								: books
										.filter((b) => b.book.genre === genre)
										.filter((b) => b.book.pages <= pages)
						}
						findBookById={findBookById}
					/>

					{book && <BookDetail bookObj={book} toggleBook={toggleBook} />}
					{books && (
						<BooksList
							findBookById={findBookById}
							booksReaded={books.filter((b) => b.readed)}
							booksToRead={books.filter((b) => b.toRead)}
						/>
					)}
				</div>
			)}
		</div>
	)
}
