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





  
const questions = [
    'Do you like java script? (yes/no)',
    'Do you like node.jd? (yes/no)',
    'Last but not least, Do you like pizza? (yes/no)'
  ]


function askQuestion() {

    const answers = [];
  
    for (let i = 0; i < questions.length; i++) {
      let input = prompt(questions[i]);

      if (input !== 'yes'&& input !=='no'){
        answers.push('invaled answare')
      }
      else{

      answers.push(input);
        }
    }
  
    return answers;
  }
  
  const answers = askQuestion();
  
  console.log(answers);
  
  
  