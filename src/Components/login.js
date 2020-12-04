import React from 'react' 
import {Redirect} from 'react-router'

class Login extends React.Component{
    state = {
        localUser: '',
        localPassword: '',
        formValues: {}        
    }



    getInitialState = () => {
        
        this.setState({localUser: localStorage.getItem('user')})
        this.setState({localPassword: localStorage.getItem('password')})

    };

    componentDidMount = () => {
        this.getInitialState();
    }

    handleChange = (event) => {  
        let formValues = this.state.formValues;    
        let name = event.target.name;
        let value = event.target.value;
        
        formValues[name] = value;

        this.setState({formValues})
    };

    handleFormSubmit = () => {
        if (this.state.formValues.user === this.state.localUser && this.state.formValues.password === this.state.localPassword){
            alert('Correct password')        
        }
        else {
            alert('Oops..! Incorrect password')
        }
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <label>
                        User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password: <input name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <button onClick={this.handleFormSubmit}>Login</button>
            </div>
        )
    }
}

export default Login;