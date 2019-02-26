import React from "react";
import { StatusBar, View } from "react-native";
import Swiper from "react-native-swiper";
import Sensor from "./Components/Sensor.js";
import Settings from "./Components/Settings.js";

export default class App extends React.Component {
    state = {
        speed: 0
    };
    componentWillMount() {
        StatusBar.setHidden(true);
    }
    fast = () => {
        this.setState({ speed: 1 });
    };
    slow = () => {
        this.setState({ speed: 0 });
    };
    render() {
        return (
            <Swiper
                loop={false}
                showsPagination={false}
                index={0}
                bounces={true}
            >
                <View>
                    <Sensor speed={this.state.speed} />
                </View>
                <View>
                    <Settings fast={this.fast} slow={this.slow} />
                </View>
            </Swiper>
        );
    }
}
