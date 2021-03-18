import React, {useEffect, useState}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import Welcome from '../components/Welcome';
import NewUserForm from '../components/NewUserForm';
import UserData from '../components/UserData';
import EditDetails from '../components/EditDetails';
import AddMeasurement from '../components/AddMeasurement';
import ErrorPage from '../components/ErrorPage';
import Request from '../helpers/Request';
import About from '../components/About';
import Guide from '../components/Guide';



const HairGoalsContainer = () => {

    const [users, setUsers] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [loaded, setLoaded] = useState(false);


    const getAllUsers = () => {
        console.log("Keep your hair on! I'm fetching the users NOW!");
        fetch('/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .then(() => setLoaded(true))
        .catch(err => console.error);  
    }

    const getMeasurements = () => {
        console.log("Running getMeasurements");
        fetch('/measurements')
        .then(res => res.json())
        .then(data => setMeasurements(data))
    }
    
    useEffect(() => {
        getAllUsers();
    }, [setUsers]);

    useEffect(() => {
        getMeasurements();
    }, [setMeasurements]);

    const findUserById = function(id){
        return users.find((user) => {
            return user.id === parseInt(id);
        })
    }

    const handleDelete = function(id){
        const request = new Request();
        const url = "/users/" + id;
        request.delete(url)
        .then(() => window.location = "/user-details")
    }
    
    const handleCreate = function(user){
        const request = new Request();
        request.post("/users", user)
        .then(() => window.location = "/user-details/1") // eventually it should take us
    // somewhere with the user's id, like...
    // .then(() => window.location = "/user-details/" + user.id)
    // but user maybe hasn't loaded at this point, so it can't get the id of undefined
    }

    const handleUpdate = function(user){
        const request = new Request();
        request.patch("/users/" + user.id, user)
        .then(() => {
            window.location = "/edit-details/" + user.id; // we don't currently have a /users/ path
        })
    }
    
    const handleAddMeasurement = function(measurement){
        console.log("Running handleAddMeasurement")
        const request = new Request();
        request.post("/measurements", measurement)
        .then(() => window.location = "/user-details/1")
    }


    if(!users){
        return null;
    }
    if(!loaded){
        return null;
    }

    return (
        <Router>
            <>
                <SiteHeader theOneUser={users[0]} loaded={loaded} />
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/new-user" render={() => <NewUserForm theOneUser={users[0]} onNewUserSubmit={handleCreate}/>}/>
                    <Route path="/user-details/1" render={() => <UserData theOneUser={users[0]} loaded={loaded}/>}/>
                    <Route path="/add-measurement" render={() => <AddMeasurement theOneUser={users[0]} loaded={loaded} onNewAddedMeasurement={handleAddMeasurement}/>}/>
                    <Route path="/edit-details" component={EditDetails}/>
                    <Route path="/about" component={About}/>
                    <Route path="/guide" component={Guide}/>
                    <Route component={ErrorPage}/>
                </Switch>

            </>
        </Router>
    )
}

export default HairGoalsContainer;