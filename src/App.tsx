import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Book, VolumeInfo } from './interfaces/booktypes';
import useBooks from './services/useBooks';

function App() {
  const [selectedBook, setSelectedBook] = useState<VolumeInfo | null>(null);
  const { books, loading, setSearchTerm } = useBooks('fiction');

  function handleSeeMore(book: Book) {
    setSelectedBook(book.volumeInfo);
  }
  function handleCloeModal() {
    setSelectedBook(null);
  }

  function handleSearch(query: string) {
    setSearchTerm(query);
  }

  return (
    <>
      <NavBar onSearch={handleSearch} />
      {loading ? (
        <p className="placeholder-glow display-3 text-secondary">
          <span className="placeholder col-12">Loading</span>
        </p>
      ) : (
        <BookList books={books} onSeeMore={handleSeeMore}></BookList>
      )}

      <Footer />
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={handleCloeModal}></BookDetail>
      )}
    </>
  );
}

export default App;
