let User = prompt ('Please enter ypur name:');
    console.log(User)

let Gender = prompt ('Please chose you gender:')

    if (Gender === 'male'){
        console.log(Gender);
    }
    else if (Gender === 'female'){
        console.log(Gender)
    }
    else {
        prompt('Please enter only "male" or "female"') 
        console.log(Gender)
    }

let Age = prompt('Please enter your age: ')
   
    if (Age <= 0){
        alert('Please enter a number bigger than Zero ')
    }
    else console.log(Age)

let welcomeMessage = confirm('Do you want to skip the welcoming message')

if (!welcomeMessage) {
    if (Gender === 'male') {
      alert('Welcome, Mr.' + User );
    } else if (Gender === 'female') {
      alert('Welcome, Ms.' + User);
    } else {
      alert('Welcome,'+ User );
    }
}
