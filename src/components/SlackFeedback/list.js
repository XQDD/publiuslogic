import React, { Component } from 'react'

class List extends Component {
  // Initialize the state
  constructor (props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  // Fetch the list on first mount
  componentDidMount () {
    this.getList()
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/items')
      .then(res => res.json())
      .then(list => this.setState({ list }))
  };

  render () {
    const { list } = this.state

    return (
      <div>
        <h1 style={{ fontSize: '2em' }}>List of Items from Express Server</h1>
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map(item => {
              return <div>{item}</div>
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )}
      </div>
    );
  }
}

export default List