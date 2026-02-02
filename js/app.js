
// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const combustible = document.querySelector('#combustible');
const kilometrajeMin = document.querySelector('#kilometrajeMin');
const kilometrajeMax = document.querySelector('#kilometrajeMax');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;



// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
    combustible: '',
    kilometrajeMin: '',
    kilometrajeMax: ''

}


//Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // muestra los auto al cargar 


    // llena las opciones del campo años

    llenarSelect();


})

// Event listener para los select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();


});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();

    
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

     filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

      filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});


combustible.addEventListener('change', e => {
    datosBusqueda.combustible = e.target.value;

    filtrarAuto();
});

kilometrajeMin.addEventListener('change', e => {
    datosBusqueda.kilometrajeMin = parseInt(e.target.value);

    filtrarAuto();
});

kilometrajeMax.addEventListener('change', e => {
    datosBusqueda.kilometrajeMax = parseInt(e.target.value);

    filtrarAuto();
});






// Funciones

function mostrarAutos(autos) {

    limpiarHTML(); //Elimina el HTML previo

    autos.forEach( auto => { 

        const {marca, modelo, year, puertas, transmision, precio, color, combustible,kilometraje } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = ` 
            ${marca} ${modelo} -${year} - ${puertas} - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color} - Combustible: ${combustible} - Kilometraje: ${kilometraje} km
        
        
        `;

        // insertar en el html
        resultado.appendChild(autoHTML);
    })

}


// Limpiar HTML

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);

    }

}

//Genera los años del select
function llenarSelect() {
    
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
   

}


// Función que filtra en base a la búsqueda

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor).filter(filtrarCombustible).filter(filtrarKilometrajeMin).filter(filtrarKilometrajeMax);



   if (resultado.length) {
       mostrarAutos(resultado);
   } else {
        noResultado();
   }
 
}

function noResultado () {

    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'NO Hay Resultados,intenta una nueva búsqueda con otras opciones';
    resultado.appendChild(noResultado);

}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }

  return auto;
     
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;  
  if (year) {
    return auto.year === year;
  }

  return auto;
     
}

function filtrarMinimo (auto) {
     const {minimo} = datosBusqueda;
  if (minimo) {
    return auto.precio >= minimo;
  }

  return auto;
    

}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }

    return auto;
}



function filtrarPuertas (auto) {
    const {puertas} = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }

    return auto;
}


function filtrarTransmision (auto) {
    const {transmision} = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;

    }

    return auto;
}


function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if (color) {
        return auto.color === color;

    }

    return auto;
}


function filtrarCombustible(auto) {
    const {combustible} = datosBusqueda;
    if (combustible) {
        return auto.combustible === combustible;

    }

    return auto;
}



function filtrarKilometrajeMin(auto) {
    const {kilometrajeMin} = datosBusqueda;
    if (kilometrajeMin) {
        return auto.kilometraje >= kilometrajeMin;

    }

    return auto;
}


function filtrarKilometrajeMax (auto) {
    const {kilometrajeMax} = datosBusqueda;
    if (kilometrajeMax) {
        return auto.kilometraje <= kilometrajeMax;
    }
     return auto;
}



// agregar estas dos nuevas opciones al proyecto : Kilometraje -  Estado del vehículo


/* 2. Kilometraje

Muy usado en marketplaces reales.

0 – 20.000 km

20.000 – 50.000 km

50.000 – 100.000 km

+100.000 km */



/*4. Estado del vehículo
Nuevo
Usado
Certificado */
