import React, { createContext, useContext, useState } from "react";

interface VideoContextType {
  streaming: boolean;
  setStreaming: (streaming: boolean) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [streaming, setStreaming] = useState(false);

  return (
    <VideoContext.Provider value={{ streaming, setStreaming }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideoContext must be used within a VideoProvider");
  }
  return context;
};
