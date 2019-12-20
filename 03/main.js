/*
 Делаем функцию, которая принимает в качестве аргумента id тега и если этого тега нету внутри body, то возврашает, что нельзя удалить этот тег, потому что в вёрстке этого тега нету. Если этот тег в вёрстке, то удаляет
*/
var elem

function delElememt(id) {
  elem = document.getElementById(id)
  if (elem) {
    elem.parentNode.removeChild(elem)
  } else return console.log('takogo tega net v verstke')
}
delElememt('myDiv')