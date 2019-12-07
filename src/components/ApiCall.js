import React, { Component } from 'react';

// Example of a class with an API call to retrieve a todo list

class ApiCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  render() {
    const { items } = this.state;
    return (
        <>
        {items.map(item =>
            <p>{item.title}</p>
        )}
        </>
    );
  }

}
export default ApiCall;