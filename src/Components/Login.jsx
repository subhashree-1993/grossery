import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    Number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };


  const submit = async(e)=>{
    e.preventDefault()
    try{
      const sendall = await fetch(`url`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(login)
      })
     
    if(sendall.ok){
      console.log("Done");
    }else{
      console.error("error",error);
    }
    }catch(error){
      console.log("error while send",error);
    }

  }



  const handleSubmit = () => {
    console.log(login);
  };

  return (
    <div>
      <div>
        <div
          style={{
            background: "black",
            width: "55%",
            height: "60vh",
            margin: "auto",
            marginTop: "150px",
            borderRadius: "20px",
          }}>
          <h1
            style={{
              width: "40%",
              marginLeft: "60px",
              color: "white",
              fontFamily: "sans-serif",
              position: "relative",
              top: "100px",
              fontSize: "40px",
            }}>
            Enter Mobile Number
          </h1>
          <input
            name="Number"
            type="Number"
            placeholder="Mobile Number"
            onChange={handleChange}
            value={login.Number}
            style={{
              position: "relative",
              height: "30px",
              width: "260px",
              marginLeft: "60px",
              top: "100px",
              color: "black",
              fontSize: "20px",
            }}
          />
          <br />
          <button
            type="button"
            style={{
              position: "relative",
              height: "40px",
              borderRadius: "10px",
              border: "1px solid black",
              cursor: "pointer",
              width: "258px",
              fontFamily: "sans-serif",
              fontSize: "20px",
              marginLeft: "60px",
              top: "120px",
              background: "white",
              fontWeight: "600",
            }}
            onClick={submit}>
            Get OTP
          </button>
          <div
            style={{
              background: "black",
              width: "2px",
              height: "40vh",
              position: "relative",
              left: "55%",
              top: "-130px",
              backgroundColor: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
