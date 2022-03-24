import React from "react";

import { Text } from "react-native";

// music
import Music from "../../../assets/music/music.mp3";
import { Audio } from "expo-av";

// redux
import { connect } from "react-redux";

// style
import style from "./style";

//
import { ButtonOnOff, ListHandler } from "space-rock-scissor-paper-ui";

const Settings = (props) => {
	const [state, setState] = React.useState({
		/**
		 * @type { Audio.Sound | null }
		 */
		music: null,
		playMusic: true,
	});

	const playPause = () =>
		setState((prev) => ({ ...prev, playMusic: !prev.playMusic }));

	const elements = React.useMemo(
		() => [
			<ButtonOnOff
				onPress={playPause}
				key={"settings-list-audio"}
				text={state.playMusic ? "Audio On" : "Audio Off"}
			/>,
		],
		[state.playMusic]
	);

	React.useEffect(() => {
		if (!state.music) {
			Audio.Sound.createAsync(Music)
				.then(({ sound }) => {
					sound.setOnPlaybackStatusUpdate((s) => {
						if (s.didJustFinish || !s.isPlaying) sound.playFromPositionAsync(0);
					});
					sound.setVolumeAsync(0.1);
					sound.playFromPositionAsync(0);
					return sound;
				})
				.then((sound) => setState((prev) => ({ ...prev, music: sound })));

			return;
		}

		if (state.playMusic) {
			state.music.setVolumeAsync(0.1);
		} else {
			state.music.setVolumeAsync(0);
		}
	}, [state.playMusic]);

	return (
		<ListHandler
			elements={elements}
			cardContainerStyle={style.cardContainerStyle}
			titleElement={<Text style={style.text}>{props.userName}</Text>}
		/>
	);
};

const mapStateToProps = (state) => ({
	userName: state.user.name,
});

export default connect(mapStateToProps)(Settings);
