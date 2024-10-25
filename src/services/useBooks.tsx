import { useEffect, useState } from 'react';
import fetchBooks from './api-client';
import { Book } from '../interfaces/booktypes'; // Assurez-vous d'importer votre type Book

function useBooks(initialQuery: string) {
  const [books, setBooks] = useState<Book[]>([]); // Typage du tableau books
  const [searchTerm, setSearchTerm] = useState<string>(initialQuery); // Typage du searchTerm
  const [loading, setLoading] = useState<boolean>(false); // Typage du loading

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    async function fetchBooksData(query: string) {
      setLoading(true);
      try {
        const items = await fetchBooks(query, controller);
        if (isMounted) { // Assurez-vous que le composant est toujours monté
          setBooks(items);
        }
      } catch (error) {
        if ((error as Error)?.name !== 'AbortError') { // Assurez-vous que l'erreur est de type Error
          console.error('Failed to fetch books: ', error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    if (searchTerm) {
      fetchBooksData(searchTerm);
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [searchTerm]);

  return { books, loading, setSearchTerm };
}

export default useBooks;
