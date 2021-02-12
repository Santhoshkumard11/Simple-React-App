 import React from 'react' 
 import PropTypes from 'prop-types' 
 export default function PersonView ({person}) { 
 return (
   <div>
         <h1>
             { person.id}. &nbsp;
       {person.name}
     </h1>
     <div>
       <h5>username - {person.username}</h5>
       <h5>email - {person.email}</h5>
       <h5>city - {person.address.city}</h5>
       <h5>company - {person.company.name}</h5>
     </div>
   </div>
 ); 
}