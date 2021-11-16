
export default function ContactsList({children}) {
    
    return (
    <>
      <ul >
        {children}
      </ul>
    </>
  );
};


// const ContactsList = () => {
//   const {data, isFetching, error} = useContactsApiQuery();
//   return (
//         <>
//           <ul >
//             {data && <h1>Ok</h1>}
//             {/* {contacts.map(({ id, name, number }) => (
//               <li key={id}>
//                 <span>
//                   <b>{name}</b>: {number}
//                 </span>

//                 <button
//                   type="button"
//                   onClick={() => delContact(id)}
//                   className={s.btn}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))} */}
//           </ul>
//         </>
//       );
// };

// export default ContactsList;
