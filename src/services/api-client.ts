// src/services/api-client.ts

import { FetchError } from '../interfaces/booktypes';

const BASE_URL = 'https://www.googleapis.com/books/v1';

async function fetchBooks(
  query: string,
  controller: AbortController,
): Promise<any[]> {
  try {
    const response = await fetch(`${BASE_URL}/volumes?q=${query}`, {
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }
    const data = await response.json();
    return data.items || []; // Assurez-vous de toujours retourner un tableau
  } catch (error) {
    const fetchError = error as FetchError; // Utilisez une assertion de type
    if (fetchError?.name !== 'AbortError') {
      console.error('Error fetching books:', fetchError.message);
      throw fetchError; // Lancez l'erreur pour la gestion ultérieure
    } else {
      console.log('Fetch aborted');
    }
    return []; // Renvoyez un tableau vide en cas d'erreur
  }
}

export default fetchBooks;
