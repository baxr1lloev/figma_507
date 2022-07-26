let show = document.querySelector('.show')
let form = document.forms.register
let inputs = form.querySelectorAll('input')
let second_leader = document.querySelector('.second_leader')
let i_1 = document.querySelector('.i_1')
let i_2 = document.querySelector('.i_2')


let pattern = {
    name: /^[a-z ,.'-]+$/i,
    year: /[0-9]/g,
}


function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid');
        field.classList.remove('invalid');
    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
    }
}


inputs.forEach((input) => {
    input.onkeyup = () => {
        validate(input, pattern[input.name])
    }
})

show.onclick = () => {
    if(i_1.classList.contains('invalid') || i_1.length === 0 || i_2.classList.contains('invalid') || i_2.length === 0) {
        alert('error')
    }
}





















































