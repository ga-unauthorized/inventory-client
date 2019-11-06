
'use strict'

// const store = require('../store')
// const viewItemsTemplate = require('../templates/recipe-listing.handlebars')
// const viewRecipeTemplate = require('../templates/one-recipe.handlebars')

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

const onViewItemsSuccess = function (data) {
  $('#message').text('View all items success!')
  // $('#display-resources').html('')
  // const viewItemsHtml = viewItemsTemplate({ items: data.items })
  // $('#display-resources').append(viewItemsHtml)
  console.log('index item', data)
}

const onViewItemsFailure = function () {
  $('#message').text('View all items failure!')
}

const onViewItemSuccess = function (data) {
  $('#message').text('View item success!')
  // const viewItemHtml = viewItemTemplate({ item: data.item })
  // $('#row-2').append(viewRecipeHtml)
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
