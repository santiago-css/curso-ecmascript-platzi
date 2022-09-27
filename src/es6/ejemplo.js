var myArray = [1,1,2,1,1];
tam  = myArray.length;
for (var i = 0; i < tam; i++) {
    contador = 0;
    for (var j = 0; j < tam; j++){

        if (myArray[i] == myArray[j])
        contador = contador+1;
    }}
    console.log(contador)