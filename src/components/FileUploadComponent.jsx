// // // // function FileUploadComponent(){
// // // //     return(
// // // //         <div>
// // // //             <div>hi</div>
// // // //         </div>
// // // //     )
// // // // }

// // // // export default FileUploadComponent;

// FileUploadComponent.jsx


import { useState } from 'react';
import axios from 'axios';

function FileUploadComponent() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [response, setResponse] = useState(null);
  var index;

  const handleFileChange = (event, setter) => {
    const file = event.target.files[0];
    setter(file);
  };

  const handleFileUpload = async () => {
    if (!file1 || !file2 || !file3 || !file4) {
      alert('Please select all four files before uploading.');
      return;
    }

    const formData = new FormData();
    formData.append('csvFiles', file1);
    formData.append('csvFiles', file2);
    formData.append('csvFiles', file3);
    formData.append('csvFiles', file4);

    try {
      const result = await axios.post('http://localhost:8080/api/citizen/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(result.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 mb-3">
          <input className="form-control" type="file" onChange={(e) => handleFileChange(e, setFile1)} />
        </div>
        <div className="col-md-12 mb-3">
          <input className="form-control" type="file" onChange={(e) => handleFileChange(e, setFile2)} />
        </div>
        <div className="col-md-12 mb-3">
          <input className="form-control" type="file" onChange={(e) => handleFileChange(e, setFile3)} />
        </div>
        <div className="col-md-12 mb-3">
          <input className="form-control" type="file" onChange={(e) => handleFileChange(e, setFile4)} />
        </div>
        <div className="col-md-12 mb-3">
          <button className="btn btn-primary" onClick={handleFileUpload}>
            Upload Files
          </button>
        </div>
      </div>

      {response && (
  <div className="row mt-3">
    <div className="col-md-12">
      <div className="border p-3">
        <h4 className="mb-3">Response from the server:</h4>
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



/////////////////////////////////////////////////////////////////////////////////////////////////

// import { useState } from 'react';
// import axios from 'axios';

// function FileUploadComponent() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [response, setResponse] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFileUpload = async () => {
//     if (!selectedFile) {
//       alert('Please select a file before uploading.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('csvFiles', selectedFile);

//     try {
//       const result = await axios.post('http://localhost:8080/api/citizen/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setResponse(result.data);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Upload File</button>

//       {response && (
//         <div>
//           <h4>Response from the server:</h4>
//           <pre>{JSON.stringify(response, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FileUploadComponent;

// // // FileUploadComponent.jsx

// // // FileUploadComponent.jsx

// // // import React, { useState } from 'react';

// // // function FileUploadComponent({ onSelect }) {
// // //   const handleFileChange = (event) => {
// // //     const selectedFile = event.target.files[0];
// // //     onSelect(selectedFile);
// // //   };

// // //   return (
// // //     <div>
// // //       <input type="file" onChange={handleFileChange} />
// // //     </div>
// // //   );
// // // }

// // // export default FileUploadComponent;


// // // FileUploadComponent.jsx
// // // FileUploadComponent.jsx
// // // FileUploadComponent.jsx
// // import React, { useState } from 'react';
// // import PropTypes from 'prop-types';

// // function FileUploadComponent({ onFileSelect }) {
// //   const [selectedFile, setSelectedFile] = useState(null);

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     setSelectedFile(file);
// //     onFileSelect(file);
// //   };

// //   return (
// //     <div>
// //       <input type="file" onChange={handleFileChange} />
// //     </div>
// //   );
// // }

// // FileUploadComponent.propTypes = {
// //   onFileSelect: PropTypes.func.isRequired,
// // };

// // export default FileUploadComponent;



// import React, { useState } from 'react';

// function FileUploadComponent({ onFileUpload }) {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//     onFileUpload(event.target.files[0]);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//     </div>
//   );
// }

// export default FileUploadComponent;

// import React, { useState } from 'react';

// function FileUploadComponent() {
//   const [file1, setFile1] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [file3, setFile3] = useState(null);
//   const [file4, setFile4] = useState(null);
//   const [response, setResponse] = useState(null);

//   const handleFileChange = (event, setter) => {
//     const file = event.target.files[0];
//     setter(file);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('files', file1);
//       formData.append('files', file2);
//       formData.append('files', file3);
//       formData.append('files', file4);
  
//       const fetchOptions = {
//         method: 'POST',
//         body: formData,
//       };
  
//       const response = await fetch('http://localhost:8080/api/citizen/upload', fetchOptions);
  
//       if (!response.ok) {
//         // Log or display the error response
//         const errorData = await response.json();
//         console.error('Error uploading files:', errorData);
//       } else {
//         const data = await response.json();
//         setResponse(data);
//       }
//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };
  

//   return (
//     <div>
//       <input type="file" onChange={(e) => handleFileChange(e, setFile1)} />
//       <input type="file" onChange={(e) => handleFileChange(e, setFile2)} />
//       <input type="file" onChange={(e) => handleFileChange(e, setFile3)} />
//       <input type="file" onChange={(e) => handleFileChange(e, setFile4)} />
      
//       <button onClick={handleUpload}>Upload</button>

//       {response && Array.isArray(response) && (
//         <div>
//           {response.map((item, index) => (
//             <div key={index}>
//               <p>File Name: {item.fileName}</p>
//               <p>NIC: {item.nic}</p>
//               <p>Age: {item.age}</p>
//               <p>Birthday: {item.birthday}</p>
//               <p>Gender: {item.gender}</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FileUploadComponent;
