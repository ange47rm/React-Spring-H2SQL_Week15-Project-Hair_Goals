import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const NewUserForm = ({theOneUser, onNewUserSubmit}) => {

    const [name, setName] = useState("");

    const [hairLength, setHairLength] = useState("");

    const [goalHairLength, setGoalHairLength] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleHairLengthChange = (evt) => {
        setHairLength(evt.target.value);
    }


    const handleGoalHairLengthChange = (evt) => {
        setGoalHairLength(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        console.log("User has been submitted");
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const hairLengthToSubmit = hairLength;
        const goalHairLengthToSubmit = goalHairLength;
        

        let proceed = true;

        if(!nameToSubmit){
            proceed = false
        } 
        if(!hairLengthToSubmit){
            proceed = false
        }
        if(!goalHairLengthToSubmit){
            proceed = false
        }
        
        
        if(proceed === true) {
            onNewUserSubmit({
                name: nameToSubmit,
                hairLength: hairLengthToSubmit,
                growthRate: 1,
                goalHairLength: goalHairLengthToSubmit, 
                keyLength: null
            });           

            setName("");
            setHairLength(0);
            setGoalHairLength(0);
        
        } 
    }



if (!theOneUser){
    return (
        <>
        <div className="form-wrapper">
            
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">
                What's your name?<br/>
                <input
                    type="text"
                    placeholder="Name Please!"
                    required="true"
                    value={name}
                    onChange={handleNameChange}
                />
            </label>
            <label htmlFor="hairLength">
                What's your hair length in cm?
                <input
                    type="number"
                    placeholder="Hair Length in cm"
                    required="true"
                    value={hairLength}
                    onChange={handleHairLengthChange}
                /> 
            </label>
            
            <label htmlFor="goalLength">
                What's your goal length in cm?
                <input
                    type="number"
                    required="true"
                    placeholder="Goal Length in cm"
                    value={goalHairLength}
                    onChange={handleGoalHairLengthChange}
                /> 
            </label>
            <button>See your hair future...<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg></button>                                  
        </form>
        </div>
        </>
    )
    }

return (
    <>
    <h1> YOU ALREADY CREATED A USER!!! </h1>

    <Link to='/user-details/1' className="navlink"><button>SEE USER DETAILS HERE</button></Link>
    </>
)

}





export default NewUserForm;