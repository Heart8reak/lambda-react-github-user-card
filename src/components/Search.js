import React from 'react'
import axios from 'axios'

import FollowerCard from './FollowerCard'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            github: [],
            searchTerm: ''
        }
        console.log('BEGINNING OF STATE: ', this.state)
    }

    getFollower = () => {
        axios 
        .get(`https://api.github.com/user${this.state.searchTerm}/followers`)
        .then(res => {
            this.setState({
                github: res.data
            })
            console.log('STATE FETCHING FOLLOWERS: ', this.state)
            console.log('STATE RETURNING DATA: ', res.data)
        })
        .catch(err => console.log('ERROR:', err))
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <input 
                    onChange={this.handleChange}
                    type="text"
                    name="searchTerm"
                    value={this.state.searchTerm}
                    placeholder="Search"
                    />
                    <button>See Who is Following You</button>
                </form>

                <br />
                <br />
{this.state.github.map(item => {
    return (
        <FollowerCard 
        key={item.id}
        loginFollow={item.login}
        imgFollow={item.avatar_url}
        urlFollow={item.html_url}
        />
    )
})}

            </div>
        )
    }
}

export default Search