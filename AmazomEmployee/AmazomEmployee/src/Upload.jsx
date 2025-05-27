import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";

import { useState } from "react";

import React from 'react'

  const authenticator = async () => {
    try {
      const response = await fetch("https://amazomecommerc.onrender.com", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  const Upload = ({ children, type, setProgress, setData }) => {
    const ref = useRef(null);

    const onError = (err) => {
      console.log(err);
      toast.error("Image upload failed!");
    };
    const onSuccess = (res) => {
      //console.log(res);
      setData({ url: res.url });
    };
    const onUploadProgress = (progress) => {
      //console.log(progress);
      setProgress(Math.round((progress.loaded / progress.total) * 100));
    };

    return (
      <IKContext
        publicKey={import.meta.env.VITE_IK_publicKey}
        urlEndpoint={import.meta.env.VITE_IK_URL}
        authenticator={authenticator}
      >
        <IKUpload
          useUniqueFileName
          onError={onError}
          onSuccess={onSuccess}
          onUploadProgress={onUploadProgress}
          className="hidden"
          ref={ref}
          accept={`${type}/*`}
        />
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            ref.current?.click();
          }}
        >
          {children}
        </div>
      </IKContext>
    );
  };
  

 /* const convertToBase64 = (e)=>{
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImg(reader.result);
    }
    reader.onerror = (error) => console.log("upload error:", error);
  }



  return (
    <div className="image-upload">
      <div className="image">
        <input type="file" accept="image" onChange={convertToBase64}/>
        
       
      </div>
    </div>
  )


}*/


 
export default Upload;
