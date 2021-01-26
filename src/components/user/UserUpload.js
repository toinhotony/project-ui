import React, { useState } from "react";
import axios from "axios";

function UserUpload() {
    const baseURL = 'http://localhost:8089/api/users/import';

    const [cardFile, setCardFile] = useState();

    const handleUploadFile = (e) => setCardFile(e.target.files[0]);

    const addNewCard = async () => {
        const data = new FormData();
        data.append("file", cardFile);
        
        axios.post(baseURL, data)
    };

    return (
        <div>
            <input type="file" onChange={handleUploadFile} accept="application/txt" />
            <button onClick={addNewCard}>enviar</button>
        </div>
    )
}  

export default UserUpload;