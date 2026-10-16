var WPP_NUMERO='5500000000000';
function enviarWpp(e){
  e.preventDefault();
  var f=e.target;
  var nome=f.querySelector('input[type=text]').value.trim();
  var email=f.querySelector('input[type=email]').value.trim();
  var msg=f.querySelector('textarea').value.trim();
  var texto='Olá! Vim pelo site e gostaria de agendar uma consulta.\n\nNome: '+nome+'\nE-mail: '+email+(msg?'\nMensagem: '+msg:'');
  window.open('https://wa.me/'+WPP_NUMERO+'?text='+encodeURIComponent(texto),'_blank','noopener');
  return false;
}
