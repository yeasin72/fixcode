import React, { useState, useEffect } from 'react';
import './Setprofile.css'
import ScaleLoader from "react-spinners/ScaleLoader";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckIcon from '@material-ui/icons/Check';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import key from './../../key';
import axios from 'axios'

const Setprofile = () => {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [Error, setError] = useState({err: false, message: ''})
    const [fullName, setFullName] = useState('')
    const [title, setTitle] = useState('')
    const [facebookLink, setfacebookLink] = useState('')
    const [githubLink, setGithubLink] = useState('')
    const [twitterLink, setTwitterLink] = useState('')
    const [gender, setGender] = useState('Male')
    const [bio, setBio] = useState('')
    const [username, setUsername] = useState('')
    const [avatar, setAvatar] = useState(null)
    const [date, setDate] = useState(new Date());



    const setDefaultProfile = async () => {
        const profileid = localStorage.getItem('puid')
        const { data } = await axios.get(`${key.createProfileApi}/${profileid}`, {
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        if(date){
            setFullName(data.full_name? data.full_name: '')
            setTitle(data.user_title? data.user_title : '')
            setfacebookLink(data.facebook_url? data.facebook_url : '')
            setGithubLink(data.github_url? data.github_url : '')
            setTwitterLink(data.twitter_url? data.twitter_url : '')
            setGender(data.gender? data.gender : 'Male')
            setBio(data.user_bio? data.user_bio : '')
            setUsername(data.username? data.username : '')
        }
    }
    
    useEffect(()=>{
        setDefaultProfile()
    }, [])

    
    
        // @function onChange handler
        // @resone take value from feild
        const fullnameHandler = (e) => setFullName(e.target.value);
        const titleHandler = (e) => setTitle(e.target.value);
        const facebookLinkHandler = (e) => setfacebookLink(e.target.value);
        const githubLinkHandler = (e) => setGithubLink(e.target.value);
        const twitterLinkHandler = (e) => setTwitterLink(e.target.value);
        const genderHandler = (e) => setGender(e.target.value);
        const bioHandler = (e) => setBio(e.target.value);
        const avatarHandler = (e) => setAvatar(e.target.files[0]);
        const dateHandler = (e) => setDate(e);
    
    const goDashbord = () => window.location.replace("/dashboard")





    const saveProfile = async () => {
        
        // @function error handeling
        if(fullName.length < 3 ){
            setError({err: true, message: 'Type valid full name'})
        }
        else if(title.length < 2 ){
            setError({err: true, message: 'Title not valid'})
        }
        else{
            try {
                setLoading(true)
                const fd = new FormData();
                fd.append('files', avatar)
                
                const imgres = await axios({
                    method: 'POST',
                    url: `${key.mainApi}/upload`,
                    data: fd
                })
                // @function initializing data
                // @resone to update default profile
                const tokencode = {
                    headers:{
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }
                const profileid = localStorage.getItem('puid')
                const profile = {
                    "full_name": fullName,
                    "user_bio": bio, 
                    "user_title": title,
                    "github_url": githubLink, 
                    "facebook_url": facebookLink, 
                    "twitter_url": twitterLink, 
                    "gender": gender,
                    "user_avatar": imgres.data[0],
                    "date_of_birth": date.toISOString().slice(0, 10),
                }

                const {data} = await axios.put(`${key.createProfileApi}/${profileid}`, profile, tokencode)
                console.log(data);
                if(data){
                    setFullName('')
                    setTitle('')
                    setfacebookLink('')
                    setGithubLink('')
                    setTwitterLink('')
                    setGender('')
                    setBio('')
                    setDate(new Date())
                    setLoading(false)
                    setSuccess(true)
                    goDashbord()

                }
            } catch (error) {
                console.log(error);
            }
        }
        
    }
    


    return (
        <div className="setprofile-page" style={{backgroundImage: 'url("./img/loginbg.svg")'}}>
            <div className="container setprofile-main">
                <div className="setprofile-left">
                    
                        <div className="setprofile-heading">
                            <h3>Submit your account details</h3>
                        </div>
                    
                    <div className="setprofilesystem">
                        <div className="setprofile-item">
                            <input placeholder="Full Name *" type="text" value={fullName} onChange={fullnameHandler} />
                        </div>
                        
                        <div className="setprofile-item">
                            <input placeholder="Title *" type="text" value={title} onChange={titleHandler} />
                        </div>
                        <div className="setprofile-item">
                            <input placeholder="facebook profile link" type="text" value={facebookLink} onChange={facebookLinkHandler} />
                        </div>
                        <div className="setprofile-item">
                            <input placeholder="Github account link" type="text" value={githubLink} onChange={githubLinkHandler} />
                        </div>
                        <div className="setprofile-item">
                            <input placeholder="twitter account link" type="text" value={twitterLink} onChange={twitterLinkHandler} />
                        </div>
                        <div className="setprofile-item">
                            <p>username: {username}</p>
                        </div>
                        <div className="setprofile-item dateofbirth">
                            <p>Date of birth *</p>
                            <DatePicker selected={date} onChange={dateHandler} />
                        </div>
                        <div className="setprofile-item gender">
                            <p>Gender *</p>
                            <select value={gender} onChange={genderHandler}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="setprofile-item picupload">
                            <label>Account avatar</label>
                            <input type="file" onChange={avatarHandler} />
                        </div>
                        <div className="setprofile-item profilebio">
                            <textarea placeholder="Bio" type="text" value={bio} onChange={bioHandler} />
                        </div>
                        <div className="setprofile-item submit-btn">
                            <button className="default-button" onClick={ saveProfile}>Save Data</button>
                        </div>
                        <div className="setprofile-item error">
                            {Error.err? 
                                <p className="errmsg"><ErrorOutlineIcon />{Error.message}</p>
                                :
                                <></>
                            }
                            
                            {
                                success? <p className="successmsg"><CheckIcon />your account updated</p>
                                :
                                <> </>
                            }
                            {
                                loading? <ScaleLoader color={'#106FDE'} loading={loading} size={40} /> : <></>
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="setprofile-right">
                    <img src="./img/hero-img.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Setprofile
