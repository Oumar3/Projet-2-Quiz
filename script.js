const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

let form = document.querySelector('.quiz-form')

form.addEventListener('submit',handleForm);

function handleForm(e){
    e.preventDefault();
    let radioValue = document.querySelectorAll('input[type="radio"]:checked')
    let results = [];
    radioValue.forEach((val,index)=>{
        if(val.value===responses[index]){
            results.push(true)
        }else{
            results.push(false)
        }
    })

    showResultat(results);
    colorQuestion(results)
}

let titleResult = document.querySelector('.results h2');
let titleResul = document.querySelector('.results');
let markResult = document.querySelector('.mark');
let helpResult = document.querySelector('.help');

function showResultat(resultat){
    let errorsNumber = resultat.filter(el=>el===false).length;
    let trueNumber = resultat.filter(el=>el===true).length;
    console.log(errorsNumber);
  switch (errorsNumber) {
    case 0:
      titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
      titleResul.style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)"
      helpResult.textContent = "Quelle culture ...";
      helpResult.style.display = "block";
      markResult.innerHTML = `Score : <span> ${trueNumber}/ ${resultat.length}</span>`;
      markResult.style.display = "block";
      break;
    case 1:
      titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = `Score : <span> ${trueNumber}/ ${resultat.length}</span>`;
      markResult.style.display = "block";
      break;
    case 2:
      titleResult.textContent = `✨ Encore un effort ... 👀`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = `Score : <span> ${trueNumber}/ ${resultat.length}</span>`;
      markResult.style.display = "block";
      break;
    case 3:
      titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = `Score : <span> ${trueNumber}/ ${resultat.length}</span>`;
      markResult.style.display = "block";
      break;
    case 4:
      titleResult.textContent = `😭 Peut mieux faire ! 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = `Score : <span> ${trueNumber}/ ${resultat.length}</span>`;
      markResult.style.display = "block";
      break;
    case 5:
      titleResult.textContent = `👎 Peut mieux faire ! 👎`;
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = `Score : <span> ${trueNumber}/ ${resultat.length}</span>`;
      break;

    default:
      titleResult.textContent = "Wops, cas innatendu.";
  }
}

let question = document.querySelectorAll('.question-block')

function colorQuestion(results){
    results.forEach((q,index)=>{
        if(results[index]){
            question[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)"
        }else{
            question[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)"
        }
    })
}