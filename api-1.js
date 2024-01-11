// const person = {
//     found: 2,
//     message: "Found 2 persons",
//     result: [
//     {
//     name: {
//     common: "John",
//     fullName: ["John", "Doe"]
//     },
//     age: 32,
//     isMale: false,
//     address: {
//     street: "13/A St Joseph",
//     house: 10,
//     },
//     },
//     {
//     name: {
//     common: "Humayoun",
//     fullName: ["Humayoun", "Kabir"]
//     },
//     age: 33,
//     isMale: false,
//     address: {
//     street: "13/A St Lucia",
//     house: 11,
//     },
//     },
//     ]
// };


// const displayPerson = () => {
    


    
// }











const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};

// Get the element where we want to display the data
const personDataElement = document.getElementById('personData');

// Create an HTML string to display the person data
const html = `
    <p>${person.message}</p>
    <ul>
        ${person.result.map(person => `
            <li>
                <p>Name:</p> ${person.name.common}<br>
                <p>Full Name:</p> ${person.name.fullName.join(' ')}<br>
                <p>Age:</p> ${person.age}<br>
                <p>Gender:</p> ${person.isMale ? 'Male' : 'Female'}<br>
                <p>Address:</p> ${person.address.street}, House ${person.address.house}
            </li>
        `).join('')}
    </ul>
`;

// Set the HTML of the element to display the data
personDataElement.innerHTML = html;



const personDataElement = document.getElementById('person-data');


const html2 = `

<p>${person.message}</p>

<p>Person Name:${person.result[0].name.common} </p>
<p>age:${person.result[0].age}</p>
<p>Street:${person.result[0]. address.street}</p>
`


personDataElement.innerHTML=html



