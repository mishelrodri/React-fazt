export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      Hola {title} dice {name}
    </h1>
  );
}

export function UserCard({name, amount,married,address}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>🔥{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City:{address.city}</li>
        <li>Address:{address.street}</li>
      </ul>
    </div>
  );
}
