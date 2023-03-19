import React from 'react';
import { useParams } from 'react-router-dom';


export default function Details(props) {
    const params = useParams()
    const product = props.products.filter(
      (c) => c.id === parseInt(params.id)
    )[0];
    console.log(params);
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
    </>
  );
}
