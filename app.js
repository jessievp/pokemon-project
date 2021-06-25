let count = 70


function render(){
	let container = document.getElementById('pokemon')
container.innerHTML = `<img class="poke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${count}.svg">`
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')

prev.onclick = function(){
	if (count > 1) {
	count = count - 1
	render()
}
}

next.onclick = function(){
	if (count < 650) {
	count = count + 1
	render()
}
}

render()