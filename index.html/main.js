//საჭიროა შევქმნათ აპლიკაცია, რომელიც საშუალებას მოგვცემს ინტერფესიში ღილაკზე(`Add Field`) დაჭერით დინამიურად დავამატოთ ტექსტური ველები(`input`), ხოლო `Convert To JSON`-ზე დაჭერის შემთხვევაში, აპლიკაციის მერე ნაწილში უნდა ემატებოდეს: input ველებში არსებული მნიშვნელობები რომელებიც მასივშია მოთავსებული და კონვერტირებულია `JSON`-ში (`JSON.stringify()`)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const formData = new FormData(form); 
  const obj = Object.fromEntries(formData); 
});



showResult();
function showResult() {
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
e.preventDefault(); // Prevent HTML refresh
const formData = new FormData(form); // Converts to array of arrays
const obj = Object.fromEntries(formData); // Array of arrays to object
console.log(obj);
});
}