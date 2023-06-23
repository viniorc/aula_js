const buscarUsuarios = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json();

    return usuarios;
}

const usuarioToRowHTML = (usuario) => {

    return`
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.username}</td>
            <td>${usuario.website}</td>
        </tr>
    `
}
const contruir_tabela = async () => {

    const usuarios = await buscarUsuarios();
    
    const content = document.getElementById('tbody');

    const usuariosHTML = usuarios.map(usuarioToRowHTML)

    usuariosHTML.forEach((elementoHTML) => content.innerHTML += elementoHTML)
    
    }

    contruir_tabela()