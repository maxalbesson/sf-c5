// Задание 1
const xmlList = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const parserXML = new DOMParser();
const xmlDom = parserXML.parseFromString(xmlList, 'text/xml');

const students = xmlDom.querySelectorAll('student');
const result = { list: [] };

students.forEach((student) => {
  const nameNode = student.querySelector('name');
  const firstNode = nameNode.querySelector('first');
  const secondNode = nameNode.querySelector('second');
  const ageNode = student.querySelector('age');
  const profNode = student.querySelector('prof');
  const langAttr = nameNode.getAttribute('lang');
  const name = `${firstNode.textContent} ${secondNode.textContent}`;
  
  result.list.push({
    name,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  });
});

console.log('task1', result);

// Задание 2
const jsonList = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const data = JSON.parse(jsonList);
const names = data.list;
const result2 = { list: [] };

for (naming of names) {
  result2.list.push({
   name: naming.name,
   age: Number(naming.age),
   prof: naming.prof,
  });
};

console.log('task2', result2);