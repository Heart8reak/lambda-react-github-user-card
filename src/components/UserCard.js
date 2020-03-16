import React from 'react'

const UserCard = props => {
    return (
        <div className="user-card">
<img src={} alt=""></img>
    <h2>{props.name}</h2>
    <span>Github Handle: </span>
    <a href={props.url}>{props.login}</a>
    <p>Total Followers: {props}</p>
    <p>Total Repos: {props.repo}</p>
    <p>Location: {props.location}</p>
        </div>
    )
}

export default UserCard;