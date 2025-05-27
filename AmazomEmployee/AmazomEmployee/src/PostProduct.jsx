import "./PostProduct.css";
import { useState,useRef } from "react";
import React from "react";
import Upload from "./Upload";
import instance from "./axios";
import { toast } from "react-toastify"; 

function PostProduct() {
  
  const formRef = useRef(null);
  const [img, setImg] = useState();
  const [selectedOption, setSelectedOption] = useState("option1");
  const [progress, setProgress] = useState(0);
  const handleSubmit =async(e) => {
    e.preventDefault();
    //console.log("Token before submission:", token);
    const formData = new FormData(e.target);

    const data = {
      productname: formData.get("productName"),
      category: formData.get("category"),
      description: formData.get("description"),
      rating: formData.get("rating"),
      price: formData.get("price"),
      img: img?.url || "",
    };
    console.log("Request Data:", data); 

    try {
      const response = await instance.post("/product", data);
      //console.log(response);
      if (response.status === 201) {
        // toast.success("successfully posted");
        formRef.current.reset();
        setImg(null);
        setSelectedOption("option1");
      }
    } catch {
      toast.error("posting failed, try again");
    }
  }
  return (
    <div className="postproduct">
      <h1>PRODUCT</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="productName">
          <label htmlFor="productName">Product Name</label>
          <input type="text" name="productName" placeholder="product name" />
        </div>
        <div className="category">
          <label htmlFor="category">Category:</label>

          <select
            id="category"
            name="category"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div className="description">
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            placeholder="describe product"
          />
        </div>
        <div className="rating">
          <label htmlFor="rating">rating</label>
          <input type="number" name="rating" placeholder="rating" />
        </div>
        <div className="price">
          <label htmlFor="price">price</label>
          <input type="number" name="price" />
        </div>
        <div className="img">
          <label htmlFor="product image">product image</label>
          <Upload //setImg={setImg}
            type="image"
            setProgress={setProgress}
            setData={setImg}
          ></Upload>
        </div>

        <button
          disabled={!img || (progress > 0 && progress < 100)} 
          className="submit"
          type="submit"
         
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostProduct;
