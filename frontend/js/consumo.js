document.addEventListener('DOMContentLoaded', function () {
    const frutasContainer = document.querySelector('#frutas-Container')
    const url = `http://127.0.0.1:8000/frutas`;
    const frutasForm = document.querySelector('#frutas-form')
    let allFrutas = []

    fetch(`${url}`)
        .then(response => response.json())
        .then(frutasData => frutasData.forEach(function (fruta) {
            allFrutas = frutasData
            frutasContainer.innerHTML += `
            <div id=frutas-${fruta.id}>
                <h3>Nombre: ${fruta.nombre}</h3>
                <ul>
                    <li><p>Tipo: ${fruta.tipo}</p></li>
                    <li><p>Cantidad: ${fruta.cantidad}</p></li>
                </ul>
                <button data-id="${fruta.id}" id="edit-${fruta.id}" data-action="edit">Edit</button>
                <button data-id="${fruta.id}" id="delete-${fruta.id}" data-action="delete">Delete</button>
            </div>
            <div id=edit-fruta-${fruta.id}>
            </div>
            `;
        }))

    frutasForm.addEventListener('submit', (e) => {
        event.preventDefault();

        const nombreInput = frutasForm.querySelector('#nombre').value
        const tipoInput = frutasForm.querySelector('#tipo').value
        const cantidadInput = frutasForm.querySelector('#cantidad').value

        fetch(`${url}`, {
            method: 'POST',
            body: JSON.stringify({
                nombre: nombreInput,
                tipo: tipoInput,
                cantidad: cantidadInput
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(fruta => {
                allFrutas.push(fruta)
                frutasContainer.innerHTML += `
            <div id=frutas-${fruta.id}>
                <h3>Nombre: ${fruta.nombre}</h3>
                <ul>
                    <li><p>Tipo: ${fruta.tipo}</p></li>
                    <li><p>Cantidad: ${fruta.cantidad}</p></li>
                </ul>
                <button data-id="${fruta.id}" id="edit-${fruta.id}" data-action="edit">Edit</button>
                <button data-id="${fruta.id}" id="delete-${fruta.id}" data-action="delete">Delete</button>
            </div>
            <div id=edit-fruta-${fruta.id}>
            </div>
            `;
            })

    })

    frutasContainer.addEventListener('click', (e) => {
        if (e.target.dataset.action === 'edit') {

            const editButton = document.querySelector(`#edit-${e.target.dataset.id}`)
            editButton.disabled = true

            const frutasData = allFrutas.find((fruta) => {
                return fruta.id == e.target.dataset.id
            })

            const editForm = frutasContainer.querySelector(`#edit-fruta-${e.target.dataset.id}`)
            editForm.innerHTML = `
            <form class='form' id='edit-fruta' action='index.html' method='post'>
                <form id="frutas-form">
                    <input required id="edit-nombre" placeholder="${frutasData.nombre}">
                    <input required id="edit-tipo" placeholder="${frutasData.tipo}">
                    <input required id="edit-cantidad" placeholder="${frutasData.cantidad}">
                    <input type="submit" value="Edit Fruta">
            </form>
            `;

            editForm.addEventListener("submit", (e) => {
                event.preventDefault()

                const nombreInput = document.querySelector('#edit-nombre').value
                const tipoInput = document.querySelector('#edit-tipo').value
                const cantidadInput = document.querySelector('#edit-cantidad').value
                const editedFruta = document.querySelector(`#frutas-${frutasData.id}`)

                fetch(`${url}/${frutasData.id}/`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        nombre: nombreInput,
                        tipo: tipoInput,
                        cantidad: cantidadInput
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.json())
                    .then(fruta => {
                        editedFruta.innerHTML = `
                    <div id=frutas-${fruta.id}>
                        <h3>Nombre: ${fruta.nombre}</h3>
                        <ul>
                            <li><p>Tipo: ${fruta.tipo}</p></li>
                            <li><p>Cantidad: ${fruta.cantidad}</p></li>
                        </ul>
                        <button data-id="${fruta.id}" id="edit-${fruta.id}" data-action="edit">Edit</button>
                        <button data-id="${fruta.id}" id="delete-${fruta.id}" data-action="delete">Delete</button>
                    </div>
                    <div id=edit-fruta-${fruta.id}>
                    </div>
                    `;
                        editForm.innerHTML = ""
                    })
            })
        } else if (e.target.dataset.action === 'delete') {
            document.querySelector(`#frutas-${e.target.dataset.id}`).remove()
            fetch(`${url}/${e.target.dataset.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
        }
    })
})