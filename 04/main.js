var elem

function getInnerTextOfElement(name = '#name') {
  if (name.startsWith('.') || name.startsWith('#')) {
    elem = document.getElementById(name)
    return console.log(elem.innerText)
  }
}
getInnerTextOfElement()