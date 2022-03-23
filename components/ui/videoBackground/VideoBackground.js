import React from "react";
// expo
import { Video } from "expo-av";
// style
import style from "./videoStyle";
// PROPTYPES
import PropTypes from "prop-types";

const VideoBackground = (props) => {
    return (
        <Video
            style={style.backgroundVideo}
            source={props.video}
            resizeMode="cover"
            isLooping
            isMuted
            shouldPlay={true}
        />
    );
};
VideoBackground.defaultProps = {
    video: "",
};

VideoBackground.propTypes = {
    video: PropTypes.string,
};

export default VideoBackground;
