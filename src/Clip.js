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
        var clipStyle = {
            width: "360px",
	        height: "120px",
            padding: "3px",
            margin: "5px",
            border: "1px solid #D7CCCC"
        };

        var buttonStyle = {
            padding: "3px",
            margin: "5px",
            border: "1px solid #EBE3E3"
        };

        var inputStyle = {
            padding: "2px",
            margin: "5px",
            border: "1px solid #D7CCCC"
        }

        return (
        <div>
            <input type="text" 
                   name="username" 
                   placeholder="username"  
                   style={inputStyle}  
                   value={this.state.username} 
                   onChange={this.handleChange.bind(this)}></input><code>&</code>
            <input type="text" 
                   name="tag"      
                   placeholder="#tag"  
                   style={inputStyle}    
                   value={this.state.tag}      
                   onChange={this.handleChange.bind(this)}></input><br/>
            <button style={buttonStyle}
                    onClick={() => this.handleSave()}>save</button>
            <button style={buttonStyle}
                    onClick={() => this.handleRetrieve()}>retrieve</button><br/>
            <textarea type="text" 
                   name="text"     
                   placeholder="Clipboard" 
                   value={this.state.text}     
                   onChange={this.handleChange.bind(this)}
                   style={clipStyle}></textarea><br/>
        </div>
        );
    }
}
  
export default Clip;