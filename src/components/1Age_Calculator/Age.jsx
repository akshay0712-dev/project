import React, { useState } from 'react';
import "./Age.css"

const Age = () => { 
    const [age, setAge] = useState("");
    const currentYear = new Date().getFullYear();
    const agee = (e) => {
      const dateObject = new Date(e.target.value);
      
      const selectedYear =  dateObject.getFullYear();
      setAge(currentYear - selectedYear);
    }
  
    return (
      <>
        <div className="box mx-auto">
          <span className="boxHeading">Age Calculator</span>
          <div className="dateBox flex flex-row  ">
            <label className="font-bold text-base"> Select your Birth Date: </label>
            <input
              type="date"
              className='h-[4vh] w-[40vw] md:w-[12vw] ml-3 text-sm '
              onChange={(e) => {
                agee(e);
              }}
            />
          </div>
          <div className="w-full text-base ">
            Your Age is : <span className="font-bold">
            {age > 0 ? `${' '  + age}` : ' Enter valid Date'}
            </span>
          </div>
        </div>
      </>
    );
  }
  
  export default Age;
  