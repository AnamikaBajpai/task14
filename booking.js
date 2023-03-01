
//  const myForm = document.querySelector('#my-form');
// // const nameInput =document.querySelector('#name');
// // const emailInput = document.querySelector('#email');
// // const phoneInput = document.querySelector('#phone');
// // const msg =document.querySelector('.msg');
// // const userList = document.querySelector('#users');

 //myForm.addEventListener('submit' , onSubmit);

function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phonenumber =event.target.phone.value;
    
    // localStorage.setItem('name' , name);
    // localStorage.setItem('email' , email);
    // localStorage.setItem('phonenumber' , phonenumber);

    const obj = {
        name,
        email,
       phonenumber
    }
   localStorage.setItem(obj.email , JSON.stringify(obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber));
   showUserOnScreen(obj);

}

function showUserOnScreen(obj) {
    const parentElem = document.getElementById('users');
    const childElem = document.createElement('li');
    childElem.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber;

     const deleteButton = document.createElement('input');
     deleteButton.type = "button";
     deleteButton.value ="Delete";

     const editButton = document.createElement('input');
     editButton.type = "button";
     editButton.value =" Edit";

     deleteButton.onclick =() => {
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);

        editButton.onclick =() => {
            localStorage.removeItem(obj.email);
            parentElem.removeChild(childElem);

            document.getElementById('name').value = obj.name;
            document.getElementById('email').value = obj.email;
            document.getElementById('phone').value = obj.phone;
          
        }
     }

    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
 
    //parentElem.innerHTML = parentElem.innerHTML + '<li>$ {obj.name} - ${obj-email} - ${obj-phonenumber} </li>'
}
























// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value ==='' || emailInput.value === '' || phoneInput.value ==='') {
//         msg.classList.add('error');
//         msg.innerHTML =' please enter all fields';

//         setTimeout(() => msg.remove(),3000);
      
//     } else {
        
   

//     // const li = document.createElement('li');
//     // //li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${phoneInput.value}`));

    
//     // userList.appendChild(li);

    // nameInput.value ='';
    // emailInput.value ='';
    // phoneInput.value ='';



    
// }


// }
// }