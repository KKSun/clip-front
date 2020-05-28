import React from 'react';

class Clip extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            tag: '',
            text: ''         
        }
    }

    handleSave() {
        console.log(this.state.username)
        console.log(this.state.tag)
        console.log(this.state.text)
    }

    handleRetrieve(){
        console.log(this.state.text)
    }

    handleChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    render() {
        return (
        <div>
            <input type="text" 
                   name="username" 
                   placeholder="username"  
                   value={this.state.username} 
                   onChange={this.handleChange.bind(this)}></input><br/>
            <input type="text" 
                   name="tag"      
                   placeholder="#tag"      
                   value={this.state.tag}      
                   onChange={this.handleChange.bind(this)}></input><br/>
            <button onClick={() => this.handleSave()}>save</button>
            <button onClick={() => this.handleRetrieve()}>retrieve</button><br/>
            <input type="text" 
                   name="text"     
                   placeholder="Clipboard" 
                   value={this.state.text}     
                   onChange={this.handleChange.bind(this)}></input><br/>
        </div>
        );
    }
}
  
export default Clip;