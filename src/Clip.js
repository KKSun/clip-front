import React from 'react';
import axios from 'axios';

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
        var url = "http://localhost:9090/sql/add"
        fetch(url, {
            method: 'POST',
            headers: new Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }),
            body: "name=" + this.state.username + "&tag=" + this.state.tag + "&text=" + this.state.text
        })
    }

    handleRetrieve(){
        var paramTag = this.state.tag
        var paramName = this.state.username
        // var proxy = "https://cors-anywhere.herokuapp.com/"
        var url = "http://localhost:9090/sql/fetch?name=" + paramName + "&tag=" + paramTag
        axios.get(url).then(resp => {
            this.setState({text : resp.data});
        }).catch(error => {console.log(error)})
        console.log(paramName + ", " + paramTag)
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