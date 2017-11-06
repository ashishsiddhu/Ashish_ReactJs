import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Binding extends Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };

   updateState(e) {
      this.setState({data: e.target.value});
   }
    clearInput = () => {
        this.setState({data: ''});
        //ReactDOM.findDOMNode(this.refs.myInput).focus();
    };  
   render() {
      return (
         <div>
             <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
            <h4>{this.state.data}</h4>
            <button onClick = {this.clearInput}>CLEAR</button>
         </div>
      );
   }
}

export default Binding;
