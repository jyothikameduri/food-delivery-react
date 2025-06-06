import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props) //super(props) is required to initialize the parent class (React.Component) and allow usage of this.props.
        this.state ={
            userInfo:{
                name:"Dummy",
                location:"default",
                avatar_url:"https://dummy.jpg"
            },
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/jyothikameduri");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    render(){
        const {avatar_url,name,location} = this.state.userInfo;
        return (
            <div className="about-container">
                <div className="user-card">
                    <img src={avatar_url} alt="Profile"></img>
                    <h1>Hosted By : <span className="info-text">{name}</span>    
                    </h1>
                    <h1>Location : <span className="info-text">{location}</span>
                    </h1>
                    <h1>Contact at : <span className="info-text">jyothikameduri@gmail.com</span></h1>
                </div>
            </div>
        )
    }
}

export default UserClass;