module.exports = connectDB = (url) => {
  return require('mongoose').connect(url)
}
