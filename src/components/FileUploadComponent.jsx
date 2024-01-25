import { useState } from "react";
import axios from "axios";

function FileUploadComponent() {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [file4, setFile4] = useState(null);
    const [response, setResponse] = useState(null);

    const handleFileChange = (event, setter) => {
        const file = event.target.files[0];
        setter(file);
    };

    const handleFileUpload = async () => {
        if (!file1 || !file2 || !file3 || !file4) {
            alert("Please select all four files before uploading.");
            return;
        }

        const formData = new FormData();
        formData.append("csvFiles", file1);
        formData.append("csvFiles", file2);
        formData.append("csvFiles", file3);
        formData.append("csvFiles", file4);

        try {
            const result = await axios.post(
                "http://localhost:8080/api/citizen/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setResponse(result.data);
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    return (
        <div className="container mt-5">
              <h3 className=''>Upload your csv files to Validate NIC </h3>
            <div className="row">
                <div className="col-md-12 mb-3">
                    <input
                        className="form-control"
                        type="file"
                        onChange={(e) => handleFileChange(e, setFile1)}
                    />
                </div>
                <div className="col-md-12 mb-3">
                    <input
                        className="form-control"
                        type="file"
                        onChange={(e) => handleFileChange(e, setFile2)}
                    />
                </div>
                <div className="col-md-12 mb-3">
                    <input
                        className="form-control"
                        type="file"
                        onChange={(e) => handleFileChange(e, setFile3)}
                    />
                </div>
                <div className="col-md-12 mb-3">
                    <input
                        className="form-control"
                        type="file"
                        onChange={(e) => handleFileChange(e, setFile4)}
                    />
                </div>
                <div className="col-md-12 mb-3">
                    <button className="btn btn-info" onClick={handleFileUpload}>
                        Upload Files
                    </button>
                </div>
            </div>

            {response && (
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="border p-3">
                            <h4 className="mb-3 text-center">Validated NICs</h4>
                            {response.map((item, index) => (
                                <div key={index} className="mb-3">
                                    <p>
                                        ({index + 1}) File Name: {item.fileName}
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;NIC: {item.nic}
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;Age: {item.age}
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;Birthday: {item.birthday}
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;Gender: {item.gender}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FileUploadComponent;