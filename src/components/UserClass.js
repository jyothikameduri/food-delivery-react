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
            <div className="about-container ">
                <div className="user-card flex-col justify-center items-center  ">
                    <img className='rounded-full' src={avatar_url} alt="Profile"></img>
                    <h1 className='font-bold '>Hosted By : <span className="info-text  text-gray-500 ">{name}</span>    
                    </h1>
                    <h1 className='font-bold'>Location : <span className="info-text  text-gray-500 ">{location}</span>
                    </h1>
                    <h1 className='font-bold'>Contact at : <span className="info-text  text-gray-500 ">jyothikameduri@gmail.com</span></h1>
                </div>
            </div>
        )
    }
}

export default UserClass;