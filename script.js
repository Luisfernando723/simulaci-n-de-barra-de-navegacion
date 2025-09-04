document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const suggestionsList = document.getElementById('suggestions-list');
    const searchButton = document.querySelector('.search-button');

    // Sugerencias: dos lugares conocidos de Colombia por cada letra
    const suggestions = [
        'Armenia', 'Apartadó',
        'Barranquilla', 'Bogotá',
        'Cartagena', 'Cali',
        'Duitama', 'Dagua',
        'Envigado', 'El Banco',
        'Florencia', 'Facatativá',
        'Girardot', 'Guaduas',
        'Honda', 'Hato Corozal',
        'Ibagué', 'Ipiales',
        'Jamundí', 'Jericó',
        'La Dorada', 'Leticia',
        'Manizales', 'Medellín',
        'Neiva', 'Nobsa',
        'Ocaña', 'Obando',
        'Pasto', 'Popayán',
        'Quibdó', 'Quimbaya',
        'Riohacha', 'Riosucio',
        'Santa Marta', 'Sincelejo',
        'Tunja', 'Turbo',
        'Uribia', 'Ubaté',
        'Valledupar', 'Villavicencio',
        'Yopal', 'Yarumal',
        'Zipaquirá', 'Zarzal'
    ];

    // Mostrar sugerencias al escribir
    searchBar.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        suggestionsList.innerHTML = '';
        if (value) {
            const filtered = suggestions.filter(s => s.toLowerCase().startsWith(value));
            filtered.forEach(s => {
                const li = document.createElement('li');
                li.textContent = s;
                li.onclick = () => {
                    searchBar.value = s;
                    suggestionsList.classList.remove('active');
                };
                suggestionsList.appendChild(li);
            });
            if (filtered.length) {
                suggestionsList.classList.add('active');
            } else {
                suggestionsList.classList.remove('active');
            }
        } else {
            suggestionsList.classList.remove('active');
        }
    });

    // Ocultar sugerencias al perder foco
    searchBar.addEventListener('blur', () => {
        setTimeout(() => suggestionsList.classList.remove('active'), 100);
    });

    // Acción de búsqueda
    searchButton.addEventListener('click', () => {
        alert(`Buscando: ${searchBar.value}`);
    });
});
