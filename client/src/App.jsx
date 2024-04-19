import React, { useState, useEffect } from 'react';
import { storage } from './config';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getcaptions } from '../../api/controllers/image.controllers';

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      if(selectedFile.type === "image/jpeg" || selectedFile.type === "image/png") {
        const storageRef = ref(storage, `/${selectedFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, selectedFile);

        uploadTask.on("state_changed",
          (snapshot) => {
            console.log(snapshot);
          },
          (error) => {
            alert(error);
          },
          () => {
            console.log("File uploaded successfully");
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImgUrl(downloadURL)
              getFeatures(downloadURL);
            });
          }
        );
        
      }else {
        alert("Please select a valid image file.");
      }
    } else {
      console.log("No file selected.");
    }
  };

  const getFeatures = async (Url) => {
    try{
      const res = await fetch("http://localhost:3000/images/getdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: Url }),
      });
      const data = await res.json();
      console.log(data.output[0].generated_text);
      getcaptions(data.output[0].generated_text);
    }catch(err){
      console.log(err);
    }
  }

  const getcaptions = async (text) => {
    try{
      const res = await fetch("http://localhost:3000/images/getcaptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });
      const data = await res.json();
      console.log(data.text);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
