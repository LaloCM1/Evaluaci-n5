const autos = [
    { 
        id: 1,
        marca: 'Subaru',
        modelo: 'XV',
        color: 'Negro',
        año: 2020,
        precio: '$ 220,000.00 MN*',
    },
    {
        id: 2,
        marca: 'Land Rover',
        modelo:  'Discovery 3.0 Hse Mt',
        color: 'Gris',
        año: 2016,
        precio: '$ 1,050,000.00 MN*',
    },
    {
        id: 3,
        marca: 'Subaru',
        modelo: 'Forester Sport',
        color: 'Dark Blue Pearl',
        año: 2021,
        precio: '$ 579,900.00 MN*',
    },
    {
        id: 4,
        marca: 'Ford',
        modelo: 'Focus 2.0 St L4 T At',
        color: 'Negro',
        año: 2014,
        precio: '$ 239,000.00 MN*',
    },
    {
        id: 5,
        marca: 'Subaru',
        modelo: 'WRX 2.0 L At Cvt',
        color: 'Rojo',
        año: 2020,
        precio: '$ 647,900 MN*',
    },
    {
        id: 6,
        marca: 'Volkswagen ',
        modelo: 'Jetta 2.0 Tiptronic At',
        color: 'Blanco',
        año: 2017,
        precio: '$ 175,000 MN*',
    },
    {
        id: 7,
        marca: 'Volkswagen',
        modelo: 'Touareg 3.0 V6 T Diesel Boton Encendido At',
        color: 'Blanco',
        año: 2014,
        precio: '$ 370,000 MN*',
    },
    {
        id: 8,
        marca: 'Toyota',
        modelo: 'Tacoma 4.0 Trd Sport V6/ At',
        color: 'Blanco',
        año: 2015,
        precio: '$ 342,000 MN*',
    },
    {
        id: 9,
        marca: 'Toyota',
        modelo: 'Hilux 2.7 Cabina Doble Sr Mt',
        color: 'Rojo',
        año: 2016,
        precio: '$ 348,000 MN*',
    },
    {
        id: 10,
        marca: 'Subaru',
        modelo: ' Impreza 2.0 I',
        color: 'Azul marino',
        año: 2017,
        precio: '$ 249,000 MN*',
    },
    
];

function printCars() {
    const container = document.getElementById('container-autos');
    let html = ''; 
    autos.forEach((autos) => {
        html += `<tr>
                        <td>${autos.marca}</td>
                        <td>${autos.modelo}</td>
                        <td>${autos.color}</td>
                        <td>${autos.año}</td>
                        <td>${autos.precio}</td>
                        <td>
                        <button onclick="deleteCar(${autos.id})" class="btn btn-danger">Eliminar</button> 
                        </td>
                </tr>`;
    });
    container.innerHTML = html;
}

function deleteCar(id) {
   const index = autos.findIndex((user) => user.id == id);
   autos.splice(index, 1);
   printCars();
}

function addUser(){
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    const id = autos[autos.length-1].id + 1;
    
    const newUser = {
        marca,
        modelo,
        color,
        año,
        precio,
        id
    }
    autos.push(newUser);
    printCars();

    document.getElementById('form-user').reset();

}



printCars()