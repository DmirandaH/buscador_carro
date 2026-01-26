const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2019, 
        precio: 80000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A3', 
        year: 2017, 
        precio: 55000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 
        'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2017, 
        precio: 60000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico' 
    },


	{
    marca: 'Toyota',
    modelo: 'Corolla',
    year: 2016,
    precio: 20000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'manual'
  },
  {
    marca: 'Chevrolet',
    modelo: 'Onix',
    year: 2017,
    precio: 22000,
    puertas: 4,
    color: 'Gris',
    transmision: 'manual'
  },
  {
    marca: 'Nissan',
    modelo: 'Sentra',
    year: 2018,
    precio: 26000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automática'
  },
  {
    marca: 'Kia',
    modelo: 'Sportage',
    year: 2019,
    precio: 35000,
    puertas: 5,
    color: 'Rojo',
    transmision: 'automática'
  },
  {
    marca: 'Hyundai',
    modelo: 'Tucson',
    year: 2020,
    precio: 42000,
    puertas: 5,
    color: 'Negro',
    transmision: 'automática'
  },
  {
    marca: 'Mazda',
    modelo: 'CX-5',
    year: 2021,
    precio: 48000,
    puertas: 5,
    color: 'Plata',
    transmision: 'automática'
  },
  {
    marca: 'Volkswagen',
    modelo: 'Tiguan',
    year: 2022,
    precio: 52000,
    puertas: 5,
    color: 'Blanco',
    transmision: 'automática'
  },
  {
    marca: 'Honda',
    modelo: 'CR-V',
    year: 2023,
    precio: 60000,
    puertas: 5,
    color: 'Gris',
    transmision: 'automática'
  },
  {
    marca: 'Ford',
    modelo: 'Explorer',
    year: 2024,
    precio: 70000,
    puertas: 5,
    color: 'Negro',
    transmision: 'automática'
  },
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2025,
    precio: 85000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automática'
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2026,
    precio: 90000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual'
  },

  {
  marca: 'Toyota',
  modelo: 'Corolla',
  year: 2016,
  precio: 20000,
  puertas: 4,
  color: 'Blanco',
  transmision: 'manual'
},
{
  marca: 'Chevrolet',
  modelo: 'Cruze',
  year: 2016,
  precio: 23000,
  puertas: 4,
  color: 'Gris',
  transmision: 'manual'
},
{
  marca: 'Nissan',
  modelo: 'Versa',
  year: 2016,
  precio: 21000,
  puertas: 4,
  color: 'Azul',
  transmision: 'manual'
},
{
  marca: 'Ford',
  modelo: 'Focus',
  year: 2016,
  precio: 24000,
  puertas: 4,
  color: 'Negro',
  transmision: 'automática'
},
{
  marca: 'Hyundai',
  modelo: 'Elantra',
  year: 2016,
  precio: 25000,
  puertas: 4,
  color: 'Plata',
  transmision: 'automática'
},
{
  marca: 'Kia',
  modelo: 'Rio',
  year: 2016,
  precio: 22000,
  puertas: 4,
  color: 'Rojo',
  transmision: 'manual'
},
{
  marca: 'Mazda',
  modelo: '3',
  year: 2016,
  precio: 26000,
  puertas: 4,
  color: 'Blanco',
  transmision: 'automática'
},
{
  marca: 'Volkswagen',
  modelo: 'Jetta',
  year: 2016,
  precio: 27000,
  puertas: 4,
  color: 'Gris',
  transmision: 'manual'
},
{
  marca: 'Renault',
  modelo: 'Fluence',
  year: 2016,
  precio: 21000,
  puertas: 4,
  color: 'Azul',
  transmision: 'manual'
},
{
  marca: 'Peugeot',
  modelo: '308',
  year: 2016,
  precio: 23000,
  puertas: 4,
  color: 'Negro',
  transmision: 'automática'
},

/* ===== 2017 ===== */
{
  marca: 'Toyota',
  modelo: 'Camry',
  year: 2017,
  precio: 30000,
  puertas: 4,
  color: 'Gris',
  transmision: 'automática'
},
{
  marca: 'Chevrolet',
  modelo: 'Malibu',
  year: 2017,
  precio: 32000,
  puertas: 4,
  color: 'Negro',
  transmision: 'automática'
},
{
  marca: 'Nissan',
  modelo: 'Sentra',
  year: 2017,
  precio: 28000,
  puertas: 4,
  color: 'Blanco',
  transmision: 'manual'
},
{
  marca: 'Ford',
  modelo: 'Fusion',
  year: 2017,
  precio: 35000,
  puertas: 4,
  color: 'Azul',
  transmision: 'automática'
},
{
  marca: 'Hyundai',
  modelo: 'Sonata',
  year: 2017,
  precio: 33000,
  puertas: 4,
  color: 'Plata',
  transmision: 'automática'
},
{
  marca: 'Kia',
  modelo: 'Optima',
  year: 2017,
  precio: 34000,
  puertas: 4,
  color: 'Rojo',
  transmision: 'automática'
},
{
  marca: 'Mazda',
  modelo: '6',
  year: 2017,
  precio: 36000,
  puertas: 4,
  color: 'Negro',
  transmision: 'automática'
},
{
  marca: 'Volkswagen',
  modelo: 'Passat',
  year: 2017,
  precio: 37000,
  puertas: 4,
  color: 'Blanco',
  transmision: 'automática'
},
{
  marca: 'Honda',
  modelo: 'Civic',
  year: 2017,
  precio: 29000,
  puertas: 4,
  color: 'Gris',
  transmision: 'manual'
},
{
  marca: 'Subaru',
  modelo: 'Impreza',
  year: 2017,
  precio: 31000,
  puertas: 4,
  color: 'Azul',
  transmision: 'manual'
},

];
