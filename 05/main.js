var id = '';
teg = '';
thisClass = '';

function $(name) {
  id = document.getElementById(name)
  teg = document.getElementsByTagName(name)
  thisClass = document.getElementsByClassName(name)

  if (thisClass.length > 1) {
    console.log(thisClass)
  } else console.log(thisClass[0])

  if (id) {
    console.log(id)
  } else if (teg) {
     return console.log(teg)
  }

}
$('article')