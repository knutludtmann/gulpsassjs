$(function() {
  
var b = box();
b.set('hallo'); 
$('header, footer').append( ( b.get() + b.type()) );


}); //on load

