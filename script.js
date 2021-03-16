document.getElementById('button').addEventListener('click', button)

function button () {
  document.getElementById('paragraph').innerHTML =
  'Look It Change, the Color also did, oh wow and the FONT SIZE!!'
  document.getElementById('paragraph').style.color = 'orange'
  document.getElementById('paragraph').style.fontSize = '500%'
}
