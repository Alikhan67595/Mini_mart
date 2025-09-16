import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import upload from "../../assets/upload.svg";
import axios from "axios";
import {addDoc , setDoc , serverTimestamp ,doc, collection } from 'firebase/firestore'
import {db} from '../../firebase.js'
import { replace, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState("")
  const [url, setUrl] = useState("")
  const [uploading, setUploading] = useState(false)

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState()
  const [stock, setStock] = useState()
  const [category, setCategory] = useState("")
  const [titleLength, setTitleLength] = useState(0)
  const [description, setDescription] = useState("")
  const [descLength, setDescLength] = useState(0)

  const navigate = useNavigate()

  // Image select & preview
  const handlePreview = (e) => {
    const selected = e.target.files[0]
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected))
    }
  };

  // Upload to Cloudinary
  const uploadToCloudinary = async () => {
    if (!file) return alert("Please Select Image")
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_products"); // tumhara preset

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dbqhqf0ho/image/upload",
        formData
      );

      const  productUrl = res.data.secure_url

      setUrl(productUrl)

      await addCollectionData(productUrl)


    } catch (error) {
      console.error("Upload error:", error)
      alert("Upload fail ho gaya")
    } finally {
      setUploading(false);
      URL.revokeObjectURL(preview)
    }
  };


  const addCollectionData = async (productUrl)=>{
    try {

      await addDoc(collection(db, "products"), {
            
            title : title,
            image : productUrl ,
            description : description,
            price: price,
            stock : stock,
            category : category , 
            createdAt: serverTimestamp(),
          });
          
          navigate('/', {replace:true})
      
    } catch (error) {
      console.error("FireStore addCollectionData walay function ka error hai:", error)
    }

  }




  return (
    <div className="m-auto max-w-7xl bg-[#69696907] text-white flex flex-col items-center justify-center p-[0px] sm:p-[25px]">
      <h1 className="text-[30px]">Add New Product</h1>
      <h6 className="text-[14px] text-center">
        Fill out the form below to add a new product to your catalog
      </h6>

      <div className="w-[98%] sm:w-[80%] h-auto p-[15px] rounded-[20px] border-[#262626] border-[2px] mt-[30px] flex flex-col gap-[10px]">
       
        <div>
          <label className="text-[14px]" htmlFor="title">
            Product Title *
          </label>
          <input
            id="title"
            type="text"
            maxLength={35}
            placeholder="Enter a clear, descriptive product title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleLength(e.target.value.length);
            }}
            className="w-full text-[14px] bg-[#50505071] rounded-[8px] p-[5px]"
          required />
          <div className="flex justify-between text-[12px]">
            <span>Product title is required</span>
            <span>{titleLength}/35</span>
          </div>
        </div> {/* title div ending point */}

       
        <div>
          <label className="text-[14px]" htmlFor="description">
            Product Description
          </label>
          <TextareaAutosize
            id="description"
            maxLength={300}
            minLength={60}
            placeholder="Provide a detailed description of your product..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setDescLength(e.target.value.length);
            }}
            className="resize-none w-full bg-[#50505071] rounded-[8px] p-[5px] text-[14px]"
            required
          />
          <div className="flex justify-between text-[12px]">
            <span>Include features, benefits, specifications, and usage.</span>
            <span>{descLength}/300</span>
          </div>
        </div> {/* text area div end point */}



            <div className="w-full flex flex-col sm:flex-row gap-[5px]">
              <input className="no-spinner text-[14px] bg-[#50505071] rounded-[8px] p-[5px] flex-1" type="number" placeholder="price in $"  onChange={(e)=>setPrice(e.target.value)} required/>
              
              <select className="text-[14px] bg-[#50505071] rounded-[8px] p-[5px] flex-1"  value={category} onChange={(e)=>{setCategory(e.target.value)}} required>
            <option value="">--Select Products--</option>
            <option value="Electronics">Electronics</option>
            <option value="Beauty">Beauty</option>
            <option value="Fragrances">Fragrances</option>
            <option value="Furniture">Furniture</option>
            <option value="Groceries">Groceries</option>
            </select>

            <input  className="flex-1 no-spinner text-[14px] bg-[#50505071] rounded-[8px] p-[5px]" type="number" placeholder="Availibale stock" onChange={(e)=>{setStock(e.target.value)}} required/>
            
            </div> 


        <div className="w-full h-[2px] bg-[#262626]" />

        
        <div className="flex flex-col gap-0">
          <h2 className="text-[16px]">Product Media</h2>
          <p className="text-[12px]">
            Upload high-quality images to showcase your product
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="w-full h-[300px] border-dashed border-[3px] border-[#262626] rounded-[15px] flex flex-col justify-center items-center gap-[10px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#262626] flex justify-center items-center">
              <img src={upload} alt="Upload" />
            </div>
            <p className="text-[11px]">
              Supported formats: JPEG, PNG, GIF, WebP
            </p>
            <p className="text-[11px]">Maximum file size: 100MB</p>
            <input
              type="file"
              accept="image/*"
              onChange={handlePreview}
              className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>

        {/* Preview */}
        {preview && (
          <div className="w-full flex flex-wrap gap-[10px] mt-4">
            <div className="h-[100px] w-[100px]">
              <img
                src={preview}
                alt="Preview"
                className="h-full w-full rounded-[8px]"
              />
            </div>
          </div>
        )}

        {/* Upload Button */}
        <button
          disabled={!file || uploading}
          onClick={uploadToCloudinary}
          className="bg-blue-600 text-white px-3 py-1 mt-3 rounded"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {/* Uploaded URL */}
        {url && (
          <p className="mt-3 text-green-600">
            ✅ Uploaded!{" "}
            <a href={url} target="_blank" rel="noreferrer">
              Open Image
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
