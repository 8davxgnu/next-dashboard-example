export default function() {
  return(
    <p>Customers Page</p>
  )
}

// EXAMPLE ALTERNATIVE METHODS [ Must be default exports ]:
// const CustomersPage = () => {
//   return(
//     <p>Customers Page!</p>
//   );
// };
// export default CustomersPage;

// function CustomersPage() {
//   return (
//     <p>Customers Page??</p>
//   );
// }

// export default CustomersPage;

// --------------------------------------------
// WONT WORK BC NOT DEFAULT
// export const CustomersPage = () => {
//   return (
//     <p>Customers Page?</p>
//   );
// };

// export function CustomersPage() {
//   return (
//     <p>Customers Page!!</p>
//   );
// }

