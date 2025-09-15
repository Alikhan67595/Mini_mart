import React, { useState } from 'react'
import TextareaAutosize from "react-textarea-autosize"

const AddProduct = () => {

    const [title , setTitle] = useState()
    const [textArea , setTextArea] = useState()
    const [titleLength , setTitleLength] = useState(0)
    const [textlength , setTextLength] = useState(0)


    return (
        <>
            <div className='m-auto max-w-7xl bg-[#69696907] h-screen text-white border-box flex flex-col items-center p-[25px]'>

                <h1 className='text-[30px]'>Add New Product</h1>
                <h6 className='text-[14px]'>Fill out the form below to add a new product to your catalog</h6>

                <div className='w-[80%] h-auto p-[15px] rounded-[20px] border-[#262626] border-[2px] mt-[30px] flex flex-col gap-[10px]'>
                    <h6 className='text-[13px]'>Basic Info</h6>

                    <div>
                        <h2 className='mt-[10px] text-[16px]'>Product Information</h2>
                        <p className='text-[12px]'>Enter the basic details about your product</p>
                    </div>


                    <div className=''>
                        <label className='text-[14px]' htmlFor="product-Title">Product Title *</label>

                        <input className='w-full text-[14px] bg-[#50505071] rounded-[8px] p-[5px]' id='product-Title' name='product-title' type="text" required placeholder='Enter a clear, descriptive product title' maxLength={'35'} onChange={(e)=>{setTitle(e.target.value); setTitleLength(e.target.value.length)}} value={title} />
                        
                        <div className='flex justify-between text-[12px]'>
                        <span className={`text-[12px]`}>product title is requried</span>
                        <span>{titleLength}/35</span>
                        </div>
                    </div>  {/* input div end */}

                    <div>
                        <label className='text-[14px]' htmlFor="description">Product Description</label>
                        <TextareaAutosize id='description' name='description' maxLength={300} minLength={60} className={`resize-none w-full bg-[#50505071] rounded-[8px] p-[5px] text-[14px]`} placeholder='Provide a detailed description of your product...' onChange={(e)=>{
                            setTextArea(e.target.value);
                            setTextLength(e.target.value.length)}} value={textArea} />

                        <div className='flex justify-between text-[12px]'>
                            <span>Include features, benefits, specifications, and usage instructions.</span>
                            <span>{textlength}/300</span>
                        </div>

                    </div> {/* textarea div end */}


                </div> {/* all inputs div ending */}




            </div> {/* main div end */}
        </>
    )
}

export default AddProduct