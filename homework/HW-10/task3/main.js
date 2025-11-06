let someForm = document.forms.someForm;
// let sendButton = someForm.sendButton;
// sendButton.addEventListener('click', () => {
//     let nameValue = someForm.name.value;
//     let surnameValue = someForm.surname.value;
//     let ageValue = someForm.age.value;
//     let obj = {nameValue, surnameValue, ageValue};
//     console.log(obj);
// })
let target = document.getElementById('target');
someForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let nameValue = someForm.name.value;
    let surnameValue = someForm.surname.value;
    let ageValue = someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj)
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
})

