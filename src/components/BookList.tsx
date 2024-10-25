import { BookListProps } from '../interfaces/booktypes';
import BookCard from './BookCard';

const BookList: React.FC<BookListProps> = ({ books, onSeeMore }) => {
  return (
    <div className="row">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onSeeMore={onSeeMore} />
      ))}
    </div>
  );
};

export default BookList;
