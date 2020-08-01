import React, { useState, useEffect } from "react";
import personService from "./services/persons";

const Person = ({ person }) => {
  return (
    <p>
      {person.name} {person.number}
    </p>
  );
};

const Filter = ({ handleFilter }) => {
  return (
    <div>
      <label htmlFor="filterInput">The filter shown with </label>
      <input type="text" id="filterInput" onChange={handleFilter} />
    </div>
  );
};

const PersonForm = ({
  newName,
  newNumber,
  handleSubmit,
  handleNewName,
  handleNewNumber,
}) => {
  return (
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
  );
};

const Persons = ({ personsToShow }) => {
  return (
    <div>
      {personsToShow.map((person, index) => {
        return <Person key={index} person={person} />;
      })}
    </div>
  );
};

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

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
      personService.createPerson(personObject).then((newPerson) => {
        setPersons(persons.concat(newPerson));
      });
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
      <Filter handleFilter={handleFilter} />
      <h2>Add A New</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
}

export default App;
