const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
form.addEventListener('chenge', save)

button.addEventListener('click', add)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert('Dia já incluso🛑')
        return
    }
    alert('Adicionado com sucesso✅')
    nlwSetup.addDay(today)
}

function save() {
    console.log(nlwSetup.data)

    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}

    const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
    
    nlwSetup.setData(data)
    nlwSetup.load()