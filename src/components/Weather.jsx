import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({ persons });
            })
        .catch(error => console.log(error));

    }

    render(){
        return (
            <div>
                <p>Weather</p>
            </div>

        )
    }

}

export default Weather;