(function () {
    let arrayLetters = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż'],
        arrayPasswords = [
            {desc: 'O którym z warzyw, cukrownia marzy?', pass: 'burak cukrowy'},
            {desc: 'Gdzie się znajdują rzeki bez wody?', pass: 'na mapie świata'},
            {desc: 'Jest rudy, chytry i cwany', pass: 'lis'},
            {desc: 'W którym miesiącu rodzi się najwięcej dzieci?', pass: 'w dziewiątym'},
            {desc: 'Mieszka w głębokim lesie, choć przypomina Burka, na śniadanie najchętniej zje Czerwonego Kapturka.', pass: 'wilk'},
            {desc: 'Może być polarny lub brunatny.', pass: 'niedźwiedź'},
            {desc: 'Nie je, nie pije, a chodzi i bije. Co to jest?', pass: 'zegar'},
            {desc: 'Gdy ją obieramy, łezki ocieramy.', pass: 'cebula'},
            {desc: 'Za kości rzucone, dziękuje ogonem.', pass: 'pies'},
            {desc: 'O szyby dzwoni, gdy chmura łzy roni.', pass: 'dzeszcz'},
            {desc: 'Aksamitny motyl, który lata w nocy.', pass: 'ćma'},
            {desc: 'Wesoły dzwoneczek i sznur saneczek.', pass: 'kulig'},
            {desc: 'Lata w górze, lecz na sznurze.', pass: 'latawiec'},
            {desc: 'Śpiewa radośnie w polu o wiośnie.', pass: 'skowronek'},
            {desc: 'Malutki człowieczek z waszych bajeczek.', pass: 'krasnoludek'},
            {desc: 'O północy żegnamy, po północy witamy.', pass: 'nowy rok'},
            {desc: 'Co za białe piórka, sypie zimą chmurka?', pass: 'śnieg'},
            {desc: 'Jestem jedyną rzeczą która nigdy nie kłamie.Pokazuje tobie wszystko co zobaczę. Jestem w różnych kształtach i rozmiarach. Wiec powiedz mi czym jestem?', pass:'lustro'},
            {desc: 'Gdzie był Mojżesz, gdy mu zgasła świeca?', pass: 'w ciemnościach'},
            {desc: 'Wysyłają ją do nieba, po kawałek chleba.', pass: 'biedronka'},
            {desc: 'Śnieżną buzię ma i siedmiu krasnali zna.', pass: 'królewna śnieżka'},
            {desc: 'Z waty bywa, z puchu bywa, w nocy do snu nas okrywa.', pass:'kołdra'},
            {desc: 'Dom pszczół i Ewa, to będzie … .', pass:'ulewa'},
            {desc: 'Co to za rycerz w słomianej zbroi, różę otula, w ogrodzie stoi?', pass: 'chochoł'},
            {desc: 'Jaka to para umie w zgodzie. Tańczyć i skakać tylko na lodzie?', pass: 'łyżwy'},
            {desc: 'Co to za ludki? Na drzewach siedzą, myszy nie łowią, ptaszków nie jedzą.', pass:'bazie wierzbowe'},
            {desc: 'Pracuje głęboko, pod czarnym sufitem. Ludzie palą skarby, przez niego zdobyte.', pass:'górnik'},
            {desc: 'Mam skrzydła jak ptak, lecz nie jestem ptaszorem. Poluję na owady bardzo późnym wieczorem.', pass:'nietoperz'},
            {desc: 'Tego kwiatka może wcale nie ma, chociaż się w wyobraźni naszej złoci. Przez jedną noc kwitnie cudny … .', pass:'kwiat paproci'},
            {desc: 'Mówił, że nikogo się nie boi, gdy zechce da radę wszystkim. Teraz smutny w kącie stoi, bo wystraszył się maleńkiej myszki.', pass:'stefek burczymucha'},
            {desc: 'Co to za kula? Wewnątrz rozżarzona, ze skał i z gleby i z wody złożona.', pass:'kula ziemska'},
            {desc: 'Czasem pełen czasem znikomy. Pan tysięcy oczy, władca mroku. Wielu go zdobyć chciało, lecz nielicznym się udało.', pass:'księżyc'},
            {desc: 'Jakie drzewa rosną najwcześniejszą wiosną? I kto je zapyli bez pszczół i motyli!', pass:'leszczyna i wiatr'},
            {desc: 'Płynie do wsi i do miasta, do kuchenki, do żelazka. Jeśli płynie, to w przewodach, lecz to wcale nie jest woda.', pass:'prąd elektryczny'},
            {desc: 'W długiej, wielkiej i przestrzennej praca wre radosna, rosną długie węże tkanin w trzaskających krosnach.', pass:'zakład włókienniczy'},
            {desc: 'W tym gnieździe zamiast ptaków siedzą marynarze. I krzyczą stąd: O! Widzę ląd! Gdy się ten ląd ukaże.', pass:'bocianie gniazdo'},
            {desc: 'Tak się dzieje ku wiośnie: jeden pada, druga pije, trzecia rośnie!', pass:'deszcz ziemia roślina'},
            {desc: 'Lżejszy od puchu, widoczny tylko w zimnie.', pass:'oddech'},
            {desc: 'Zmienna to panna. Ciągle ucieka. Raz jest spokojna, piękna by zaraz nieświadomego spławić człowieka', pass: 'rzeka'},
            {desc: 'Statek ma 50 łokci długości. Ile łokci ma kapitan ?', pass: 'dwa'},
            {desc: 'W jakiej wodzie ryby nie pływają?', pass:'w gotowanej'},
            {desc: 'Co robi wartownik, gdy na jego czapce siedzi wróbel?', pass: 'spi'},
            {desc: 'Jaki koń widzi równie dobrze z przodu i z tyłu?', pass: 'slepy'},
            {desc: 'Jaki lekarz nie może poślubić swojej pacjentki/pacjenta?', pass:'weterynarz'},
            {desc: 'Który miesiąc ma 28 dni?', pass:'kazdy'},
            {desc: 'Co to jest: nie pali się, a trzeba gasić?', pass: 'pragnienie'},
            {desc: 'Które koło najmniej się zużywa na zakrętach?', pass:'zapasowe'},
            {desc: 'Który kolor jest najbardziej wystrzałowy?', pass:'granat'},
            {desc: 'Jak się nazywa słynna tancerka?', pass:'primabalerina'},
            {desc: 'Napisz jak wygląda król z bykiem?', pass:'krul'},
            {desc: 'Co rośnie do góry korzeniem?', pass: 'ząb'},
            {desc: 'Czym się je: rękami, czy rękoma?', pass: 'ustami'},
            {desc: 'Co to jest: najczęściej białe, a jak spadnie na głowę to boli?', pass:'sufit'},
            {desc: 'Jaka powinna być szkoła?', pass:'zamknięta'},
            {desc: 'W pokoju stoi lampa naftowa i świeca. Co najpierw zapalisz?', pass: 'zapałkę'},
            {desc: 'Na jakiej trąbie nie można zagrać?', pass:'powietrznej'},
            {desc: 'Jakich kamieni jest w morzu najwięcej?', pass:'mokrych'},
            {desc: 'Jakie zęby pojawiają się u ludzi najpóźniej?', pass: 'sztuczne'},
            {desc: 'Na co umarł Stalin?', pass: 'na szczęście'},
            {desc: 'Jak w czasie przyszłym brzmi czasownik "kradnie"?', pass:'siedzi'}
        ],
        index = losujZagadke(),
        password = index.pass.toUpperCase(),
        popup1 = document.querySelector('#popup1'),
        popup2 = document.querySelector('#popup2'),
        passContainer = document.querySelector('#container .haslo'),
        lettContainer = document.querySelector('#container .alfabet'),
        chancesWrapper = document.querySelector('#container .chances'),
        H3 = chancesWrapper.querySelector('h3'),
        proby = document.querySelector('#container .chances h3'),
        chances = 5,
        points = 0;
        console.log(Math.floor(Math.random() * arrayPasswords.length));
    function losujZagadke() {
        return arrayPasswords[Math.floor(Math.random() * arrayPasswords.length)];
    }

    let init = (password, index) => {
        document.querySelector('#container .opis h1').innerHTML = index.desc;
        chances = 5;

        for (let i = 0; i < arrayLetters.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = arrayLetters[i];
            lettContainer.appendChild(li);
        }

        for (let i = 0; i < password.length; i++) {
            let li = document.createElement('li');
            if (password.charAt(i) == ' ') {
                li.classList.add('space');
                passContainer.appendChild(li)
            }
            else {
                passContainer.appendChild(li);
            }
        }

        let letters = lettContainer.querySelectorAll('li'); //WORKING

// String.prototype.setChar = function (index, char) {
//     if (index > this.length - 1) return this.toString();
//     else return this.substr(0, index) + char + this.substr(index + 1);
// };

        let setChar = (index, letter) => {
            let oneLetter = passContainer.querySelectorAll('li');
            //setTimeout(function () {
            oneLetter[index].innerHTML = letter;
            // }, 500);
            oneLetter[index].classList.add('animation');
        };

        let updateChances = () => {
            let poph1 = popup1.querySelector('h1'),
                poph2 = popup1.querySelector('h2');
            if (chances === 1) {
                chances = 0;
                popup1.style.display = 'block';
                poph1.innerHTML = `Niestety przegrałeś, liczba poprawnych odpowiedzi: ${points}.`;
                poph2.innerHTML = `Szukane hasło: ${password}`;
            } else {
                chances--;
            }
            proby.innerHTML = `Pozostałe próby: ${chances}`;
        };

        let changeStatus = (index, bool) => {
            let arrayPass = [];
            if (bool) {
                letters[index].classList.add('exist');
                let actualPassword = passContainer.querySelectorAll('li');
                console.log(actualPassword);
                for (let i = 0; i < actualPassword.length; i++) {
                    if (actualPassword[i].classList.contains('space')) {
                        arrayPass.push(' ');
                    } else {
                        arrayPass.push(actualPassword[i].innerText);
                    }

                }
                console.log(`TABLICA Z AKTUALNYM HASŁEM: ${arrayPass.join('')}`);
                if (arrayPass.join('') === password) { //BEZ TIMEOUTA DZIAŁA
                    let Button = chancesWrapper.querySelector('button');
                    H3.innerHTML = 'Prawidłowa odpowiedź!';
                    points++;
                    Button.style.opacity = 1;
                    Button.style.cursor = 'pointer'
                    Button.classList.add('animation_bt');
                }
            }
            if (!bool) {
                letters[index].classList.add('notExist');
                updateChances();
            }
        };

        for (let i = 0; i < arrayLetters.length; i++) { //eventHandler #1
            letters[i].addEventListener('click', function (e) {
                let isExist = false;
                for (let i = 0; i < password.length; i++) {
                    if (e.target.innerText === password.charAt(i)) {
                        setChar(i, e.target.innerText);
                        isExist = true;
                    }
                }
                if (isExist) {
                    changeStatus(i, true)
                } else {
                    changeStatus(i, false)
                }
            }, false)
        }


        function deleteList(elementyHasla) {
            for (let i = 0; i < elementyHasla.length; i++) {
                passContainer.removeChild(elementyHasla[i]);
            }
        }

        function deleteA(elementyAlfabetu) {
            for (let i = 0; i < elementyAlfabetu.length; i++) {
                lettContainer.removeChild(elementyAlfabetu[i]);
            }
        }

        document.querySelector('#container .chances button').addEventListener('click', function () { //zerowanie gry
            let elementyHasla = document.querySelectorAll('#container .haslo li');
            deleteList(elementyHasla);
            let elementyAlfabetu = document.querySelectorAll('#container .alfabet li');
            deleteA(elementyAlfabetu);
            let randomNumber = arrayPasswords[Math.floor(Math.random() * arrayPasswords.length)],
                pass = randomNumber.pass.toUpperCase(),
                nextButton = chancesWrapper.querySelector('button');
            proby.innerHTML = `Pozostałe próby: ${chances}`;
            nextButton.style.opacity = '0';
            nextButton.style.cursor = 'default';
            init(pass, randomNumber);
        }, false);
    };
    init(password, index);
})();
