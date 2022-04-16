// import React, { useEffect, useState } from "react";
// import { Button, Container } from "react-bootstrap";

// const ManageServices = () => {
//   const [service, setServices] = useState([]);

//   useEffect(() => {
//     fetch('https://desolate-plains-94007.herokuapp.com/products')
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);

//   const handleDelete = (id) => {
//     fetch(`https://desolate-plains-94007.herokuapp.com/products/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.deletedCount) {
//           alert("Delete Done");
//           const total = service.filter((data) => data._id !== id);
//           setServices(total);
//         }
//       });
//   };

//   return (
//     <>
//       <Container className="p-3">
//         <h2 className="text-center my-4">
//           Our All Product <span className="text-success">Here</span>_
//         </h2>
//         {service.map( data => (
//           <div key={data._id} className="bg-success my-3 rounded">
//             <div className="py-3 px-5 text-light">
              
//               <h5>Product-Name : {data?.name}</h5>
//               <p>
//                 Available : {data?.available}
//                 <br />
//                 Product Cost : {data?.price}
//               </p>
//               <Button
//                 onClick={() => handleDelete(data._id)}
//                 className="btn btn-danger px-5"
//               >
//                 Cancel
//               </Button>
//             </div>
//           </div>
          
//         ))}
//       </Container>
//     </>
//   );
// };

// export default ManageServices;



