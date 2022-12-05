export default function List(people) {


  return people.people.map((person) => {
    return (
      <article key={person.id}>
        <img src={person.image} alt={person.name} />
        <span>
          <h5>{person.name}</h5>
          <h6>{person.age} years</h6>
        </span>
      </article>
    );
  });
}
