import React, { useState } from "react";

const SpeechNarrator = ({ text = "speech synthesis react" }) => {
  const splitText = (text, from, to) => [
    text.slice(0, from),
    text.slice(from, to),
    text.slice(to),
  ];

  const [disabled, setDisabled] = useState(false);
  const [highlightSection, setHighlightSection] = useState({
    from: 0,
    to: 0,
  });

  const synth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.addEventListener("start", () => setDisabled(true));
  utterance.addEventListener("end", () => setDisabled(false));
  utterance.addEventListener("boundary", ({ charIndex, charLength }) => {
    setHighlightSection({ from: charIndex, to: charIndex + charLength });
  });

  const handlePlay = () => {
    if (!synth) {
      console.error("no tts");
      return;
    }

    synth.speak(utterance);
    synth.resume();
  };

  const handlePause = () => {
    synth.pause();
  };
  const [listen, setListen] = useState(false);

  const handleListen = () => {
    setListen(true);
    setPause(false);
  };
  const [pause, setPause] = useState(true);

  const pauseHandler = () => {
    setPause(true);
    setListen(false);
  };

  const HighlightedText = ({ text, from, to }) => {
    const [start, highlight, finish] = splitText(text, from, to);

    return (
      <p>
        {start}
        <span style={{ backgroundColor: "#00ff51ab" }}>{highlight}</span>
        {finish}
      </p>
    );
  };

  return (
    <div className="py-16 relative">
      <div className="mx-auto  w-[100%]  grid grid-cols-12 ">
        <div className="col-span-8 my-6 w-[90%]">
          <div className="my-4 ">
            {listen && (
              <button
                style={{
                  display: "flex",
                  width: "80px",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "green",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  handlePause();
                  pauseHandler();
                }}
                className="border-2 bg-black border-black hover:bg-slate-700 rounded-full w-28 h-10 flex items-center  space-x-1 py-3 pl-3 pr-2 text-white"
              >
                {" "}
                <span className="font-semibold ">Paush</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            )}
            {pause && (
              <button
                style={{
                  display: "flex",
                  width: "80px",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "green",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  handleListen();
                  handlePlay();
                }}
                className="border-2 border-black bg-black hover:bg-slate-700 rounded-full w-28 h-10 flex items-center  px-3 space-x-2 py-3 text-white"
              >
                {" "}
                <span className="font-semibold ">Listen</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </button>
            )}
          </div>

          <HighlightedText text={text} {...highlightSection} />
        </div>
      </div>
    </div>
  );
};

export default SpeechNarrator;
