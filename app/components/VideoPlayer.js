'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    if (!src) return;

    const video = videoRef.current;
    setShowPlayButton(false);

    // Cleanup previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // Reset video element
    video.pause();
    video.removeAttribute('src');
    video.load();

    const playNative = () => {
      video.src = src;
      video.play().catch(() => setShowPlayButton(true));
    };

    // Use HLS.js for .m3u8 files
    if (Hls.isSupported() && src.toLowerCase().includes('.m3u8')) {
      const hls = new Hls({
        maxBufferLength: 60,
        maxMaxBufferLength: 240,
        maxBufferSize: 120 * 1000 * 1000, // 120MB
        lowLatencyMode: true,
        backBufferLength: 90,
        fragLoadingTimeOut: 30000,
        manifestLoadingTimeOut: 30000,
        maxRetries: 5,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        video.play().catch(() => setShowPlayButton(true));
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              playNative(); // fallback to native
              break;
          }
        }
      });

      hlsRef.current = hls;
    } else {
      playNative();
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src]);

  const handlePlayClick = () => {
    const video = videoRef.current;
    video
      .play()
      .then(() => setShowPlayButton(false))
      .catch(() => setShowPlayButton(true));
  };

  return (
    <div className="w-full aspect-video max-w-5xl mx-auto bg-black rounded-lg overflow-hidden shadow-lg relative">
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-contain bg-black"
      >
        Your browser does not support the video tag.
      </video>

      {showPlayButton && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white z-10">
          <p className="mb-4 text-center">Autoplay blocked. Please click play to start the video.</p>
          <button
            onClick={handlePlayClick}
            className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            ▶ Play
          </button>
        </div>
      )}
    </div>
  );
}
