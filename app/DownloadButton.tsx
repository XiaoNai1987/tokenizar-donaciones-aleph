import React from 'react';

const DownloadButton: React.FC = (): JSX.Element => {
  const fileUrl = 'https://gateway.pinata.cloud/ipfs/QmdX7LJGB8WQqQPHka3aa1CvsMYfze6s1ExyvFCMGkTELF'; // Replace with your file URL
  const fileName = '/LIBRO NFT.jpg'; // Replace with the desired file name

  return (
    <a href={fileUrl} download={fileName}>
      <button>Download File</button>
    </a>
  );
};

export default DownloadButton;
