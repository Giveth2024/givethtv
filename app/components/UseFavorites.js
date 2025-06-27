import { useState, useEffect } from 'react';

export default function UseFavorites() {
  // favorites: array of full channel objects { url, name, logo, ... }
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('favorites');
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  // Save favorites to localStorage on every change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  // Add favorite if not present
  const addFavorite = (channel) => {
    setFavorites((prev) => {
      if (prev.find((ch) => ch.url === channel.url)) return prev;
      return [...prev, channel];
    });
  };

  // Remove favorite by URL
  const removeFavorite = (url) => {
    setFavorites((prev) => prev.filter((ch) => ch.url !== url));
  };

  // Clear all favorites
  const clearFavorites = () => {
    setFavorites([]);
  };

  // Check if channel is favorite
  const isFavorite = (url) => favorites.some((ch) => ch.url === url);

  return { favorites, addFavorite, removeFavorite, clearFavorites, isFavorite };
}
