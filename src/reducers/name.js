module.exports = function(state = null, action) {
  switch (action.type) {

    case 'SET_NAME':
      return action.name

    case 'RESET_NAME':
      return null

    case 'RESET_ADVENTURE':
      return null

    default:
      return state
  }
}
