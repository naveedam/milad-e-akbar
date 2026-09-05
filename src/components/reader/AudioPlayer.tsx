"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  onTimeUpdate?: (time: number) => void;
}

export default function AudioPlayer({ src, onTimeUpdate }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      setCurrent(audio.currentTime);
      onTimeUpdate?.(audio.currentTime);
    };

    const loaded = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", loaded);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", loaded);
    };
  }, [onTimeUpdate]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrent(value);
  };

  const format = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div className="mt-8 rounded-2xl bg-[#0F5132] p-4 text-white shadow-lg">
      <audio ref={audioRef} src={src} />

      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-2xl text-[#0F5132]"
        >
          {playing ? "❚❚" : "▶"}
        </button>

        <div className="flex-1">
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={current}
            onChange={(e) => seek(Number(e.target.value))}
            className="w-full accent-[#D4AF37]"
          />

          <div className="mt-1 flex justify-between text-xs text-emerald-100">
            <span>{format(current)}</span>
            <span>{format(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}