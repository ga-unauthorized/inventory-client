
'use strict'

// const store = require('../store')
const viewItemsTemplate = require('../templates/items-listing.handlebars')
const viewItemTemplate = require('../templates/item-listing.handlebars')
const itemApi = require('./item-api.js')

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

const onViewItemsSuccess2 = function (responseData) {
  console.log('onViewItemsSuccess2 responseData.items', responseData.items)

  const itemName = $('#update2-name').val()
  let itemPrice = $('#update2-price').val()
  const itemQuantity = $('#update2-quantity').val()

  console.log('val', itemName)
  console.log('val', itemPrice)
  console.log('val', itemQuantity)

  const dataObj = {
    item: {
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity
    }
  }

  const hugeArray = responseData.items
  let num = 0
  hugeArray.forEach(function (element) {
    if (element.name === itemName) {
      num = 1
      // console.log('element', element)
      // console.log('element.quantity', element.quantity)
      // console.log('itemQuantity', parseInt(itemQuantity))
      // console.log('element.quantity + itemQuantity', parseInt(element.quantity) + parseInt(itemQuantity))
      const quantityAfterUpdate = parseInt(element.quantity) + parseInt(itemQuantity)

      if (itemPrice < 0) {
        itemPrice = element.price
      }

      // console.log('quantityAfterUpdate', quantityAfterUpdate)
      if (quantityAfterUpdate <= 0) {
        $('#message').text('Item is out of stock!')

        console.log('element', element)
        console.log('element.quantity', element.quantity)
        console.log('element.id', element.id)

        // if (itemPrice < 0) {
        //
        // }

        const dataObjOut = {
          item: {
            id: element.id,
            name: itemName,
            price: itemPrice,
            quantity: 0
          }
        }
        console.log('dataObjOut', dataObjOut)
        itemApi.updateItem(dataObjOut)
          .then(onUpdateItemSuccess)
          .catch(onUpdateItemFailure)
      } else {
        console.log('element', element)
        console.log('element.quantity', element.quantity)
        console.log('element.id', element.id)

        const dataObjOut = {
          item: {
            id: element.id,
            name: itemName,
            price: itemPrice,
            quantity: quantityAfterUpdate
          }
        }
        console.log('dataObjOut', dataObjOut)
        itemApi.updateItem(dataObjOut)
          .then(onUpdateItemSuccess)
          .catch(onUpdateItemFailure)
      }
      console.log('there it is')
    }
  })
  console.log('num', num)
  if (num === 0) {
    if (itemPrice >= 0) {
      console.log('dataObj', dataObj)
      itemApi.addItem(dataObj)
        .then(onAddItemSuccess)
        .catch(onAddItemFailure)
    } else {
      $('#message').text('Please try again! Enter valid price!')
    }
  }
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
  onUpdateItemFailure,
  onViewItemsSuccess2
}
