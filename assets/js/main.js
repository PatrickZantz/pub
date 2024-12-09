function runAll() {
  strings();
  output();

  var17();

  var16();
  variablen();
  introLvl18();
  intro112();
  intro113();
}
// Strings

/**
 * - Nun sollen Strings miteinander verkettet werden. Probiere dies an ein paar Beispielen aus:
- Deklariere zwei Variablen: x mit dem String "Hello" und y mit dem String "World".
- Addiere x mit y und speichere das Ergebnis als Variable z. Nutze den Befehl document.write() mit Wert z zwischen den Klammern, um im Dokument Werte anzuzeigen.
- Schreibe x + " " + y und speichere alles in der Variable n. Nutze den Befehl document.write() mit Wert n.
- Addiere x und einen String mit "World". Nutze den passenden Zuweisungsoperator. Nutze den Befehl document.write() mit Wert x, um den String im Dokument auszugeben.
- Deklariere eine Variable meinString mit dem String "Ich bin Erste:r". Nutze einen Zuweisungsoperator, um einen anderen String " Ich komme auf Platz zwei", zu meinString hinzuzufügen. Gebe dann meinString in der Konsole aus.

 */

function strings() {
  let x = "Hello";
  let y = "World";
  let z = x + y;
  document.write(z);

  let n = x + " " + y;
  x += "World";
  document.write(x);
  let meinString = "Ich bin Erste:r";
  meinString += " Ich komme auf Platz zwei";
  console.log(meinString);
}

// Output
/**
 * - Nun beschäftigst du dich mit dem Thema Output. Du kannst dir im JS auf unterschiedliche Art und Weise Daten anzeigen lassen.
- Teste dazu folgenden Code und die nachstehenden Befehle. Gehe Befehl für Befehl durch und kommentiere dann die jeweilige(n) Zeile(n) aus, sonst liegen die ganzen Pop-Up-Fenster übereinander:
- window.alert("Hallo Welt");
- window.prompt("Bitte geben Sie Ihren Namen ein.");
- window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
- window.confirm("Stimmen Sie meiner Meinung zu?");
- let alter = window.prompt( "Gib mir bitte dein Alter:" );  console.log(alter);
- let b = 5;  let a = b
- 5 -3;  window.alert(a);
- let mann = "Robert Wadlow ist der größte Mann der Welt : ";  let grosse = "2,72m";  window.confirm(mann + grosse);

 */

function output() {
  // window.alert("Hallo Welt");
  // window.prompt("Bitte geben Sie Ihren Namen ein.");
  // window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
  // window.confirm("Stimmen Sie meiner Meinung zu?");
  // let alter = window.prompt("Gib mir bitte dein Alter:");
  // console.log(alter);
  // let b = 5;
  // let a = b;
  // 5 - 3;
  // window.alert(a);
  let mann = "Robert Wadlow ist der größte Mann der Welt : ";
  let grosse = "2,72m";
  window.confirm(mann + grosse);
}

// Variablen

/**
 - Deklariere die untenstehenden Variablen mit korrekter Namenskonvention und der camelCase-Schreibweise.
- Entscheide, ob du die Variablen mit let oder const deklarieren möchtest. Der Wert einer Konstanten (const) kann nicht verändert werden durch Zuweisung oder Neudeklaration, bei let kann wiederum ein neuer Wert hinzugefügt werden.
- Nutze diese Beispiele:
    - helloworld = Hello World
    - pi = 3.14
    - burjdubai = 828m
    - fullname = Jan Schmidt
    - eifeltower = 324m
    - camelcase = camelCase
    - kursstatus = true
- und wandle sie um in z.B. let helloWorld = "Hello World".
 */
function var17() {
  let helloworld = "Hello World";
  const pi = 3.14;
  const burjdubai = "828m";
  const fullname = "Jan Schmidt";
  const eifeltower = 324;
  let camelcase = "camelCase";
  let kursstatus = true;
}

/*
- 1. Deklariere die Variable let x mit dem Wert 34. Überschreibe x anschließend mit dem Wert 67. Gib den Wert x in der Konsole aus. Danach kommentiere deinen Code aus.
- 2. Deklariere die Variable const y mit dem Wert 34. Überschreibe y anschließend mit dem Wert 67. Gib den Wert y in der Konsole aus. Warum erhältst du eine Fehlermeldung?
*/
function var16() {
  // let x = 24;
  // x = 67;
  // console.log(x);

  const y = 34;
  try {
    y = 67;
    console.log(y);
  } catch (error) {
    console.log("weil const nicht verändert werden darf");
  }
}

function variablen() {
  let carName = "BMW";
  console.log(carName);

  let x = 150;
  console.log(x);

  let y = 50;
  console.log(y);

  let z = x + y;
  console.log(z);

  let firstName;
  let lastName;
  let age;
  firstName = "John";
  lastName = "Doe";
  age = 35;

  console.log(firstName + " " + lastName + " " + age);
}
// Arithmetische Operatoren

function introLvl18() {
  let x = 20;
  let y = 30;

  console.log(x + y);
  console.log(x - y);
  console.log(y - x);
  console.log(x * y);
  console.log(x / y);

  let z = 10;

  let resultOne = (x * y) / z;

  console.log(resultOne);

  let a = 15;
  let b = 9;

  console.log(a % b);

  let c = 20;
  let resultTwo = (a + b) * c;

  console.log(resultTwo);

  console.log(++a);

  console.log(--b);

  let resultThree = a - b;
  console.log(resultThree);

  console.log(resultOne % resultTwo);

  document.getElementById("test").style.color = "gray";
  document.getElementById("res").textContent =
    "Ergebnis: " + resultThree + (resultOne % resultTwo);
}

function intro112() {
  let score = 5 + 5 * 10;
  console.log(+score);
  score = (5 + 5) * 10;
  console.log(+score);
  score = 0;
  score = score + 10;
  console.log(+score);
  score += 10;
  console.log(score);
  let zahl = 1;
  zahl = zahl + 1;
  zahl += 1;

  zahl++;
  console.log(zahl);
  zahl--;
  console.log(zahl);
}

function intro113() {
  // Addition
  let addition_operator = 1 + 1;
  console.log("addition: " + addition_operator);
  // Subtraktion
  let subtraktion_operator = 2 - 1;
  console.log("subtraktion: " + subtraktion_operator);
  // Multiplikation
  let multiplication_operator = 2 * 2;
  console.log("multiplication: " + multiplication_operator);
  // Division
  let division_operator = 4 / 2;
  console.log("division: " + division_operator);
  // Modul: zeigt an, was der Rest sein würde.
  let modulus_operator = 14 % 5;
  console.log("modulus: " + modulus_operator);
}
