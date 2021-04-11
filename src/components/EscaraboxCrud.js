import React, {useEffect, useState} from 'react';
import EscaraboxForm from './EscaraboxForm';

import {db} from '../firebase'

const EscaraboxCrud = () => {

const [users,setUsers] = useState([]);

    const addOrEdit = async (userObject) =>{
        await db.collection('users').doc().set(userObject)
        alert('SUS DATOS FUERON GUARDADOS CON EXITO')
    }
    const getLinks =async()=>{
        db.collection("users").onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data()})
            });
            setUsers(docs);
        });
    };

    useEffect(() => {
        getLinks();
    }, []);

    return (
        <div>
            <EscaraboxForm addOrEdit={addOrEdit} />
            {console.log(users)}
        </div>
    );
};

export default EscaraboxCrud;
