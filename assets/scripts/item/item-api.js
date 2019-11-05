'use strict'

const config = require('../config')
const store = require('../store')

const addItem = function (name, price, quantity) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/items',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      item: {
        name: name,
        price: price,
        quantity: quantity,
        user_id: store.user.id
      }
    }
  })
}

const viewItems = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/items',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const viewItem = function (itemId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes/' + itemId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteItem = function (itemId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + itemId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateItem = function (name, id, price, quantity) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/items/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      item: {
        name: name,
        id: id,
        price: price,
        quantity: quantity
      }
    }
  })
}

module.exports = {
  addItem,
  viewItems,
  viewItem,
  deleteItem,
  updateItem
}
