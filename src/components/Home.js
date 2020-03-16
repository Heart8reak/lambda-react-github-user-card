import React from 'react'
import axios from 'axios'



class Home extends React.Component {
    state = {
        listFollowers: [],
        originalList: [],
        searchTerm: ''
    }

    componentDidMount() {
        //Fetching My Gihub Followers
        axios
            .get('https://api.github.com/users/Heart8reak/followers')
            .then(res => {
                this.setState({
                    listFollowers: res.data,
                    originalList: res.data
                })
                console.log('STATE: ', this.state)
                console.log('MY GITHUB FOLLOWERS FETCHED! ', res.data)
            })
            .catch(err => console.log(err))


        // Fecthing my Github User 
        axios
            .get('https://api.github.com/users/Heart8reak')
            .then(res => {
                console.log('FETCHING MY GITHUB USER DATA: ', res)
                this.setState({
                    name: res.data.name,
                    img: res.data.avatar_url
                })
            })
    }

    render() {
        return (
            <div className="App">
                <h1>Github User: </h1>
            </div>
        )
    }
}

export default Home