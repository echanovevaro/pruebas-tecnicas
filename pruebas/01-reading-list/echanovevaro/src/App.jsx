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
		setPages(num)
	}

	const handleGenreSelect = (value) => {
		setGenre(value)
	}

	function toggleBook(book) {
		let nextBooks = books.filter((b) => b.book.ISBN !== book.book.ISBN)
		setBooks([...nextBooks, book])
		setBook(undefined)
	}

	console.log('books', books)

	function findBookById(id) {
		let bookById = books.find((b) => b.book.ISBN == id)
		if (bookById) {
			setBook(bookById)
		}
	}

	function searchToggleSelect() {
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
						books={books}
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
						pages={pages}
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
