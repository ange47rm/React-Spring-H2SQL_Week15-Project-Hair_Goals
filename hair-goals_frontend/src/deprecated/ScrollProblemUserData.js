// import React, {useState, ScrollView} from 'react';
// import {Link} from 'react-router-dom';


// const UserData = ({theOneUser}) => {

  
//     if (!theOneUser){
//       return (

//           <>
//             <h1>NOT AVAILABLE</h1>

//           </>
//       )
//     }


  
//     const userMeasurements = theOneUser.measurements.map((measurement, index) => {
//       return <li key={index}> Date measured: {measurement.dateMeasured} - Length: {measurement.length}</li>
//     })


//     if (theOneUser.measurements.length >= 1){

//       let latestMeasurement = theOneUser.measurements[theOneUser.measurements.length - 1].length;

//     return (

//       <>
//         <div className="wrapper">
//         <div className="inner-wrapper">

//         <h2>Congratulations, {theOneUser.name}!</h2>
//         <ul>
//           {userMeasurements}
//         </ul>
//         <p>You've just embarked on a magical hair journey! Let's Grow Together</p>
        
//         <p> Your hair length is {latestMeasurement}cm. Good Growing!</p>

//         <p>You want to grow to {theOneUser.goalHairLength}cm. You Rapunzel you.</p>
//         <p>Based on the average human growth rate, you have {theOneUser.timeTillGoal} months till you meet your goal length</p>
//         <p>"Your hair is {theOneUser.keyLength.toLowerCase()} length - hoorah for you!"</p>

//         <Link to='/add-measurement' className="navlink"><button>Add Measurement</button></Link>

//   </div>
//   </div>
//         </>
//     )
//   }

//   if (theOneUser.measurements.length === 0){
//     return (

//       <>
        
//         <div className="wrapper">
//         <div className="inner-wrapper">

//         <h2>Congratulations, {theOneUser.name}!</h2>

//         <p>You've just embarked on a magical hair journey! Let's Grow Together</p> 
//         <p> Your starting hair length is {theOneUser.hairLength}cm. Good Growing!</p>


//         <p>You want to grow to {theOneUser.goalHairLength}cm. You Rapunzel you.</p>
//         <p>Based on the average human growth rate, you have {theOneUser.timeTillGoal} months till you meet your goal length</p>
//         <p>"Your hair is {theOneUser.keyLength.toLowerCase()} length - hoorah for you!"</p>

//         <Link to='/add-measurement' className="navlink"><button>Add Measurement</button></Link>

//         </div>
//         </div>
//         </>
//     )
//   }
// }



// export default UserData;