'use strict'

const store = require('../store')

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
  setTimeout(function () { successMessage('') }, 1000)
  store.user = responseData.user
  $('#message').css('color', 'green')
  console.log('responseData', responseData)
  $('#sign-up, #sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('.navbar').show()
  $('#view-items').show()
  $('.table').hide()
  $('.footer').show()
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
  setTimeout(function () { successMessage('') }, 1000)
  $('#message').css('color', 'green')
  console.log('responseData', responseData)
  $('#sign-up, #sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.navbar').hide()
  $('#view-items').hide()
  $('.table').hide()
  $('.footer').hide()
  $('#exampleModal').modal('hide').data('bs.modal', null)
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
