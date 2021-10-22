import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function EditProduct(props) {
    const [singleProduct, setsingleProduct] = useState( {
        productName:'',
        productPrice: '',
        productImageURL: '',
        productDescription:''
    } )

    useEffect(() => {
        setsingleProduct({...props.selectedProduct})
    }, [props.selectedProduct] )
    
    const handleClose = () => {
        props.hideEditShowModal()
    }
    
    const addProduct = async () => {
        console.log( "singleProduct", singleProduct );
        try {
            const response = await axios.put( `https://ty-shop.herokuapp.com/api/products/{props.selectedProduct._id}`, singleProduct );
            console.log( 'add api response', response );
            if ( response.data.error ) {
                alert( response.data.message )
            } else {
                // to close the modal
                props.hideEditShowModal();
                // to fetch the products after adding new product
                props.fetchProducts()
                alert( response.data.message )
            }
        } catch ( err ) {
            console.log(err.message);
        }
    }
    const handleProductChange = e => {
        setsingleProduct( {
            ...singleProduct,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <Modal show={ props.showEditModal } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input
                                name="productName"
                                onChange={ handleProductChange }
                                value={singleProduct.productName}
                                type="text" class="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input
                                name="productPrice"
                                onChange={handleProductChange}
                                value={singleProduct.productPrice}
                                type="number"
                                class="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Product Description</label>
                            <input
                                name="productDescription"
                                onChange={handleProductChange}
                                value={singleProduct.productDescription}
                                type="text" class="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Product Image</label>
                            <input
                                name="productImageURL"
                                value={ singleProduct.productImageURL }
                                onChange={handleProductChange}
                                type="text" class="form-control" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={addProduct}>Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditProduct
