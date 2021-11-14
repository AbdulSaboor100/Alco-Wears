import React, { useState } from "react";
import { db, storage ,ref , uploadBytes , getDownloadURL , addDoc , collection } from "../../configs/firebase";







function MyAdmin(){
  let [imgUpload , setImgUpload] = useState('');
  let [succus , setSuccus] = useState('');
  let [error , setError] = useState('');
  let [productName , setProductName] = useState('');
  let [description , setDescription] = useState('');
  let [productId , setProductId] = useState('')

 
  function addProduct(){
    let martialArts = document.getElementById('martial-arts');
    
    let randomNumber = Math.ceil(Math.random() * 100000000000)
    
    let storageRef = ref(storage, `${imgUpload.name}/${randomNumber}`)
    uploadBytes(storageRef, imgUpload)
    .then(async (snapshot) => {
      let URL = await getDownloadURL(storageRef)
      let productObj = {
        Description: description,
        ProductName: productName,
        ProductID : productId,
        Type : martialArts.value,
        URL : URL
      }

      
     
      try {
        let dataRef = collection(db, martialArts.value);
        let saveData = await addDoc(dataRef , productObj);
        if(saveData){
          setSuccus('Product Has Been Uploaded')
          setProductName('')
          setDescription('')
          setProductId('')
          setImgUpload('')
          setTimeout(function(){
            setSuccus('')

          },2000)
        }
        
      } catch (error) {
        setError(error.message)
        setTimeout(function(){
          setError('')
        },2000)
      }

    })
    .catch(function(err){
      console.log(err.message ,"MESSAGE ERROR")
      setError(err.message)
      setTimeout(function(){
        setError('')
      },2000)
    })
    

   
    
  

  




  }


        


    return(
      <div>
     <div>
          {
            succus != '' ? <p>{succus}</p> :  null
          }
          {
            error != '' ? <p>{error}</p> :  null
          }
     </div>
    <div>

        <label>Image Upload : <input type='file' onChange={(e)=>{setImgUpload(e.target.files[0])}} /></label><br />
        <label>Product Name : <input type="text" onChange={(e)=>{setProductName(e.target.value)}} value={productName} /></label><br />
        <label>Description : <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description} /></label><br />
        <label>ProductID : <input type="text" onChange={(e)=>{setProductId(e.target.value)}} value={productId} /></label><br />
        <h3>Categories</h3>
        <label for="martial-arts">MartialArts : </label>
  <select name="martial-arts" id="martial-arts">
    <optgroup label="Martial-Arts">
      <option value="karate-uniforms">Karate Unfirms</option>
      <option value="jiu-jitsu-uniforms">Jiu Jitsu Unifrom</option>
      <option value="taekwondo-uniforms">Taekwondo Uniforms</option>
      <option value="kung-fu-uniforms">Kung Fu Uniforms</option>
      <option value="hakama-uniforms">Hakama Uniforms</option>
      <option value="belts">Belts</option>
    </optgroup>
    
  </select>
  <br /><br />
        
        <button onClick={addProduct}>Add Product</button>
      </div>
 

         </div>
    )
}

export default MyAdmin;

