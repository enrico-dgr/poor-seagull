import React from "react";
// RN
import { View, Text, SafeAreaView, FlatList } from "react-native";
// STYLE
import { useFonts } from "expo-font";
import style from "./style";
// PROPTYPES
import PropTypes from "prop-types";

const Collapse = (props) => {
    const [loaded] = useFonts({
        Toons: require("../../../assets/fonts/Mikey.ttf"),
        Sponge: require("../../../assets/fonts/Sponge.ttf"),
    });

    const renderItem = ({ item }) => (
        <View style={style.viewCollapse}>
            <Text style={style.text}>
                {item.playerOne.name} - {item.playerTwo.name}
            </Text>
            <Text style={style.text}>
                {item.playerOne.matchScore} - {item.playerTwo.matchScore}
            </Text>
        </View>
    );

    if (!loaded) {
        return null;
    }
    return (
        <View style={style.container}>
            <Text style={style.textPhase}>{props.phaseTitle}</Text>
            <SafeAreaView>
                <FlatList
                    data={props.matches}
                    renderItem={renderItem}
                    keyExtractor={(item, index) =>
                        item.phase + index + "phase-rank"
                    }
                />
            </SafeAreaView>
        </View>
    );
};
Collapse.defaultProps = {
    phaseTitle: "",
    matches: [],
};

Collapse.propTypes = {
    phaseTitle: PropTypes.string.isRequired,
    matches: PropTypes.array.isRequired,
};
export default Collapse;
