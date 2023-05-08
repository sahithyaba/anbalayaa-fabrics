import React, {useState} from "react";
import "./ImageUpload.css"

function ImageUpload(){

    const[image,setImage] = useState("");

    function convertToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: ",error);
        };
    }

    // const[image2,setImage2] = useState("");
    

    // function convertToBase64(e){
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setImage(reader.result);
    //     };
    //     reader.onerror = error => {
    //         console.log("Error: ",error);
    //     };
    // }

    // const[image3,setImage3] = useState("");

    // function convertToBase64(e){
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setImage(reader.result);
    //     };
    //     reader.onerror = error => {
    //         console.log("Error: ",error);
    //     };
    // }

    // const[image4,setImage4] = useState("");

    // function convertToBase64(e){
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setImage(reader.result);
    //     };
    //     reader.onerror = error => {
    //         console.log("Error: ",error);
    //     };
    // }

    // const[image5,setImage5] = useState("");

    // function convertToBase64(e){
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setImage(reader.result);
    //     };
    //     reader.onerror = error => {
    //         console.log("Error: ",error);
    //     };
    // }

    // const[image6,setImage6] = useState("");

    // function convertToBase64(e){
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setImage(reader.result);
    //     };
    //     reader.onerror = error => {
    //         console.log("Error: ",error);
    //     };
    // }

    // const[image7,setImage7] = useState("");

    // function convertToBase64(e){
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setImage(reader.result);
    //     };
    //     reader.onerror = error => {
    //         console.log("Error: ",error);
    //     };
    // }

    // const[image8,setImage8] = useState("");

    // function convertToBase64(e){
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setImage(reader.result);
    //     };
    //     reader.onerror = error => {
    //         console.log("Error: ",error);
    //     };
    // }

    // const[image9,setImage9] = useState("");

    // function convertToBase64(e){
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setImage(reader.result);
    //     };
    //     reader.onerror = error => {
    //         console.log("Error: ",error);
    //     };
    // }

    function uploadImage(){
        fetch("http://localhost:5000/upload-image",{
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                base64:image
            })
        }).then((res)=>res.json()).then((data)=>console.log(data))
    }

    return(
        <div className="auth-wrapper">
            <center>
            <div className="tit">
                <h1>Upload Latest Product Images</h1>
            </div>
            </center>
           
<br/>
            {image=="" || image==null?"": <img width={200} height={150} src={image} className="image-view"/>}
            <div className="auth-inner" style={{width: "auto"}}>
                <label className="image-title" >Image : </label> 
                 
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={convertToBase64}
                    className="input-img"
                />
                <button onClick={uploadImage}>Upload Image </button>               
            </div>

            {/* <div className="auth-inner" style={{width: "auto"}}>
                <label className="image-title" >Image 2: </label> 
                {image2=="" || image2==null?"": <img src={image2} className="image-view"/>} 
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={convertToBase64}
                    className="input-img"
                />
                <button onClick={uploadImage}>Upload Image 2</button>               
            </div>

            <div className="auth-inner" style={{width: "auto"}}>
                <label className="image-title" >Image 3: </label> 
                {image3=="" || image3==null?"": <img width={150} height={100} src={image3} className="image-view"/>} 
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={convertToBase64}
                    className="input-img"
                />
                <button onClick={uploadImage}>Upload Image 3</button>               
            </div>

            <div className="auth-inner" style={{width: "auto"}}>
                <label className="image-title" >Image 4: </label> 
                {image4=="" || image4==null?"": <img width={150} height={100} src={image4} className="image-view"/>} 
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={convertToBase64}
                    className="input-img"
                />
                <button onClick={uploadImage}>Upload Image 4</button>               
            </div>

            <div className="auth-inner" style={{width: "auto"}}>
                <label className="image-title" >Image 5: </label> 
                {image5=="" || image5==null?"": <img width={150} height={100} src={image5} className="image-view"/>} 
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={convertToBase64}
                    className="input-img"
                />
                <button onClick={uploadImage}>Upload Image 5</button>               
            </div>

            <div className="auth-inner" style={{width: "auto"}}>
                <label className="image-title" >Image 6: </label> 
                {image6=="" || image6==null?"": <img width={150} height={100} src={image6} className="image-view"/>} 
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={convertToBase64}
                    className="input-img"
                />
                <button onClick={uploadImage}>Upload Image 6</button>               
            </div>

            <div className="auth-inner" style={{width: "auto"}}>
                <label className="image-title" >Image 7: </label> 
                {image7=="" || image7==null?"": <img width={150} height={100} src={image7} className="image-view"/>} 
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={convertToBase64}
                    className="input-img"
                />
                <button onClick={uploadImage}>Upload Image 7</button>               
            </div>

            <div className="auth-inner" style={{width: "auto"}}>
                <label className="image-title" >Image 8: </label> 
                {image8=="" || image8==null?"": <img width={150} height={100} src={image8} className="image-view"/>} 
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={convertToBase64}
                    className="input-img"
                />
                <button onClick={uploadImage}>Upload Image 8</button>               
            </div>

            

            <div className="border">
                <div className="logout">Logout</div>
            </div>
              
        </div>
    )
}

export default ImageUpload;