var link = null

do {
  link = prompt('Vvedite this img link')
} while (!(link.startsWith('https://') || link.startsWith('http://')))

var angle = null
do {
  angle = prompt('Na scolko gradusov vam povernut kartinku?')
} while (isNaN(angle))

var startDegree = 0

for (var i = 1; i <= 5; i++) {
 var img = document.createElement('img')
 img.src = link
 document.body.appendChild(img)
 startDegree += +angle
 img.style.transform = `rotate(${startDegree}deg)`
}