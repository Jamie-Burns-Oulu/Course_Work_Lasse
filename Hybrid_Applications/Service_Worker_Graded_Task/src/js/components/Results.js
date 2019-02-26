import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

const API_KEY = require("./data/API_KEY");


export default class Results extends Component {
    constructor() {
        super();
        this.goBack = this.goBack.bind(this);
        this.setFav = this.setFav.bind(this);
        this.delFav = this.delFav.bind(this);
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            windSpeed: undefined,
            windDirection: undefined,
            weatherIcon: undefined,
            fav: 0,
            favNum: "",
            isLoading: true, 
            time: ""
        };
    }

    componentDidMount() {
        this.setState({ isLoading: false });
    }

    componentWillReceiveProps(nextProps) {
        const city = nextProps.city;
        nextProps.city != undefined && nextProps.city.length > 0
            ? axios
                  .get(
                      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
                  )
                  .then(res => {
                      this.setState({
                          temperature: res.data.main.temp,
                          city: res.data.name,
                          country: res.data.sys.country,
                          humidity: res.data.main.humidity,
                          description: res.data.weather[0].description,
                          windSpeed: res.data.wind.speed,
                          windDirection: res.data.wind.deg,
                          weatherIcon: res.data.weather[0].icon,
                          time: moment().format("HH:mm, DD/MM/YY"),
                          fav: 0
                      });
                      for (let i = 0; i < 15; i++) {
                          let e = JSON.parse(localStorage.getItem(`fav${i}`));
                          if (e != null) {
                              res.data.name == e.city
                                  ? this.setState({ fav: 1, favNum: `fav${i}` })
                                  : false;
                          }
                      }                  
                  })
            : false;
    }

    goBack() {
        this.props.getFavs();
        window.scrollTo(0, 0);
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            windSpeed: undefined,
            windDirection: undefined,
            weatherIcon: undefined
        });
    }

    setFav() {
        if (!localStorage.getItem("fav")) {
            localStorage.setItem("fav", 0);
        }
        let favCount = parseInt(localStorage.getItem("fav"));
        let favDetails = JSON.stringify({
            city: this.state.city,
            country: this.state.country,
            time: moment().format("HH:mm, DD/MM/YY")
        });
        localStorage.setItem("fav" + favCount, favDetails);
        let counter = parseInt(localStorage.getItem("fav")) + 1;
        localStorage.setItem("fav", counter);
        this.setState({ fav: 1 });
        alert("Added from Favs");
    }

    delFav() {
        localStorage.removeItem(this.state.favNum);
        this.setState({ fav: 0 });
        alert("Removed from Favs");
    }

    render() {
        return (
            <div>
                <div className="resultsBanner">
                    <div className="resultsBannerItem" />
                    <div className="resultsBannerItem">
                        <div className="resultTitle">{this.state.city}</div>
                    </div>

                    <div className="resultsBannerItem" />
                </div>

                {this.state.city != undefined && (
                    <div className="resultDetails">
                        <img
                            className="weatherIcon"
                            src={`https://openweathermap.org/img/w/${
                                this.state.weatherIcon
                            }.png`}
                        />
                        <ul>
                            {this.state.city}, {this.state.country}
                        </ul>
                        <ul>Temp : {this.state.temperature}&#176;C</ul>
                        <ul>Conditions : {this.state.description}</ul>
                        <ul>Wind speed : {this.state.windSpeed}m/s</ul>
                        <ul>Last updated : {this.state.time}</ul>
                    </div>
                )}

                <button
                    className="bannerBtn"
                    id="backBtn"
                    onClick={this.goBack}
                >
                    &#x23CE;
                </button>

                {this.state.fav ? (
                    <button
                        className="bannerBtn"
                        id="delBtn"
                        onClick={this.delFav}
                    >
                        Remove
                    </button>
                ) : (
                    <button
                        className="bannerBtn"
                        id="favBtn"
                        onClick={this.setFav}
                    >
                        Favorite
                    </button>
                )}
            </div>
        );
    }
}
 
