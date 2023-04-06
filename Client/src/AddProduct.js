import React, {useState, useEffect} from "react";
import { createProduct, getCategories } from "./AdminApiCalls";

export const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        categories: [],
        photo: "",
        price: "",
        stock: "",
        owner: "",
        formData: new FormData(),
        error: "",
        loading: false,
        createdProduct: ""
    });

    const {
        name,
        description,
        categories,
        photo,
        price,
        stock,
        owner,
        formData,
        error,
        loading,
        createdProduct
    } = product;

    useEffect(() => {
        // getCategories()
        // .then((data) => setProduct({...product, categories: data}));
    });

    const handleChange = (name) => (event) => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setProduct({ ...product, [name]: value});
    };

    const successMessage = () => {
        return (
          <div
            className="alert alert-success mt-3"
            style={{ display: createdProduct ? "" : "none" }}
          >
            <h4>{createdProduct} Created Successfully!</h4>
          </div>
        );
      };
    
      const warningMessage = () => {
        if (error) {
          return (
            <div
              className="alert alert-danger mt-3"
              style={{ display: createdProduct ? "" : "none" }}
            >
              <h4>Could not save the product!</h4>
            </div>
          );
        }
      };

    const onSubmit = (event) => {
        event.preventDefault();
        setProduct({ ...product, error: "", loading: true });
        createProduct(formData)
        .then((data) => {
            if (data.error) {
            setProduct({ ...product, error: data.error });
            } else {
            setProduct({
                ...product,
                name: "",
                description: "",
                price: "",
                photo: "",
                stock: "",
                owner: "",
                loading: false,
                createdProduct: data.name,
            });
            }
        })
        .catch();
    }

    return(
        <>
            <successMessage />
            <warningMessage />
            <form className="mx-auto">
                <span>Post photo</span>
                <div className="form-group mx-auto">
                <label style={{backgroundColor: '#009870', borderColor: '#009870'}} className="btn btn-block btn-success">
                    <input
                    onChange={handleChange("photo")}
                    type="file"
                    accept="image"
                    placeholder="choose a file..."
                    />
                </label>
                </div>
                <div className="form-group mx-auto">
                <input
                    onChange={handleChange("name")}
                    className="form-control"
                    placeholder="Product Name..."
                    value={name}
                />
                </div>
                <div className="form-group mx-auto">
                <textarea
                    onChange={handleChange("description")}
                    name="photo"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                />
                </div>
                <div className="form-group mx-auto">
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                />
                </div>
                <div className="form-group mx-auto">
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                    placeholder="Category"
                >
                    <option>Select</option>
                    {categories &&
                    categories.map((cate, index) => (
                        <option key={index} value={cate._id}>
                        {cate.name}
                        </option>
                    ))}
                </select>
                </div>
                <div className="form-group mx-auto">
                <input
                    onChange={handleChange("stock")}
                    type="number"
                    className="form-control"
                    placeholder="Stock"
                    value={stock}
                />
                </div>

                <div className="row justify-content-center">
                <button
                style={{color: '#009870', borderColor: '#009870'}}
                type="submit"
                className="btn btn-outline-success mb-3"
                onClick={onSubmit}
                >
                Create Product
                </button>
                </div>
            </form>
        </>
    );
}