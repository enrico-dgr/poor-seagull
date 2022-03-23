import React from "react";
//  RN
import { View, Text, Image, ImageBackground } from "react-native";
// STYLE
import { useFonts } from "expo-font";
import style from "./style";
// PROPTYPES
import PropTypes from "prop-types";

const CardRules = (props) => {
    const [loaded] = useFonts({
        Toons: require("../../../assets/fonts/Mikey.ttf"),
        Sponge: require("../../../assets/fonts/Sponge.ttf"),
    });
    if (!loaded) {
        return null;
    }
    return (
        <ImageBackground
            source={props.imageBg}
            resizeMode="cover"
            style={style.bg}
        >
            <View style={style.container}>
                <Text style={style.title}>{props.ruleTitle}</Text>
                <Image style={style.slideContainer} source={props.ruleImage} />
                <Text style={style.text}>{props.textOne}</Text>
                <Text style={style.text}>{props.textTwo}</Text>
            </View>
        </ImageBackground>
    );
};
CardRules.defaultProps = {
    ruleTitle: "",
    ruleImage: "",
    textOne: "",
    textTwo: "",
};

CardRules.propTypes = {
    ruleTitle: PropTypes.string.isRequired,
    ruleImage: PropTypes.string.isRequired,
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
};
export default CardRules;
