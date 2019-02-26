import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Accelerometer } from "expo";

export default class Sensor extends React.Component {
    state = {
        accelData: {},
        accelTotalArr: [],
        accelAvgArr: [],
        action: 0,
        speed: 0,
        magnitudeArr: []
    };
    componentDidMount() {
        this.startAccelerometer();
        setInterval(() => this.result(), 300);
    }
    startAccelerometer = () => {
        this.sensor = Accelerometer.addListener(accelData => {
            this.setState({ accelData });
            this.calc();
            this.state.speed
                ? Accelerometer.setUpdateInterval(100)
                : Accelerometer.setUpdateInterval(10);
        });
    };
    calc = () => {
        this.setState({ speed: this.props.speed });
        const { accelAvgArr } = this.state;
        const { x, y, z } = this.state.accelData;
        let accelAvg = 0;
        const accelTotal = Math.sqrt(
            Math.pow(2, x) + Math.pow(2, y) + Math.pow(2, z)
        );
        if (accelAvgArr.length > 0) {
            accelAvg = accelAvgArr.slice(-1)[0] * 0.95 + 0.05 * accelTotal;
        }
        const magnitude = Math.abs(accelAvg - accelTotal);
        this.setState({
            accelTotalArr: [...this.state.accelTotalArr, accelTotal],
            accelAvgArr: [...this.state.accelAvgArr, accelAvg],
            magnitudeArr: [...this.state.magnitudeArr, magnitude]
        });
    };
    result = () => {
        const { magnitudeArr } = this.state;
        let mag10 = magnitudeArr.slice(
            magnitudeArr.length - 10,
            magnitudeArr.length
        );
        let average = array => array.reduce((a, b) => a + b) / array.length;
        const magnitude = average(mag10);
        magnitude >= 0.03 && magnitude <= 1
            ? this.setState({ action: 1 })
            : magnitude >= 1
            ? this.setState({ action: 2 })
            : this.setState({ action: 0 });
    };
    render() {
        let action = this.state.action;
        return (
            <View>
                {action == 1 ? (
                    <Text style={[styles.layout, styles.walk]}>
                        You are walking
                    </Text>
                ) : action == 2 ? (
                    <Text style={[styles.layout, styles.run]}>
                        You are running
                    </Text>
                ) : (
                    <Text style={styles.layout}>You are not moving</Text>
                )}
            </View>
        );
    }
}
const windowH = Dimensions.get("window").height;
const windowW = Dimensions.get("window").width;
const styles = StyleSheet.create({
    layout: {
        backgroundColor: "#2AADBF",
        paddingTop: windowH / 2.5,
        paddingLeft: 25,
        height: windowH,
        width: windowW,
        fontSize: 30,
        fontFamily: "monospace",
        color: "white"
    },
    walk: {
        backgroundColor: "#2CD558"
    },
    run: {
        backgroundColor: "#FD342F"
    }
});
