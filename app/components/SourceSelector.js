'use client';

import { useState } from 'react';

const sources = [
  { code: 'ug', name: 'Uganda', url: 'https://iptv-org.github.io/iptv/countries/ug.m3u', flag: '🇺🇬' },
  { code: 'us', name: 'United States', url: 'https://iptv-org.github.io/iptv/countries/us.m3u', flag: '🇺🇸' },
  { code: 'uk', name: 'United Kingdom', url: 'https://iptv-org.github.io/iptv/countries/uk.m3u', flag: '🇬🇧' },
];

export default function SourceSelector({ onSelect, selectedCode }) {
  return (
    <div className="text-center my-6">
      <h2 className="text-2xl text-white font-semibold mb-4">📡 Channel Sources</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {sources.map((src) => (
          <button
            key={src.code}
            onClick={() => onSelect(src)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition 
              ${selectedCode === src.code ? 'bg-blue-600 text-white' : 'bg-gray-800 text-blue-300'} hover:bg-blue-700`}
          >
            <span className="text-xl">{src.flag}</span>
            <span>{src.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
