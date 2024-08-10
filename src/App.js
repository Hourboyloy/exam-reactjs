import { useState } from "react";
import Formlogin from "./Components/Formlogin";
function App() {
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [dob, setDoB] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pob,setPoB] =useState("")
  const [gender, setGender] = useState("");

  const handleSetlastname = (val)=>{
    setLastname(val);
  }

    const handleSetname = (val) => {
      setName(val);
    };

      const handleSetDoB = (val) => {
        setDoB(val);
      };
      const handleSetEmail= (val) => {
        setEmail(val);
      };

      const handleSetPhone = (val) => {
        setPhone(val);
      };

       const handleSetPoB = (val) => {
         setPoB(val);
       };

       const handleSetGender = (val) => {
         setGender(val);
       };


       const handleSubmit = (e)=>{
          const isemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if(email===""){
             if (name && lastname && dob){
                alert(lastname+", "+name+", "+dob+", "+gender+", "+phone+", "+email+", "+pob);
               }         
          }
          else if(!isemail.test(email)) {
              e.preventDefault();
          } 
          else {
               if (name && lastname && dob){
                alert(lastname+", "+name+", "+dob+", "+gender+", "+phone+", "+email+", "+pob);
               }          
          }
       }
         return (
           <div className="md:h-screen">
             <div className="h-full">
               <Formlogin
                 handleSetlastname={handleSetlastname}
                 handleSetname={handleSetname}
                 handleSetDoB={handleSetDoB}
                 handleSetEmail={handleSetEmail}
                 handleSetPhone={handleSetPhone}
                 handleSetPoB={handleSetPoB}
                 handleSetGender={handleSetGender}
                 handleSubmit={handleSubmit}
               />
             </div>
           </div>
         );
}

export default App;
