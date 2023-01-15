export default function Home ({contacts}) {
 return (
   <div>
     <h1>Contact List</h1>
     {Array.isArray(contacts) && contacts.length ? <ul>
       {contacts.map(contact => <li key={contact}>{contact}</li>)}
     </ul> : <p>No contacts yet...</p>}
   </div>
 );
}
