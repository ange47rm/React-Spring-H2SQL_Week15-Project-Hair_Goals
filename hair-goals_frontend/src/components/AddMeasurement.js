import React, {useState} from 'react';
// import NavBar from './NavBar';

const AddMeasurement = ({theOneUser, loaded, onNewAddedMeasurement}) => {
    
    const [length, setLength] = useState("");

    const [dateMeasured, setDateMeasured] = useState ("")

    const handleLengthChange = (evt) => {
        setLength(evt.target.value);
    }

    const handleDateMeasuredChange = (evt) => {
        setDateMeasured(evt.target.value);
    }

    const handleMeasurementSubmit = (evt) => {
        console.log("Running handleMeasurementSubmit")
        evt.preventDefault();
        const lengthToSubmit = length;
        const dateMeasuredToSubmit = dateMeasured;


        let proceed = true;

        if(!length){
            proceed = false
        } 

        if(!dateMeasured){
            proceed = false
        } 

        if (proceed === true){
            onNewAddedMeasurement ({
                length: lengthToSubmit,
                dateMeasured: dateMeasuredToSubmit,
                user: theOneUser
            })
            console.log(onNewAddedMeasurement);

            setLength("");
            setDateMeasured("")
        }
    }

    return (
        <>
        <div className="form-wrapper">
            <form onSubmit={handleMeasurementSubmit}>

                <label htmlFor="length">
                    Add your updated hair length (in cm)
                    <input 
                        type="number" 
                        placeholder="Measurement in cm"
                        value={length}
                        onChange={handleLengthChange}/>
                </label>
                <br/>
                <br/>
                <label htmlFor="date">
                    What was that measurement taken?
                    <input 
                        type="text" 
                        placeholder="dd/mm/yyyy"
                        value={dateMeasured}
                        onChange={handleDateMeasuredChange}/>
                </label>
                <br/>
                <br/>
                <button>Submit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg></button>

            </form>
            </div>
        </>
    )
}




export default AddMeasurement;
