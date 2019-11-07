'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/auth-events')
const itemEvents = require('./item/item-events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#add-item').on('submit', itemEvents.onAddItem)
  $('#view-items').on('submit', itemEvents.onViewItems)
  // make sure view-item being singular doesn't cause errors
  $('#delete-item').on('submit', itemEvents.onDeleteItem)
  $('#update-item').on('submit', itemEvents.onUpdateItem)
  $('#update2-item').on('submit', itemEvents.onUpdateItem2)
  $('#view-item').on('submit', itemEvents.onViewItem)

  // const qrcode = new QRCode ('test', {
  //   text: 'http://jindo.dev.naver.com/collie',
  //   width: 128,
  //   height: 128,
  //   colorDark: '#000000',
  //   colorLight: '#ffffff',
  //   correctLevel: QRCode.CorrectLevel.H
  // })
})
