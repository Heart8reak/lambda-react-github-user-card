import React from 'react'
import axios from 'axios'

import FollowerCard from './FollowerCard'
import UserCard from './UserCard'


class Home extends React.Component {
    state = {
        listFollowers: [],
        originalList: [],
        searchTerm: '',
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
                    img: res.data.avatar_url,
                    followers: res.data.followers,
                    url: res.data.htm_url,
                    login: res.data.login,
                    location: res.data.location,
                    repos: res.data.public_repos
                })
            })
            .catch(err => console.log('ERROR ON FETCH:', err))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log('SEARCHTERM: We have a state change')

            const characters = this.state.originalList.filter(char => char.login.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            )
            this.setState({
                listFollowers: characters
            })
            console.log(this.state)
        }
    }

    render() {
        return (
            <div className="App">
                <br />
                <br />
                <UserCard
                    login={this.state.login}
                    img={this.state.img}
                    url={this.state.url}
                    followers={this.state.followers}
                    listFollower={this.state.listFollower}
                    location={this.state.location}
                    repos={this.state.repos}
                    following={this.state.following}
                />
                <div>
                    <h1>GitHub Followers: </h1>
                </div>
                <form>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        placeholder="Search"
                    />
                </form>
                <br />

                <div className="App-follower">
                    {this.state.listFollowers.map(item => (
                        <FollowerCard
                            key={item.id}
                            loginFollow={item.login}
                            imgFollow={item.avatar_url}
                            urlFollow={item.html_url}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Home