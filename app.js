const formAdd = document.querySelector('form.add');
const todos = document.querySelector('.todos ');
const delet = document.querySelector('.delete');
const search = document.querySelector('.search input');

const searchTerm = (term) => {
	Array.from(todos.querySelectorAll('li'))
		.filter((fterm) => {
			// return fterm.textContent.includes(term);
			return !fterm.textContent.includes(term);
		})
		.forEach((item) => {
			item.classList.add('filtered');
			console.log(item);
		});

	Array.from(todos.querySelectorAll('li'))
		.filter((fterm) => {
			// return fterm.textContent.includes(term);
			return fterm.textContent.includes(term);
		})
		.forEach((item) => {
			item.classList.remove('filtered');
			console.log(item);
		});
};

search.addEventListener('keyup', (e) => {
	let term = search.value.trim().toLowerCase();
	searchTerm(term);
});

formAdd.addEventListener('submit', (e) => {
	e.preventDefault();
	let li = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${formAdd.add.value.trim()}</span>
                <i class="far fa-trash-alt delete" aria-hidden="true"></i>
            </li>
    `;
	if (formAdd.add.value) {
		todos.innerHTML += li;
		formAdd.reset();
	}
});

todos.addEventListener('click', (e) => {
	if (
		// e.target.getAttribute('class', 'delete') &&
		// e.target.parentElement.classList.contains('list-group-item')

		e.target.classList.contains('delete')

		// e.target.getAttribute('class', 'delete')
	) {
		e.target.parentElement.remove();
		// console.log(`${e.target.parentElement.innerText.trim()} has removed`);
	}
});
