const tBody = document.getElementById("tbody")
const addBtn = document.getElementById("addBtn")
const firstNameInp = document.getElementById("firstname")
const lastNameInp = document.getElementById("lastname")
const ageInp = document.getElementById("age")
const imageInp=document.getElementById("image")
let users = []
let id = 0;
class User {
    constructor(firstname, lastname, age, image) {
        this.id = id,
            this.firstname = firstname,
            this.lastname = lastname,
            this.age = age,
            this.image = image,
            id++
    }
}
function addUser(firstname, lastname, age, image) {
    let newUser = new User(firstname, lastname, age,image)
    users.push(newUser)
    renderUI(users)
}
function renderUI(array) {
     let innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const { id, firstname, lastname, age,image} = array[i]
        innerHTML += `
        <tr>
        <th scope="row">${id}</th>
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${age}</td>
        <td>${image}</td>
      </tr>`
    }
    tBody.innerHTML = innerHTML
}
addBtn.onclick = function (e) {
    e.target.preventDefault()
    let firstNameValue = firstNameInp.value
    let lastNameValue = lastNameInp.value
    let ageValue = ageInp.value
    let imageValue = imageInp.value
    addUser(firstNameValue, lastNameValue, ageValue, imageValue)
    firstNameInp.value = ""
    lastNameInp.value = ""
    ageInp.value = ""
    imageInp.value = ""
}