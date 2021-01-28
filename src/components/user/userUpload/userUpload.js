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
        <>
            <div className="main__bloc">
                <div>
                    <input type="file" onChange={handleUploadFile} accept="application/txt" />
                </div>
                <div>
                    <button onClick={addNewCard}> Processar </button>
                </div>
            </div>

        </>
    )
}  

export default UserUpload;