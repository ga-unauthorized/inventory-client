'use strict'

// use require with a reference to bundle the file and use it in this file
// const QRCode = require('qrcode')
// const email = require('emailjs/email')
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

  $('.navbar').hide()
  $('.footer').hide()
  $('.table').hide()
  $('#view-items').hide()

  $('#change-password').hide()
  $('.h2changepassword').hide()

  $('#sign-out').hide()
  $('.h2signout').hide()
  $('#add-run').hide()
  $('.h2addrun').hide()
  $('#view-runs').hide()
  $('.h2viewruns').hide()
  $('#delete-run').hide()
  $('.h2deleterun').hide()
  $('#update-run').hide()
  $('.h2updaterun').hide()

  // const qrcode = new QRCode ('test', {
  //   text: 'http://jindo.dev.naver.com/collie',
  //   width: 128,
  //   height: 128,
  //   colorDark: '#000000',
  //   colorLight: '#ffffff'
  //   // correctLevel: QRCode.CorrectLevel.H
  // })
  // const canvas = document.getElementById('canvas')
  // console.log('canvas', canvas)
  // const infoQRCODE = 'sample text'
  // QRCode.toCanvas(canvas, infoQRCODE, function (error) {
  //   if (error) console.error(error)
  //   console.log('success!')
  // })

  // const email = require('emailjs')
  // const server = email.server.connect({
  //   user: 'JiemingS',
  //   password: 'sunjieming1',
  //   host: 'smtp.your-email.com',
  //   ssl: true
  // })
  // server.send({
  //   text: 'i hope this works',
  //   from: 'you <username@your-email.com>',
  //   to: 'someone <someone@your-email.com>, another <another@your-email.com>',
  //   cc: 'else <else@your-email.com>',
  //   subject: 'testing emailjs'
  // }, function (err, message) { console.log(err || message) })

  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // const msg = {
  //   to: 'griffinhood@verizon.net',
  //   from: 'sunjieming1121@gmail.com',
  //   subject: 'Sending with Twilio SendGrid is Fun',
  //   text: 'and easy to do anywhere, even with Node.js',
  //   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  // }
  // sgMail.send(msg)
})
