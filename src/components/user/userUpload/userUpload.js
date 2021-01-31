import './userUpload.css'
import React, { useState } from "react";

const UserUpload = props =>  {
    const { importFile } = props;
    const [cardFile, setCardFile] = useState({});
    const handleUploadFile = (e) => setCardFile(e.target.files[0]);

    const addNewCard = () => {
        const data = new FormData();
        data.append("file", cardFile);
        importFile(data);
    };

    return (
        <div>
            <div className="main__bloc">
                <div className="captureArchive">
                    <input type="file" onChange={handleUploadFile} accept="application/txt" />
                </div>
                <div>
                    <button className="btn btn-primary btnUpload" onClick={addNewCard}>
                        <i className="fa fa-upload"></i> Upload
                    </button>
                </div>
                
            </div>
            <hr />
        </div>
    )
}  

export default UserUpload;