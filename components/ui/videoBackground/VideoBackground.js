import React from "react";
// expo
import { Video } from "expo-av";
// style
import style from "./videoStyle";
// assets

const VideoBackground = () => {
  return (
    <Video
      style={style.backgroundVideo}
      source={require("../../../assets/seagulBg.mp4")}
      resizeMode="cover"
      isLooping
      isMuted
      shouldPlay={true}
    />
  );
};

export default VideoBackground;
