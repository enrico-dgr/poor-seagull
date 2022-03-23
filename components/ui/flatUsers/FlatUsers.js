import React from "react";
// RN
import { View, Text, SafeAreaView, FlatList } from "react-native";
// STYLE
import style from "./style";
import { useFonts } from "expo-font";
// PROPTYPES
import PropTypes from "prop-types";

const FlatUsers = (props) => {
    const [loaded] = useFonts({
        Toons: require("../../../assets/fonts/Mikey.ttf"),
        Sponge: require("../../../assets/fonts/Sponge.ttf"),
    });

    const renderItem = React.useCallback(
        ({ item }) => (
            <View style={style.viewUsers}>
                <Text style={style.text}>{item.name}</Text>
            </View>
        ),
        []
    );
    if (!loaded) {
        return null;
    }
    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={props.users}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id + "tournament-flat-users"}
                />
            </SafeAreaView>
        </View>
    );
};

FlatUsers.propTypes = {
    users: PropTypes.array,
};

export default FlatUsers;
