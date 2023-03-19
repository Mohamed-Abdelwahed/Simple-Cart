import React from 'react';
import { useParams, useLocation ,useNavigate  } from "react-router-dom";
import queryString from 'query-string';

export default function Details(props) {
  const history = useNavigate()
   const handelSave = ()=>{
    history('/cart')
   }





    //////////////////////
    const params = useParams()
    const product = props.products.filter(
      (c) => c.id === parseInt(params.id)
    )[0];
    console.log(params);

    const location = useLocation()
    console.log(location.search);
    const parsedLocation = queryString.parse(location.search);
    console.log(parsedLocation.price);
  return (
    <>
      <h1>Details</h1>

      <h2 className="bg-danger text-center text-light py-3">
        <span className="text-info">Product Id :</span> {product.id}
      </h2>
      <h2 className="bg-success text-center text-light py-3">
        <span className="text-danger">Product Name : </span>
        {product.name}
      </h2>
      <h2 className="bg-warning text-center text-light py-3">
        <span className="text-info">Product Count : </span>
        {product.count}
      </h2>
      <button onClick={handelSave} className='btn btn-warning text-light btn-lg ml-auto'>Save</button>
    </>
  );
}










////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import { useParams, useLocation } from "react-router-dom";
// import queryString from 'query-string';

// class Details extends Component {
//     state = {  }

//     componentDidMount(){
//         const params = useParams();
//          const product = this.props.products.filter(
//         (c) => c.id === parseInt(params.id)
//         )[0];
//         console.log(params);

//         const location = useLocation();
//         console.log(location.search);
//         const parsedLocation = queryString.parse(location.search);
//         console.log(parsedLocation.price);
//     }
//     render() {

//       return (
//         <>
//           <h1>Details</h1>

//           <h2 className="bg-danger text-center text-light py-3">
//             <span className="text-info">Product Id :</span> {product.id}
//           </h2>
//           <h2 className="bg-success text-center text-light py-3">
//             <span className="text-danger">Product Name : </span>
//             {product.name}
//           </h2>
//           <h2 className="bg-warning text-center text-light py-3">
//             <span className="text-info">Product Count : </span>
//             {product.count}
//           </h2>
//           <button className="btn btn-primary btn-lg text-light">Save</button>
//         </>
//       );
//     }
// }

// export default Details;

// //////////////////////////////////////////////////
