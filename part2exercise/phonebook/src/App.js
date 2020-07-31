import React, { useState } from "react";

const Number = ({ person }) => {
  return (
    <p>
      {person.name} {person.number}
    </p>
  );
};

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    const filteredPersons = persons.filter((person) => {
      return person.name === newName;
    });
    if (filteredPersons.length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName("");
    setNewNumber("");
  };
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilter = (event) => {
    setFilterInput(event.target.value);
  };
  const personsToShow = filterInput
    ? persons.filter((person) => {
        return person.name.toLowerCase().includes(filterInput.toLowerCase());
      })
    : persons;
  return (
    <div>
      <h2>Phonebook</h2>
      <label htmlFor="filterInput">The filter shown with </label>
      <input type="text" id="filterInput" onChange={handleFilter} />
      <h2>Add A New</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleNewName} />
        </div>
        <div>
          number:{" "}
          <input type="text" value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person, index) => {
        return <Number key={index} person={person} />;
      })}
    </div>
  );
}

export default App;
