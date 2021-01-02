// import React, { useState } from "react";

// function App() {
//   const [fullName, setFullname] = useState({
//     fName: "",
//     lName: ""
//   });

//   function onChangeFullname(event) {
//     const newValue = event.target.value;
//     const inputName = event.target.name;
//     //Else the below decontrcuted format can be writted
//     // const { value, name } = event.target;

//     setFullname(function (prevValue) {
//       if (inputName === "fName") {
//         return {
//           fName: newValue,
//           lName: prevValue.lName
//         };
//       } else if (inputName === "lName") {
//         return {
//           fname: prevValue.fName,
//           lname: newValue
//         };
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <form>
//         <input
//           onChange={onChangeFullname}
//           name="fName"
//           placeholder="First Name"
//           value={fullName.fName}
//         />
//         <input
//           onChange={onChangeFullname}
//           name="lName"
//           placeholder="Last Name"
//           value={fullName.lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
