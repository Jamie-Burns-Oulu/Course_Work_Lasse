import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";

export default class Settings extends React.Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text style={styles.textBox}>Frequency speed</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.fast}
                    >
                        <Text style={styles.buttonText}>Fast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.slow}
                    >
                        <Text style={styles.buttonText}>Slow</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const windowH = Dimensions.get("window").height;
const windowW = Dimensions.get("window").width;
const styles = StyleSheet.create({
    layout: {
        backgroundColor: "white",
        height: windowH,
        width: windowW
    },
    textBox: {
        paddingTop: windowH / 3,
        fontSize: 40,
        color: "#2AADBF",
        fontFamily: "monospace",
        alignSelf: "center"
    },
    button: {
        height: windowW / 2,
        width: windowW / 2,
        borderRadius: 50,
        backgroundColor: "#2AADBF"
    },
    buttonText: {
        paddingTop: 70,
        fontSize: 30,
        color: "white",
        alignSelf: "center"
    },
    buttonContainer: {
        paddingTop: windowH / 4,
        flex: 1,
        flexDirection: "row"
    }
});
