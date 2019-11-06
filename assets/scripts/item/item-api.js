'use strict'

const config = require('../config')
const store = require('../store')

const addItem = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/items',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
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
    url: config.apiUrl + '/items/' + itemId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteItem = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/items/' + formData.item.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateItem = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/items/' + formData.item.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  addItem,
  viewItems,
  viewItem,
  deleteItem,
  updateItem
}
