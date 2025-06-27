'use client';

import { useEffect, useState } from 'react';

export default function ChannelDropdown({
  playlistUrl,
  onSelect,
  addFavorite,
  removeFavorite,
  isFavorite,
}) {
  const [channels, setChannels] = useState([]);
  const [filteredChannels, setFilteredChannels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    async function fetchChannels() {
      try {
        const res = await fetch(playlistUrl);
        const text = await res.text();
        const lines = text.split('\n');
        const parsed = [];

        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('#EXTINF')) {
            const tvgName = lines[i].match(/tvg-name="([^"]+)"/)?.[1];
            const nameFallback = lines[i].split(',')[1]?.trim();
            const name = tvgName || nameFallback || `Channel ${i}`;

            const logo = lines[i].match(/tvg-logo="([^"]+)"/)?.[1];
            const url = lines[i + 1]?.startsWith('http') ? lines[i + 1].trim() : null;

            if (url) {
              parsed.push({
                id: `${name}-${i}`,
                name,
                logo,
                url,
              });
            }
          }
        }

        setChannels(parsed);
        setFilteredChannels(parsed);
        setDisplayCount(20);
      } catch (err) {
        console.error('Failed to fetch channels:', err);
        setChannels([]);
        setFilteredChannels([]);
      }
    }

    fetchChannels();
  }, [playlistUrl]);

  useEffect(() => {
    const filtered = searchTerm.trim()
      ? channels.filter((c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : channels;
    setFilteredChannels(filtered);
    setDisplayCount(20);
  }, [searchTerm, channels]);

  const loadMore = () => {
    setDisplayCount((count) => Math.min(count + 20, filteredChannels.length));
  };

  return (
    <section className="max-w-4xl mx-auto mt-6 p-4 bg-gray-900 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">📺 Browse Channels</h3>

      <input
        type="search"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <ul className="space-y-3 max-h-[600px] overflow-y-auto">
        {filteredChannels.slice(0, displayCount).map((channel) => (
          <li
            key={channel.id}
            className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-3 rounded-md shadow-md transition"
          >
            <div
              className="flex items-center gap-4 flex-grow cursor-pointer"
              onClick={() => onSelect(channel.url)}
            >
              {channel.logo ? (
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="w-12 h-12 rounded-md object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-600 rounded-md flex items-center justify-center text-white text-xl">
                  📺
                </div>
              )}

              <div>
                <p className="text-blue-300 font-semibold truncate max-w-xs">{channel.name}</p>
                <div className="flex items-center text-xs text-red-500 gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  Live
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                isFavorite(channel.url)
                  ? removeFavorite(channel.url)
                  : addFavorite(channel);
              }}
              className="text-pink-400 text-2xl hover:scale-110 transition"
            >
              {isFavorite(channel.url) ? '❤️' : '🤍'}
            </button>
          </li>
        ))}
      </ul>

      {displayCount < filteredChannels.length && (
        <button
          onClick={loadMore}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
        >
          Load 20 More
        </button>
      )}
    </section>
  );
}
