
// Code for display selected box

function selectOption(selected, price) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('active'));
    selected.classList.add('active');
    selected.querySelector('input').checked = true;

    document.getElementById('total-price').textContent = price.toFixed(2);
}