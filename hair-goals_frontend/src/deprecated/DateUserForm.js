// import React, {useState} from 'react';
// import UserData from './UserData';

// const NewUserForm = ({onNewUserSubmit}) => {

//     const [name, setName] = useState("");

//     const [date, setDate] = useState("");

//     const [hairLength, setHairLength] = useState(0);

//     const [goalHairLength, setGoalHairLength] = useState("");

//     const handleNameChange = (evt) => {
//         setName(evt.target.value);
//     }

//     const handleHairLengthChange = (evt) => {
//         setHairLength(evt.target.value);
//     }

//     const handleDateChange = (evt) => {
//         setDate(evt.target.value);
//     }

//     const handleGoalHairLengthChange = (evt) => {
//         setGoalHairLength(evt.target.value);
//     }

//     const handleFormSubmit = (evt) => {
//         console.log("User has been submitted");
//         evt.preventDefault();
//         const nameToSubmit = name.trim();
//         const hairLengthToSubmit = hairLength;
//         const dateToSubmit = date.trim(); // might need to reformat date
//         const goalHairLengthToSubmit = goalHairLength;
        

//         let proceed = true;

//         if(!nameToSubmit){
//             proceed = false
//         } 
//         if(!hairLengthToSubmit){
//             proceed = false
//         }
//         if(!dateToSubmit){
//             proceed = false
//         }
//         if(!goalHairLengthToSubmit){
//             proceed = false
//         }
        
        
//         if(proceed === true) {
//             onNewUserSubmit({
//                 name: nameToSubmit,
//                 hairLength: hairLengthToSubmit,
//                 growthRate: 1,
//                 date: dateToSubmit,
//                 goalHairLength: goalHairLengthToSubmit, 
//             });           

//             setName("");
//             setHairLength(0);
//             setDate("");
//             setGoalHairLength(0);
//         } 
//     }




//     return (
//         <div className="form-wrapper">
//         <form onSubmit={handleFormSubmit}>
//             <label htmlFor="name">
//                 What's your name?
//                 <input
//                     type="text"
//                     placeholder="Your Name Please"
//                     value={name}
//                     onChange={handleNameChange}
//                 />
//             </label>
//             <label htmlFor="hairLength">
//                 What's your hair length in cm?
//                 <input
//                     type="number"
//                     placeholder="Your Hair Length in cm Please"
//                     value={hairLength}
//                     onChange={handleHairLengthChange}
//                 /> 
//             </label>
//             <label htmlFor="date">
//                 What's the date today?
//                 <input
//                     type="text"
//                     placeholder="What is Today"
//                     value={date}
//                     onChange={handleDateChange}
//                 />
//             </label>
//             <label htmlFor="goalLength">
//                 What's your goal length in cm?
//                 <input
//                     type="number"
//                     placeholder="Hair Goal Length in cm Please"
//                     value={goalHairLength}
//                     onChange={handleGoalHairLengthChange}
//                 /> 
//             </label>
//             <button>Submit</button>                                  
//         </form>
//         <UserData/>
//         </div>
//     )
// }





// export default NewUserForm;