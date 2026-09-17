import { useRef, useState } from "react";

export default function TalkingAvatar() {
  const [open, setOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);

  const currentChunk = useRef(0);
  const chunksRef = useRef([]);
  const stoppedRef = useRef(false);
  const pausedRef = useRef(false);

  const message = `
Hi! I'm Sakhib's AI assistant. Welcome to his portfolio!

Mohammedsakhib P Dharwad is an Information Science and Technology undergraduate at Presidency University, Bengaluru, passionate about full-stack development, software engineering, and AI.

His technical skills include Python, Java, C, SQL, JavaScript, React.js, Tailwind CSS, FastAPI, Flask, REST APIs, JWT, PostgreSQL, MySQL, and AI technologies such as Hugging Face, OpenCV, computer vision, and deep learning.

His flagship project is BookMyShift, a full-stack shift management platform built with React, FastAPI, Python, and PostgreSQL. It includes authentication, shift management, applications, payments, chat, notifications, ratings, and reviews.

Sakhib completed a Full Stack Web Development internship with Unified Mentor and has earned certifications in Oracle Cloud Infrastructure, Generative AI, AI Foundations, and AI Cloud Database Services.

Feel free to explore his portfolio to learn more about his projects, skills, and certifications!
`;

  // Split the speech into smaller pieces.
  const createChunks = () => {
    return message
      .replace(/\s+/g, " ")
      .trim()
      .match(/[^.!?]+[.!?]+/g) || [message];
  };

  // Speak the current chunk
  const speakChunk = (index) => {
    if (stoppedRef.current) return;

    const chunks = chunksRef.current;

    if (index >= chunks.length) {
      setSpeaking(false);
      setPaused(false);
      currentChunk.current = 0;
      return;
    }

    currentChunk.current = index;

    const utterance = new SpeechSynthesisUtterance(chunks[index]);

    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      if (!stoppedRef.current && !pausedRef.current) {
        setSpeaking(true);
      }
    };

    utterance.onend = () => {
      // If we paused manually, don't move to the next sentence.
      if (pausedRef.current || stoppedRef.current) {
        return;
      }

      currentChunk.current = index + 1;
      speakChunk(index + 1);
    };

    utterance.onerror = (event) => {
      // Ignore errors caused by cancel/pause.
      if (stoppedRef.current || pausedRef.current) {
        return;
      }

      console.log("Speech error:", event.error);
      setSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  // TALK
  const speak = () => {
    if (!("speechSynthesis" in window)) {
      alert("Your browser does not support text to speech.");
      return;
    }

    window.speechSynthesis.cancel();

    chunksRef.current = createChunks();
    currentChunk.current = 0;

    stoppedRef.current = false;
    pausedRef.current = false;

    setSpeaking(true);
    setPaused(false);

    // Small delay makes Chrome speech synthesis more reliable.
    setTimeout(() => {
      speakChunk(0);
    }, 100);
  };

  // PAUSE
  const pauseSpeech = () => {
    if (!speaking || paused) return;

    pausedRef.current = true;

    // Cancel the current utterance.
    // We will replay the current sentence when Resume is pressed.
    window.speechSynthesis.cancel();

    setPaused(true);
    setSpeaking(true);
  };

  // RESUME
  const resumeSpeech = () => {
    if (!paused) return;

    pausedRef.current = false;
    stoppedRef.current = false;

    setPaused(false);
    setSpeaking(true);

    // Resume the current sentence.
    setTimeout(() => {
      speakChunk(currentChunk.current);
    }, 100);
  };

  // STOP
  const stopSpeech = () => {
    stoppedRef.current = true;
    pausedRef.current = false;

    window.speechSynthesis.cancel();

    currentChunk.current = 0;

    setSpeaking(false);
    setPaused(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">

      {/* Speech Box */}
      {open && (
        <div className="mb-3 w-80 rounded-2xl bg-black/90 p-4 text-white shadow-2xl backdrop-blur-md">

          {/* Message */}
          <p className="max-h-64 overflow-y-auto text-sm leading-relaxed">
            {message}
          </p>

          {/* Status */}
          <div className="mt-3 text-xs text-gray-400">
            {speaking && !paused && "🔊 Speaking..."}
            {speaking && paused && "⏸ Paused"}
            {!speaking && "Ready to talk"}
          </div>

          {/* Controls */}
          <div className="mt-4 flex flex-wrap gap-2">

            {/* TALK */}
            <button
              onClick={speak}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              🔊 Talk
            </button>

            {/* PAUSE */}
            <button
              onClick={pauseSpeech}
              disabled={!speaking || paused}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                !speaking || paused
                  ? "cursor-not-allowed bg-gray-600 text-gray-400"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              ⏸ Pause
            </button>

            {/* RESUME */}
            <button
              onClick={resumeSpeech}
              disabled={!paused}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                !paused
                  ? "cursor-not-allowed bg-gray-600 text-gray-400"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              ▶ Resume
            </button>

            {/* STOP */}
            <button
              onClick={stopSpeech}
              disabled={!speaking}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                !speaking
                  ? "cursor-not-allowed bg-gray-600 text-gray-400"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              ⏹ Stop
            </button>

          </div>
        </div>
      )}

      {/* Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gray-900 text-3xl shadow-2xl transition-all duration-300 hover:scale-110 ${
          speaking && !paused ? "animate-pulse" : ""
        }`}
        aria-label="Open talking avatar"
      >
        👨‍💻
      </button>

    </div>
  );
}