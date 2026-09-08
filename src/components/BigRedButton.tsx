import { useEffect, useRef, useState } from "react";
import "./BigRedButton.css";

const VIDEO_ID = "dQw4w9WgXcQ";
const EMBED_SRC = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=0&mute=1&playsinline=1&rel=0&controls=0`;

// The embedded player's postMessage listener isn't guaranteed to be ready
// the instant the iframe's `load` event fires, so a command sent right at
// click time can be silently dropped. Resending a couple of times over the
// next second covers that startup window without needing the full YouTube
// IFrame API handshake.
const RETRY_DELAYS_MS = [0, 250, 700];

function postToPlayer(iframe: HTMLIFrameElement | null, func: string) {
  iframe?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
}

export function BigRedButton() {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const retryTimeouts = useRef<number[]>([]);

  const clearPendingRetries = () => {
    retryTimeouts.current.forEach((id) => window.clearTimeout(id));
    retryTimeouts.current = [];
  };

  useEffect(() => clearPendingRetries, []);

  const handlePress = () => {
    clearPendingRetries();
    retryTimeouts.current = RETRY_DELAYS_MS.map((delay) =>
      window.setTimeout(() => {
        postToPlayer(iframeRef.current, "unMute");
        postToPlayer(iframeRef.current, "playVideo");
      }, delay),
    );
    setPlaying(true);
  };

  const handleStop = () => {
    clearPendingRetries();
    postToPlayer(iframeRef.current, "pauseVideo");
    postToPlayer(iframeRef.current, "mute");
    setPlaying(false);
  };

  return (
    <div className="red-button-container">
      <div className={`red-button-circle ${playing ? "is-playing" : ""}`}>
        <div className="red-button-clip">
          <iframe
            ref={iframeRef}
            className="red-button-video"
            src={EMBED_SRC}
            title="A surprise"
            allow="autoplay; encrypted-media"
          />
          <button
            type="button"
            className={`red-button-face ${playing ? "hidden" : ""}`}
            onClick={handlePress}
            aria-label="Press the big red button"
          >
            <span className="red-button-sheen" />
          </button>
        </div>
        {playing && (
          <button type="button" className="red-button-stop" onClick={handleStop} aria-label="Stop">
            ✕
          </button>
        )}
      </div>
      <p className="red-button-caption">{playing ? "You knew this was coming." : "DO NOT PRESS"}</p>
    </div>
  );
}
