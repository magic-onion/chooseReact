const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class CreateAdventurer extends React.Component {

  handleClick () {
    this.props.dispatch({type: 'SET_NAME', name: this.refs.name.value})
    this.props.dispatch({type: 'UPDATE_SITUATION', situation: 11})
  }

  render () {
    return (
      <div>
        <h1>Who are you?</h1>
        <div>My name is <input type="text" ref="name" placeholder="Impressivename"></input> the brave!</div>
        <br />
        <Link to="/adventure"><button onClick={this.handleClick.bind(this)}>Embark!</button></Link>
      </div>
    )
  }
}

module.exports = connect((state) => state)(CreateAdventurer)
