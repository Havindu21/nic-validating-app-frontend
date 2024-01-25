// // // UploadManagerComponent.jsx

// // // import React, { useState } from 'react';
// // // import FileUploadComponent from './FileUploadComponent';
// // // import axios from 'axios';

// // // function UploadManagerComponent() {
// // //   const [selectedFiles, setSelectedFiles] = useState([]);
// // //   const [responses, setResponses] = useState([]);

// // //   const handleSelectFile = (file) => {
// // //     setSelectedFiles((prevFiles) => [...prevFiles, file]);
// // //   };

// // //   const handleUploadAll = async () => {
// // //     if (selectedFiles.length === 0) {
// // //       alert('Please select at least one file before uploading.');
// // //       return;
// // //     }

// // //     const formData = new FormData();

// // //     selectedFiles.forEach((file, index) => {
// // //       formData.append(`csvFiles[${index}]`, file);
// // //     });

// // //     try {
// // //       const result = await axios.post('http://localhost:8080/api/citizen/upload', formData, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data',
// // //         },
// // //       });

// // //       setResponses(result.data);
// // //     } catch (error) {
// // //       console.error('Error uploading files:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       {/* Repeat this block for each FileUploadComponent */}
// // //       <FileUploadComponent onSelect={handleSelectFile} />

// // //       {/* Button to trigger upload for all files */}
// // //       <button onClick={handleUploadAll}>Upload All Files</button>

// // //       {/* Display responses for all files */}
// // //       {responses.length > 0 && (
// // //         <div>
// // //           <h4>Responses from the server:</h4>
// // //           {responses.map((response, index) => (
// // //             <div key={index}>
// // //               <pre>{JSON.stringify(response, null, 2)}</pre>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default UploadManagerComponent;

// // // UploadManagerComponent.jsx
// // import { useState } from 'react';
// // import axios from 'axios';

// // function UploadManagerComponent() {
// //   const [selectedFiles, setSelectedFiles] = useState([]);
// //   const [responses, setResponses] = useState([]);

// //   const handleFileSelect = (file) => {
// //     setSelectedFiles((prevFiles) => [...prevFiles, file]);
// //   };

// //   const handleUploadAll = async () => {
// //     if (selectedFiles.length === 0) {
// //       alert('Please select at least one file before uploading.');
// //       return;
// //     }

// //     const formData = new FormData();

// //     selectedFiles.forEach((file, index) => {
// //       formData.append(`csvFiles[${index}]`, file);
// //     });

// //     try {
// //       const result = await axios.post('http://localhost:8080/api/citizen/upload', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       setResponses(result.data);
// //     } catch (error) {
// //       console.error('Error uploading files:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleUploadAll}>Upload All Files</button>

// //       {/* Display responses for all files */}
// //       {responses.length > 0 && (
// //         <div>
// //           <h4>Responses from the server:</h4>
// //           {responses.map((response, index) => (
// //             <div key={index}>
// //               <pre>{JSON.stringify(response, null, 2)}</pre>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default UploadManagerComponent;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function UploadManagerComponent({ files }) {
//   const [response, setResponse] = useState(null);

//   useEffect(() => {
//     if (files.length > 0) {
//       const formData = new FormData();
//       files.forEach((file) => {
//         formData.append('csvFiles', file);
//       });

//       axios
//         .post('http://localhost:8080/api/citizen/upload', formData)
//         .then((res) => {
//           setResponse(res.data);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }
//   }, [files]);

//   return (
//     <div>
//       {response && <div>{JSON.stringify(response)}</div>}
//     </div>
//   );
// }

// export default UploadManagerComponent;