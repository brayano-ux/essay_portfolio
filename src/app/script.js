const mot = document.querySelector('.ajouter');
const input = document.getElementById('input');
const liste = document.getElementById('empla');

mot.addEventListener('click', ajouter);
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        ajouter();
    }
});
function ajouter() {
    const valeur = input.value.trim();
    if (!valeur) {
        input.focus();
        return;
    }

    const div = document.createElement('div');
    div.className = 'bon';

    const span = document.createElement('span');
    span.textContent = valeur;
    div.appendChild(span);

    const modifier = document.createElement('button');
    modifier.type = 'button';
    modifier.textContent = 'Modifier';
    modifier.addEventListener('click', function() {
        const nouveau = prompt('Modifier le mot', span.textContent);
        if (nouveau !== null && nouveau.trim() !== '') {
            span.textContent = nouveau.trim();
        }
    });

    const supprimer = document.createElement('button');
    supprimer.type = 'button';
    supprimer.textContent = 'Supprimer';
    supprimer.addEventListener('click', function() {
        div.remove();
    });

    div.appendChild(modifier);
    div.appendChild(supprimer);
    liste.appendChild(div);

    input.value = '';
    input.focus();
}