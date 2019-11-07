const getFormFields = require('../../../lib/get-form-fields.js')
const itemApi = require('./item-api.js')
const itemUi = require('./item-ui.js')

const onAddItem = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log('addItem formData', formData)
  itemApi.addItem(formData)
    .then(itemUi.onAddItemSuccess)
    .catch(itemUi.onAddItemFailure)
}

const onViewItem = function (event) {
  event.preventDefault()
  console.log('events.js')
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData', formData)
  console.log('formData.item', formData.item)
  console.log('formData.item.name', formData.item.name)
  itemApi.viewItems()
    .then(itemUi.onViewItemsSuccess3)
    .catch(itemUi.onViewItemsFailure)
  // itemApi.viewItem(formData.item.id)
  //   .then(itemUi.onViewItemSuccess)
  //   .catch(itemUi.onViewItemFailure)
}

const onViewItems = function (event) {
  event.preventDefault()
  itemApi.viewItems()
    .then(itemUi.onViewItemsSuccess)
    .catch(itemUi.onViewItemsFailure)
}

const onDeleteItem = function (event) {
  event.preventDefault()
  // const formData = getFormFields(event.target)
  // console.log('formData', formData)
  // console.log('formData.item.name', formData.item.name)
  itemApi.viewItems()
    .then(itemUi.onViewItemsSuccess4)
    .catch(itemUi.onViewItemsFailure)
  // itemApi.deleteItem(formData)
  //   .then(itemUi.onDeleteItemSuccess)
  //   .catch(itemUi.onDeleteItemFailure)
}

const onUpdateItem = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('formData', formData)
  itemApi.updateItem(formData)
    .then(itemUi.onUpdateItemSuccess)
    .catch(itemUi.onUpdateItemFailure)
}

const onUpdateItem2 = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('update2 formData', formData)
  itemApi.viewItems()
    .then(itemUi.onViewItemsSuccess2)
    .catch(itemUi.onViewItemsFailure)
  // itemApi.updateItem(formData)
  //   .then(itemUi.onUpdateItemSuccess)
  //   .catch(itemUi.onUpdateItemFailure)
}

module.exports = {
  onAddItem,
  onViewItem,
  onViewItems,
  onDeleteItem,
  onUpdateItem,
  onUpdateItem2
}
