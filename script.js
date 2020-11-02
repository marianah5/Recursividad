function texto ( cadena ) {
  document.write ( cadena + "<br>" );
}
function Fibbonacci (num) {
  if (num === 1){ 
        return 1;
  }
  else if (num === 2){ 
      return 1;
  }
    else {
        return (Fibbonacci(num - 1) + Fibbonacci (num - 2));
       
    }
}
var n = 7
respuesta = Fibbonacci ( n );


texto ( "Fibbonacci de N" );
texto ( n + " = " + respuesta ); 
