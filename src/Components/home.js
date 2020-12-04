import React from 'react' 

class Home extends React.Component{
    state = {
        formValues: {

        },
        yooo: ''
    }

    handleChange = (event) => {  
        let formValues = this.state.formValues;    
        let name = event.target.name;
        let value = event.target.value;
        
        formValues[name] = value;

        this.setState({formValues})
    };

    handleFormSubmit = () => {
        let formValues = this.state.formValues;
        this.setState({yooo: formValues.message}) 
    };

    render(){
        return(
        <div>
            <div style={{width:'200px',height:'200px',backgroundColor:'gray'}}>
                Message: {this.state.yooo}
            </div>
                    <label>
                        <input name="message" value={this.state.message} onChange={this.handleChange}/>
                    </label>
                    <button onClick={this.handleFormSubmit}>Send</button>
        </div>
        )}
}

export default Home;