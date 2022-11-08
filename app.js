console.log('Segunda entrega JavaScript - Estructura, variables y objetos - Zacca Leonardo')

alert('¡Bienvenido a FiLa3D! Ingrese el número de alguna de las siguientes Impresoras 3D en stock a comprar');
let stock;
let impresora;
let costo;
let valor;

const impresoras = [
    {
        Impresora: 'AnetET4',
        Costo: 50000
    },
    {
        Impresora: 'Creality3D',
        Costo: 60000
    },
    {
        Impresora: 'Artillery Sidewinder X1',
        Costo: 75000
    },
    {
        Impresora: 'Hellbot Magna 2',
        Costo: 45000
    },
    {
        Impresora: 'Creality Ender 6',
        Costo: 77000
    }

]
impresoras.forEach((impresora) => {
    alert(impresora.Impresora + ' Costo: ' + impresora.Costo + '$')
})
do {
    valor = prompt('Máquinas en stock:\n 1-AnetET4   $50000\n2-Creality3D   $60000\n3-Artillery Sidewinder X1   $75000\n4-Hellbot Magna 2   $45000\n5-Creality Ender 6   $77000');
    switch (valor) {
        case '1':
            alert('Usted eligió una impresora AnetET4');
            impresora = ('AnetET4');
            do {
                stock = prompt('¿Cuantos equipos desea comprar?');
                if (stock < 1) {
                    alert('Por favor ingrese un número válido');
                } else if (stock > 10) {
                    alert('El valor supera al stock de este equipo, por favor ingrese de nuevo');
                }
                costo = 50000 * stock;
            } while (stock < 1 || stock > 10);
            break;
        case '2':
            alert('Usted eligió una impresora Creality3D');
            impresora = ('Creality3D');
            do {
                stock = prompt('¿Cuantos equipos desea comprar?');
                if (stock < 1) {
                    alert('Por favor ingrese un número válido');
                } else if (stock > 10) {
                    alert('El valor supera al stock de este equipo, por favor ingrese de nuevo');
                }
                costo = 60000 * stock;
            } while (stock < 1 || stock > 10);
            break;
        case '3':
            alert('Usted eligió una impresora Artillery Sidewinder X1');
            impresora = ('Artillery Sidewinder X1');
            do {
                stock = prompt('¿Cuantos equipos desea comprar?');
                if (stock < 1) {
                    alert('Por favor ingrese un número válido');
                } else if (stock > 10) {
                    alert('El valor supera al stock de este equipo, por favor ingrese de nuevo');
                }
                costo = 75000 * stock;
            } while (stock < 1 || stock > 10);
            break;
        case '4':
            alert('Usted eligió una impresora Hellbot Magna 2');
            impresora = ('Hellbot Magna 2');
            do {
                stock = prompt('¿Cuantos equipos desea comprar?');
                if (stock < 1) {
                    alert('Por favor ingrese un número válido');
                } else if (stock > 10) {
                    alert('El valor supera al stock de este equipo, por favor ingrese de nuevo');
                }
                costo = 45000 * stock;
            } while (stock < 1 || stock > 10);
            break;
        case '5':
            alert('Usted eligió una impresora Creality Ender 6');
            impresora = ('Creality Ender 6');
            do {
                stock = prompt('¿Cuantos equipos desea comprar?');
                if (stock < 1) {
                    alert('Por favor ingrese un número válido');
                } else if (stock > 10) {
                    alert('El valor supera al stock de este equipo, por favor ingrese de nuevo');
                }
                costo = 77000 * stock;
            } while (stock < 1 || stock > 10);
            break;
        default:
            alert('Usted ha ingresado un valor incorrecto, por favor seleccione una opción');
            break;
    }
} while (valor == false || valor > 5 || valor < 1);

function compra(impresora, stock) {
    alert('Usted compró ' + stock + ' unidad/es de la impresora ' + impresora + ' con un costo de $' + costo + ' Pesos');
}
compra(impresora, stock);
const array = [stock, impresora, costo];
console.log(array);


