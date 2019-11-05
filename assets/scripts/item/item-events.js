const getFormFields = require('../../../lib/get-form-fields.js')
const itemApi = require('./item-api.js')
const itemUi = require('./item-ui.js')

const onAddItem = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  itemApi.addItem(formData)
    .then(itemUi.onAddItemSuccess)
    .catch(itemUi.onAddItemFailure)
}

const onViewItem = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  itemApi.viewItem(formData)
    .then(itemUi.onViewItemSuccess)
    .catch(itemUi.onViewItemFailure)
}

const onViewItems = function (event) {
  event.preventDefault()
  itemApi.viewItem()
    .then(itemUi.onViewItemsSuccess)
    .catch(itemUi.onViewItemsFailure)
}

const onDeleteItem = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  itemApi.deleteItem(formData)
    .then(itemUi.onDeleteItemSuccess)
    .catch(itemUi.onDeleteItemFailure)
}

const onUpdateItem = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  itemApi.updateItem(formData)
    .then(itemUi.onUpdateItemSuccess)
    .catch(itemUi.onUpdateItemFailure)
}

module.exports = {
  onAddItem,
  onViewItem,
  onViewItems,
  onDeleteItem,
  onUpdateItem
}
