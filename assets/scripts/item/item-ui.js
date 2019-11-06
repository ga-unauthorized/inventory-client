
'use strict'

// const store = require('../store')
const viewItemsTemplate = require('../templates/items-listing.handlebars')
const viewItemTemplate = require('../templates/item-listing.handlebars')

// const successMessage = function (newText) {
//   $('#message').text(newText)
//   $('#message').removeClass('failure')
//   $('#message').addClass('success')
// }
//
// const failureMessage = function (newText) {
//   $('#message').text(newText)
//   $('#message').addClass('failure')
//   $('#message').removeClass('success')
// }

const onAddItemSuccess = function (data) {
  $('#message').text('Successfully added a new item!')
}

const onAddItemFailure = function (data) {
  $('#message').text('Add item failure!')
}

const onViewItemsSuccess = function (responseData) {
  $('#message').text('View all items success!')
  $('#item-table').html('')
  console.log('responseData.items ', responseData.items)
  const viewItemsHtml = viewItemsTemplate({ items: responseData.items })
  // console.log(viewItemsHtml)
  // console.log('responseData.items', responseData.items)
  $('#item-table').append(viewItemsHtml)
}

const onViewItemsFailure = function () {
  $('#message').text('View all items failure!')
}

const onViewItemSuccess = function (data) {
  $('#message').text('View item success!')
  $('#item-table').html('')
  console.log('data is ', data)
  const viewItemHtml = viewItemTemplate({ item: data })
  $('#item-table').append(viewItemHtml)
  // $('#view-recipe-form').trigger('reset')
}

const onViewItemFailure = function () {
  $('#message').text('View item failure!')
}

const onDeleteItemSuccess = function (data) {
  $('#message').text('Item deleted successfully!')
  // setTimeout(function () { successMessage('') }, 4000)
}

const onDeleteItemFailure = function () {
  $('#message').text('Item delete failure!')
}

const onUpdateItemSuccess = function (data) {
  $('#message').text('Successfully updated a new item!')
  // setTimeout(function () { successMessage('') }, 4000)
  // console.log('update item', data)
}

const onUpdateItemFailure = function (data) {
  $('.message').text('Update item failure!')
  // setTimeout(function () { failureMessage('') }, 4000)
}

module.exports = {
  onAddItemSuccess,
  onAddItemFailure,
  onViewItemsSuccess,
  onViewItemsFailure,
  onViewItemSuccess,
  onViewItemFailure,
  onDeleteItemSuccess,
  onDeleteItemFailure,
  onUpdateItemSuccess,
  onUpdateItemFailure
}
