import React from 'react';
import {Card} from "semantic-ui-react";

const CardExampleCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">{weatherData.name}</Card.Header>
            <p>Temperature: {weatherData.main.temp} &deg;F</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
        </Card.Content>
    </Card>
)

export default CardExampleCard;