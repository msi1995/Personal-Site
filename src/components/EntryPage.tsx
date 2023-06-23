import { useState } from "react";

interface EntryPageProps {
  setEntryPageActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EntryPage = ({ setEntryPageActive }: EntryPageProps) => {
  const entryAudio = new Audio("/entry.mp3");

  const doEntryThings = async () => {
    await entryAudio.play();
    await new Promise((resolve) => setTimeout(resolve, 50));
    setEntryPageActive(false);
  };

  return (
    <div id="bg-container" className="anim-bg">
      <div className="entry-container">
        <span className="enter-text noselect" onClick={() => doEntryThings()}>
          Enter
        </span>
      </div>
    </div>
  );
};
