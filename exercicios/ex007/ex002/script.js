function verificar() {
  var data = new Date
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length ==  0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente')
  } else {
    var fsex = document.getElementById('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
  }
}