import React, {useState} from 'react'
import axios from 'axios';
import key from './../../key'

const Upload = () => {
    const [selectedfile, setselectedfile] = useState(null)

    const changefile = (e) => {
        setselectedfile(e.target.files[0])
        console.log(e.target.files[0]);
    }

    const uploadFile = async () => {
        const fd = new FormData();
        fd.append('files', selectedfile)
        
        const imgres = await axios({
            method: 'POST',
            url: `${key.mainApi}/upload`,
            data: fd
        })
        console.log(imgres);
        

    }

    return (
        <div>
            <br /><br /><br /><br />
            <label>Select files:</label>
            <input type="file" onChange={changefile} /><br /><br />
            <button className="default-button" onClick={uploadFile}>submit</button>
        </div>
    )
}

export default Upload
