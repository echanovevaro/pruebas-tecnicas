import React, { useEffect, useState, useRef } from 'react'
import { library } from '../../books.json'
import './index.css'
import BooksDashboard from './pages/BooksDashboard'
import BookDetail from './pages/BookDetail'
import Header from './pages/Header'
import BooksList from './pages/BooksList'

export default function App() {
	const [books, setBooks] = useState([])
	const [genre, setGenre] = useState('all books')
	const [loading, setLoading] = useState(true)
	const [book, setBook] = useState()
	const [searchInput, setSearchInput] = useState('')
	const [pages, setPages] = useState(1400)
	const endRef = useRef()

	useEffect(() => {
		const readed = books.some((b) => b.readed)
		const toRead = books.some((b) => b.toRead)
		if (readed || toRead) {
			endRef.current?.scrollIntoView({
				block: 'end',
				behavior: 'smooth',
			})
		} else {
			window.scrollTo(0, 0)
		}
	}, [toggleBook])
	// console.log('searchInput', searchInput)

	const getGenres = () => {
		return [...new Set(books.map((b) => b.book.genre))]
	}

	const handleSearchValeChange = (e) => {
		const { value } = e.target
		e.preventDefault()
		setSearchInput(value)
	}

	const handlePageChange = (num) => {
		setPages(num)
	}

	const handleGenreSelect = (e) => {
		const { value } = e.target
		e.preventDefault()
		setGenre(value)
	}

	const applyFilters = () => {
		let filtered = [...books]
		if (searchInput && searchInput.length > 2) {
			filtered = filtered.filter((b) =>
				b.book.title.toLowerCase().includes(searchInput.toLowerCase()),
			)
		}
		if (genre !== 'all books') {
			filtered = filtered.filter((b) => b.book.genre == genre)
		}
		if (pages <= 1400) {
			filtered = filtered.filter((b) => b.book.pages <= pages)
		}
		return filtered
	}

	function toggleBook(book) {
		let nextBooks = books.filter((b) => b.book.ISBN !== book.book.ISBN)
		setBooks([...nextBooks, book])
		setBook(undefined)
	}

	function findBookById(id) {
		let bookById = books.find((b) => b.book.ISBN == id)
		if (bookById) {
			setBook(bookById)
		}
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
						searchInput={searchInput}
						handleSearchValeChange={handleSearchValeChange}
						genres={getGenres()}
					/>
					<BooksDashboard
						books={applyFilters()}
						findBookById={findBookById}
						pages={pages}
					/>
					{book && <BookDetail bookObj={book} toggleBook={toggleBook} />}
					{books && (
						<BooksList
							findBookById={findBookById}
							booksReaded={books.filter((b) => b.readed)}
							booksToRead={books.filter((b) => b.toRead)}
							refProps={endRef}
						/>
					)}
				</div>
			)}
		</div>
	)
}
