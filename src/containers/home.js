const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Home(props) {
  return (
    <div>
      <h1>Choose React</h1>
      <p>Choose your own adventure! In React!</p>
      <Link to="create"><button>Start your adventure!</button></Link>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
