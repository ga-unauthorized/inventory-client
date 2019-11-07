
'use strict'

// const store = require('../store')
// import QRCode from 'qrcode-reader'
const QRCode = require('qrcode')
const viewItemsTemplate = require('../templates/items-listing.handlebars')
const viewItemTemplate = require('../templates/item-listing.handlebars')
const itemClickmTemplate = require('../templates/item-click.handlebars')
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
  $('#update2-item').trigger('reset')
}

const onAddItemFailure = function (data) {
  $('#message').text('Add item failure!')
}

const onItemClickSuccess = function (responseData) {
  console.log('onItemClickSuccess responseData', responseData)
  console.log('onItemClickSuccess responseData.item.id', responseData.item.id)
  console.log('onItemClickSuccess responseData.item.name', responseData.item.name)
  console.log('onItemClickSuccess responseData.item.price', responseData.item.price)
  console.log('onItemClickSuccess responseData.item.quantity', responseData.item.quantity)
  console.log('onItemClickSuccess responseData.item.createdAt', responseData.item.createdAt)
  console.log('onItemClickSuccess responseData.item.updatedAt', responseData.item.updatedAt)
  const clickItemHTMl = itemClickmTemplate({ item: responseData })
  console.log('clickItemHTMl', clickItemHTMl)
  $('#modal-body').html('')
  $('#modal-body').append(clickItemHTMl)

  const canvas = document.getElementById('canvas')
  console.log('canvas', canvas)
  const infoQRCODE = 'Item Information:  Name: ' + responseData.item.name + ' Price: ' + responseData.item.price + ' Quantity: ' + responseData.item.quantity + ' CreateDate: ' + responseData.item.createdAt + ' UpdateDate: ' + responseData.item.updatedAt
  console.log('infoQRCODE', infoQRCODE)
  QRCode.toCanvas(canvas, infoQRCODE, function (error) {
    if (error) console.error(error)
    console.log('success!')
  })
}

const onItemClick = function (event) {
  console.log('event', event.target.parentElement)
  console.log('event.id', event.target.parentElement.id)
  itemApi.viewItem(event.target.parentElement.id)
    .then(onItemClickSuccess)
    .catch()
}

const onViewItemsSuccess = function (responseData) {
  $('#message').text('View all items success!')
  $('#item-table').html('')
  console.log('responseData.items ', responseData.items)
  const viewItemsHtml = viewItemsTemplate({ items: responseData.items })
  // console.log(viewItemsHtml)
  // console.log('responseData.items', responseData.items)
  $('#item-table').append(viewItemsHtml)
  $('.itemClick').on('click', onItemClick)
  $('.table').show()
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
  $('#view-item').trigger('reset')
}

const onViewItemFailure = function () {
  $('#message').text('View item failure!')
  $('#view-item').trigger('reset')
}

const onDeleteItemSuccess = function (data) {
  $('#message').text('Item deleted successfully!')
  $('#delete-item').trigger('reset')
  // setTimeout(function () { successMessage('') }, 4000)
}

const onDeleteItemFailure = function () {
  $('#message').text('Item delete failure!')
  $('#delete-item').trigger('reset')
}

const onUpdateItemSuccess = function (data) {
  $('#message').text('Successfully updated a new item!')
  $('#add-update-item-form').trigger('reset')
  // setTimeout(function () { successMessage('') }, 4000)
}

const onUpdateItemFailure = function (data) {
  $('.message').text('Update item failure!')
  $('#add-update-item-form').trigger('reset')
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
        $('#message').text('Item is out of stock!')
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

const onViewItemsSuccess3 = function (responseData) {
  console.log('onViewItemsSuccess3 responseData', responseData)
  console.log('onViewItemsSuccess3 responseData.items', responseData.items)

  // var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
  // const result = words.filter(word => word.length > 6)

  const itemArray = responseData.items
  console.log('itemArray ', itemArray)
  const itemName = $('#view-item-name').val()
  console.log('itemName ', itemName)
  const itemResult = itemArray.filter(item => item.name === itemName)
  console.log('itemResult ', itemResult)
  console.log('itemResult.length ', itemResult.length)
  if (itemResult.length === 0) {
    $('#item-table').html('')
  }
  console.log('itemResult[0] ', itemResult[0])
  console.log('itemResult[0].id ', itemResult[0].id)

  itemApi.viewItem(itemResult[0].id)
    .then(onViewItemSuccess)
    .catch(onViewItemFailure)
}

// responseData is from API
const onViewItemsSuccess4 = function (responseData) {
  console.log('responseData', responseData)
  const itemArray = responseData.items
  console.log('itemArray ', itemArray)
  const itemName = $('#delete-item-name').val()
  const itemResult = itemArray.filter(item => item.name === itemName)
  console.log('itemResult ', itemResult)
  console.log('itemResult.length ', itemResult.length)
  if (itemResult.length === 0) {
    // item not exist
    $('#item-table').html('')
  } else {
    // item exist
    console.log('itemResult[0] ', itemResult[0])
    console.log('itemResult[0].id ', itemResult[0].id)
    const dataObj = {
      item: {
        id: itemResult[0].id
      }
    }
    console.log('dataObj', dataObj)

    itemApi.deleteItem(dataObj)
      .then(onDeleteItemSuccess)
      .catch(onDeleteItemFailure)
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
  onViewItemsSuccess2,
  onViewItemsSuccess3,
  onViewItemsSuccess4
}
