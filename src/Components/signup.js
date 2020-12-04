import React from 'react' 

class Signup extends React.Component{
    state = {
        formValues: {}
    }
    //For setting state
    handleChange = (event) => {  
        let formValues = this.state.formValues;    
        let name = event.target.name;
        let value = event.target.value;
        
        formValues[name] = value;

        this.setState({formValues})
    };    
    //for storing in local storage
    handleFormSubmit = () => {
        const user = this.state.formValues.user;
        const password = this.state.formValues.password;
        localStorage.setItem('user',user)  
        localStorage.setItem('password',password)      
        alert('user registered')
      };

    render(){
        return(            
            <div>
                    <label>
                        User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password: <input name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <button onClick={this.handleFormSubmit}>Register</button>
            </div>
        )
    }
}

export default Signup;