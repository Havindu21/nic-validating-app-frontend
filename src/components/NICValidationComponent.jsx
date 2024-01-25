import FileUploadComponent from './FileUploadComponent';
// import UploadManagerComponent from './UploadManagerComponent';

function NICValidationComponent() {
    return (
      <div>
        <h2>File Upload and Validation</h2>
        <h4>Upload you csv files below </h4>
        <FileUploadComponent />
        {/* <FileUploadComponent />
        <FileUploadComponent />
        <FileUploadComponent /> */}
        {/* <UploadManagerComponent /> */}
      </div>
    );
  }

  export default NICValidationComponent;

// function NICValidationComponent() {
//   const handleFileSelect = (file) => {
//     // Handle file selection logic here if needed
//   };

//   return (
//     <div>
//       <h2>File Upload and Validation</h2>
//       <h4>Upload your CSV files below</h4>
//       <FileUploadComponent onFileSelect={handleFileSelect} />
//       <FileUploadComponent onFileSelect={handleFileSelect} />
//       <FileUploadComponent onFileSelect={handleFileSelect} />
//       <FileUploadComponent onFileSelect={handleFileSelect} />
//       <UploadManagerComponent />
//     </div>
//   );
// }

// export default NICValidationComponent;

// import React from 'react';
// import FileUploadComponent from './FileUploadComponent';
// import UploadManagerComponent from './UploadManagerComponent';

// function NICValidationComponent() {
//   const [files, setFiles] = React.useState([]);

//   const handleFileUpload = (file) => {
//     setFiles((prevFiles) => [...prevFiles, file]);
//   };

//   return (
//     <div>
//       <h2>File Upload and Validation</h2>
//       <h4>Upload your csv files below </h4>
//       {Array.from({ length: 4 }, (_, index) => (
//         <FileUploadComponent key={index} onFileUpload={handleFileUpload} />
//       ))}
//       <UploadManagerComponent files={files} />
//     </div>
//   );
// }

// export default NICValidationComponent;

// import FileUploadComponent from './FileUploadComponent';

// function NICValidationComponent() {
//   return(
//     <FileUploadComponent />
//   );
// }

// export default NICValidationComponent;