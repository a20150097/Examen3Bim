alert("Bienvenido a la Trivia de la primavera");
var c = 0;
var i = 0;
var p1 = prompt ("1. ¿En que departamento se encuentra el lago titicaca?\nA: Tacna\nB: Puno\nC: Cusco");
if (p1 == "B"){
    c = c+1;
}else{
    i=i+1;
}

var p2 = prompt ("2. ¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA: Lima e Ica\nB: Arequipa y Tacna\nC: Piura y Tumbes\n");
if (p2 == "C"){
    c = c+1;
}else{
    i=i+1;
}


var p3 = prompt ("3. Plato típico de la Selva peruana\nA: Tacacho con cecina\nB: Arroz con pollo\nC: Lomo saltado\n");
if (p3 == "A"){
    c = c+1;
}else{
    i=i+1;
}

if (c > i){
    document.write(nombre + "¡Felicidades! Pasaste la trivia:<br>");
 
    document.write("Respuestas correctas: "+c+"<br>");
    document.write("Respuestas Incorrectas: "+i);
 }else{
     document.write(nombre + "Puedes hacerlo mejor:<br>");
     document.write("Respuestas correctas: "+c+"<br>");
  
     document.write("Respuestas Incorrectas: "+i);
 }