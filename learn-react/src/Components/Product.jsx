import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-2">
            <span>
              <Link  to={`/product/${this.props.pr.id}` }>
              {this.props.pr.name}
              </Link>
              
            </span>
          </div>
          <div className="col flex">
            <span>{this.props.pr.count}</span>

            <button
              className="btn btn-primary btn-sm mx-3"
              onClick={() => this.props.onIncreas(this.props.pr)}
            >
              +
            </button> 
            <button
              className="btn"
              onClick={()=>this.props.onDel(this.props.pr)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
