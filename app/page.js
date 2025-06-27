'use client';

import { useState, useEffect } from 'react';
import SourceSelector from './components/SourceSelector';
import ChannelDropdown from './components/ChannelDropdown';
import VideoPlayer from './components/VideoPlayer';
import FavoritesPanel from './components/FavoritesPanel';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');

  const [source, setSource] = useState({
    code: 'ug',
    name: 'Uganda',
    url: 'https://iptv-org.github.io/iptv/countries/ug.m3u',
    flag: '🇺🇬',
  });

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

  const handleSourceSelect = (newSource) => {
    setSource(newSource);
    // Do not reset videoUrl – keep current channel playing
  };

  const handleChannelSelect = (channelUrl) => {
    setVideoUrl(channelUrl);
  };

  const addFavorite = (channel) => {
    if (!favorites.find((fav) => fav.url === channel.url)) {
      const updated = [...favorites, channel];
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    }
  };

  const removeFavorite = (url) => {
    const updated = favorites.filter((fav) => fav.url !== url);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  const isFavorite = (url) => favorites.some((fav) => fav.url === url);

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      {/* Video Player */}
      {videoUrl ? (
        <div className="w-full max-w-5xl mb-8">
          <VideoPlayer src={videoUrl} />
        </div>
      ) : (
        <div className="w-full max-w-5xl mb-8 p-6 bg-gray-900 rounded-lg text-center text-blue-400">
          Select a channel to start streaming.
        </div>
      )}

      {/* Favorites Section */}
      <FavoritesPanel
        favorites={favorites}
        onPlay={handleChannelSelect}
        onRemove={removeFavorite}
        onClear={clearFavorites}
      />
      
      {/* Source Selector */}
      <SourceSelector onSelect={handleSourceSelect} selectedCode={source.code} />

      {/* Channel List */}
      <ChannelDropdown
        playlistUrl={source.url}
        onSelect={handleChannelSelect}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        isFavorite={isFavorite}
      />

    </main>
  );
}
