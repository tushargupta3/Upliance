// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from './UserForm.module.css';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line react/prop-types
export default function UserForm({users,saveuser,curruser}) {

    const [user, setUser] = useState({
        name: '',
        Address: '',
        email: '',
        phone: '',
        id: ''
    })

    function validate() {
        if (user.name && user.Address && user.email && user.phone) {
            return true;
        } else {
            return false;
        }
    }

    function genrateId() {
        if (validate()) {
            if(!userAlreadyExists()){
                const tempID = uuidv4();
                setUser(prev => { return { ...prev, id: tempID.toUpperCase() } })
                toast.success('Id Genrated Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }else{
                toast.warn('User Alrerady Exists', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        } else {
            toast.error('Please fill all data', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    function userAlreadyExists(){
        for(const ele of users){
            if(ele.email === user.email){
                return true;
            }
        }
        return false;
    }

    function saveUser(){
        if (user.name && user.Address && user.email && user.phone && user.id) {
            const tempuserlist = [...users];
            tempuserlist.push(user);
            saveuser(tempuserlist);
            curruser(user);
            toast.success('User Saved Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            clear();
        }else{
            toast.error('Please Genrate Id', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        
    }

    function clear() {
        setUser({
            name: '',
            Address: '',
            email: '',
            phone: '',
            id: ''
        })
    }

    return (
        <div className={styles.userfrom}>
            <h1>User Form</h1>
            <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                value={user.name}
                onChange={(e) => { setUser(prev => { return { ...prev, name: e.target.value } }) }}
            />
            <p className={styles.user_id}>User Id : {user.id ? user.id : 'XXXX-XXXX-XXXX'}</p>
            <input
                type="text"
                name=""
                id=""
                placeholder="Address"
                value={user.Address}
                onChange={(e) => { setUser(prev => { return { ...prev, Address: e.target.value } }) }}
            />
            <br />
            <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                value={user.email}
                onChange={(e) => { setUser(prev => { return { ...prev, email: e.target.value } }) }}
            />
            <br />
            <input
                type="tel"
                name=""
                id=""
                placeholder="Phone"
                value={user.phone}
                onChange={(e) => { setUser(prev => { return { ...prev, phone: e.target.value } }) }}
            />
            <br />
            <button className={styles.save_btn} onClick={genrateId}>Genrate ID</button>
            <br />
            <button className={styles.save_btn} onClick={saveUser}>Save</button>
            <br />
            <button className={styles.save_btn} onClick={clear}>Clear</button>
        </div>
    )
}