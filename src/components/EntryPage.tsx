import { useState } from "react";

interface EntryPageProps {
  setEntryPageActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EntryPage = ({ setEntryPageActive }: EntryPageProps) => {
  const entryAudio = new Audio("/doorunlocking.mp3");

  const doEntryThings = async () => {
    try{
      await entryAudio.play();
    }
    catch(e){
      //Some versions of Chrome v50+ have rare bug where audio can cause page crash. 
      console.log(`error -- ${e}`)
    }
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
