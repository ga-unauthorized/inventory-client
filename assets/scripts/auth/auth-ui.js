'use strict'

const store = require('./store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').addClass('failure')
  $('#message').removeClass('success')
  $('form').trigger('reset')
}

const onSignUpSuccess = (responseData) => {
  successMessage('Signed up Successfully!')
  $('#message').css('color', 'green')
  console.log('responseData', responseData)
}

const onSignUpFailure = () => {
  failureMessage('Signed up Failed')
  $('#message').css('color', 'red')
}
const onSignInSuccess = (responseData) => {
  successMessage('Signed in Successfully')
  store.user = responseData.user
  $('#message').css('color', 'green')
  console.log('responseData', responseData)
  // $('#sign-up, #sign-in').hide()
  // $('#change-password').show()
  // $('#sign-out').show()
}

const onSignInFailure = function () {
  $('#message').css('color', 'red')
  failureMessage('Sign-in Failure')
}

const onChangePasswordSuccess = function (responseData) {
  successMessage('Changed password successfully')
  $('#message').css('color', 'green')
  console.log('responseData', responseData)
}

const onChangePasswordFailure = function () {
  $('#message').css('color', 'red')
  failureMessage('Changed password Failed')
}

const onSignOutSuccess = function (responseData) {
  successMessage('Sign-out successfully')
  $('#message').css('color', 'green')
  console.log('responseData', responseData)
  // $('#sign-up, #sign-in').show()
  // $('#change-password').hide()
  // $('#sign-out').hide()
}

const onSignOutFailure = function () {
  failureMessage('Signed out failed')
  $('#message').css('color', 'red')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
