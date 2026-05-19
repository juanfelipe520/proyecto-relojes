fetch('data/noticias.json')
.then(response => response.json())
.then(data => {

const contenedor = document.getElementById('noticias');

data.forEach(noticia => {

contenedor.innerHTML += `
<div class="card">
<h3>${noticia.titulo}</h3>
<p>${noticia.texto}</p>
</div>
`;

});

});