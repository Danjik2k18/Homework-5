/* 2. Делаем функцию, которая принимает аргументом название тега и возварашает созданый тег. Потом Делаем функцию, которая принимает этот тег как аргумент и вставляет в body.
PS. createEl..., append...*/

var myTeg

function oneFunc(div) {
  myTeg = document.createElement(div)
  return myTeg
}
oneFunc('div')

function twoFunc(div) {
  return document.body.appendChild(div)
}
twoFunc(myTeg)