const comparar2numeros = (n1, n2) => {
    if (n1 < n2) {
        console.log(`O número ${n1} é menor que ${n2}`);
    }
    else if (n1 === n2) {
        console.log(`O número ${n1} é igual a ${n2}`);
    }else{
        console.log(`O número ${n1} é maior que ${n2}`);
    }
}

comparar2numeros(20,40)
comparar2numeros(20,20)
comparar2numeros(3,20)