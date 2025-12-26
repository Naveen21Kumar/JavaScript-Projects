let data = [
  {
    name: 'Mateno',
    age: 32,
  },
  {
    name: 'Sarah',
    age: '32',
  },
  {
    name: 'John',
    age: '20',
  },
  {
    name: 'Tim',
    age: '27',
  },
  {
    name: 'Sam',
    age: '22',
  },
  {
    name: 'Joey',
    age: '34',
  },
];

const info = document.querySelector('#info');

// Old code
/*
let details = data.map(function (item) {
  return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
});
info.innerHTML = details.join('\n');
*/

// new code (safe without innerHTML)
data.forEach((item) => {
  const li = document.createElement('li');
  li.innerText = `${item.name} is ${item.age} years old`;
  info.append(li);
});
