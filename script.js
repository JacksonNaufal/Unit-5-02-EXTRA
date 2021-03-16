
document.getElementById('button').addEventListener('click', button)
document.getElementById('background1').addEventListener('click', background1)
document.getElementById('block').addEventListener('click', block)
document.getElementById('background1').addEventListener('click', background1)

function button () {
  document.getElementById('paragraph').innerHTML =
  'Look It Change, the Color also did, oh wow and the FONT SIZE!!'
  document.getElementById('paragraph').style.color = 'teal'
  document.getElementById('paragraph').style.fontSize = '500%'
  document.getElementById('background1').style.backgroundColor = 'red'
}

function block () {
  document.getElementById('diamond').src =
'Ocelots.png'
  document.getElementById('background1').style.backgroundColor = 'pink'
}
