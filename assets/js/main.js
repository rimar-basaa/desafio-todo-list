const tareas = [
    {id: 0, tarea: "llevar auto revision tecnica", estado: false},
    {id: 1, tarea: "terminar desafio antes del martes", estado: false},
    {id: 2, tarea: "cotizar nuevo notebook", estado: false},
];
const listado = document.querySelector("#listado");
const cantidad = document.querySelector("#cantidad");
const realizadas = document.querySelector("#realizadas");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
let counterId = 3;
renderDom();

// agregar nueva tarea -------------------------------------------------------
btn.addEventListener("click", () => {
    const nueva = input.value;
    if (nueva == "") {
        alert("Debes escribir una nueva Tarea");
    } else {
        tareas.push({id: counterId, tarea: nueva, estado: false});
    input.value = "";
    counterId ++;
    renderDom();
    }     
});

// modificar tarea -----------------------------------------------------------
function modifica(id) {    
    const check = document.getElementById(id);    
    for (let tarea of tareas) {
        if (tarea.id == id) {
            tarea.estado = check.checked;
        }
    }
    renderDom()        
}

// eliminar tarea -------------------------------------------------------------
function borrar(id) {
    const indice = tareas.findIndex((dato) => dato.id == id)
    tareas.splice(indice, 1);
    renderDom();
}

// renderizar DOM ------------------------------------------------------------
function renderDom() {
    let html = "";
    let estado = "";
    for (let tarea of tareas){
        if (tarea.estado == true) {
            estado = "checked";
        }
        html += `
        <tr>
            <td class="th-small">${tarea.id}</td>
            <td>${tarea.tarea}</td>
            <td class="th-small">
                <input type="checkbox" id="${tarea.id}" ${estado} onclick="modifica('${tarea.id}')">
            </td>
            <td class="th-small">
                <button class="icobtn" id=""onclick="borrar(${tarea.id})">X</button>
            </td>
        </tr>`;
        estado = "";                
    }
    listado.innerHTML = html;
    cantidad.innerHTML = `Cantidad: ${tareas.length}`;
    const ready = tareas.filter(tarea => tarea.estado == true);
    realizadas.innerHTML = `Realizadas: ${ready.length}`;

    //console.log(tareas); //solo monitoreo array   
}