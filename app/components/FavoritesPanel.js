'use client';

export default function FavoritesPanel({ favorites, onPlay, onRemove, onClear }) {
  return (
    <section className="max-w-4xl mx-auto mt-10 p-4 bg-gray-900 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-blue-400 mb-4 flex justify-between items-center">
        ❤️ My Favorite Channels
        {favorites.length > 0 && (
          <button
            onClick={onClear}
            className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition"
            type="button"
            aria-label="Clear all favorites"
          >
            Clear All
          </button>
        )}
      </h3>

      {favorites.length === 0 ? (
        <p className="text-gray-400 text-center">You haven’t added any favorite channels yet. ❤️</p>
      ) : (
        <ul className="space-y-3 max-h-[500px] overflow-y-auto">
          {favorites.map((channel) => (
            <li
              key={channel.url}
              className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-3 rounded-md shadow-md transition"
            >
              <div
                className="flex items-center gap-4 flex-grow cursor-pointer"
                onClick={() => onPlay(channel.url)}
                title={`${channel.name} — ${channel.source}`}
              >
                {channel.logo ? (
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-600 rounded-md flex items-center justify-center text-white text-xl select-none">
                    📺
                  </div>
                )}

                <div>
                  <p className="text-blue-300 font-semibold truncate max-w-xs">{channel.name}</p>
                  <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                    <span>{channel.flag}</span> <span>{channel.source}</span>
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(channel.url);
                }}
                aria-label={`Remove ${channel.name} from favorites`}
                className="text-red-500 text-2xl hover:scale-110 transition select-none"
                type="button"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
