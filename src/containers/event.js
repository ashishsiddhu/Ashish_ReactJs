import React, {Component} from 'react';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:
            [
              {
                "id": 1,
                "name": "Foo",
                "age": "20"
              },
              {
                "id": 2,
                "name": "Bar",
                "age": "30"
              },
              {
                "id": 3,
                "name": "Baz",
                "age": "40"
              }
            ],
            setdata: []
          }
        this.setStateHandler = this.setStateHandler.bind(this);
      }
    setStateHandler = () => {
        var item = "setState..."
        var myArray = this.state.setdata;
        myArray.push(item)
        this.setState({ setdata: myArray })
    };
    render() {
        var myStyle = {
          fontSize: 20,
          color: '#FF0000',
          width: "80%"
        }
        return (
        <div>
            <button onClick={this.setStateHandler}>SET STATE</button>
            <h4>State Array:
                {this.state.setdata.map((value, i) =>
                (<p key={i}> {i + " " + value}</p>)
            )}
            </h4>
        </div>
        )
    }
}
export default Event;