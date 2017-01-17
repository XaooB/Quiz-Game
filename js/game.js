let container = document.querySelector('.contaier'),
    arrayPasswords = [
        {
            desc: 'Choć posiada pancerz, wcale nie wojuje. Choć ma cztery nogi, wolno spaceruje.',
            url: 'images/zolw.jpg',
            pass: 'żółw'
        },
        {desc: 'W nocnej ciszy łowi myszy.', url: 'images/kot.jpg', pass: 'kot'},
        {desc: 'Jest, rudy chytry i cwany', url: 'images/lis.jpg', pass: 'lis'},
        {desc: 'Wije się i syczy.', url: 'images/waz.jpg', pass: 'wąż'},
        {
            desc: 'Mieszka w głębokim lesie,choć przypomina Burka, na śniadanie najchętniej zje Czerwonego Kapturka.',
            url: 'images/wilk.jpg',
            pass: 'wilk'
        },
        {desc: 'Może być polarny lub brunatny.', url: 'images/niedzwiedz.jpg', pass: 'niedźwiedź'},
        {desc: 'Dobre ma zwyczaje, ludziom mleko daje.', url: 'images/krowa.jpg', pass: 'krowa'}
    ],
    arrayLetters = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż'],
    h1Container = container.querySelector('h1'),
    imageContainer = container.querySelector('img'),
    passwordContainer = container.querySelector('#haslo'),
    lettersContainer = container.querySelector('#literki');

let startGame = () => {
    let index = Math.floor(Math.random() * 7),
        passwordLength = arrayPasswords[index].pass.length;

    h1Container.innerHTML = arrayPasswords[index].desc;
    imageContainer.src = './images/questionMark.png';
    generateLi(passwordLength);
    let liPass = container.querySelectorAll('#haslo li');

    generateLetters();
    let letters = lettersContainer.querySelectorAll('li');

    for (let i = 0; i < arrayLetters.length; i++) {
        letters[i].addEventListener('click', function (e) {
            let ifExist = false,
                target = e.target.innerHTML; //N
            for (let i = 0; i < passwordLength; i++) {
                if (target === arrayPasswords[index].pass.charAt(i)) {
                    liPass[i].innerHTML = target;
                    ifExist = true;
                }
            }
            if (!ifExist) {
                chanceLeft();
            }
            checkPassword();
        }, false);
    }
};

let checkPassword = () => {
    let str = '',
        liElements = container.querySelectorAll('#haslo li');

    for (let i = 0; i < liElements; i++) {
        console.log(liElements);
    }
};

let generateLi = (length) => {
    for (let i = 0; i < length; i++) {
        let li = document.createElement('li');
        passwordContainer.appendChild(li);
    }
};

let generateLetters = () => {
    for (let i = 0; i < arrayLetters.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arrayLetters[i];
        lettersContainer.appendChild(li);
    }
};

let chances = 3;
let chanceLeft = () => {
    let h3 = container.querySelector('#game h3');
    chances--;
    h3.innerHTML = `Pozostałe próby: ${chances}`;
    if (chances == 0) h3.innerHTML = `PRZEGRAŁEŚ! SPRÓBUJ PONOWNIE!`;
};
startGame();