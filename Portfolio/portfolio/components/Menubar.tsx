import React from 'react';
import { Button } from './ui/button';
import { Image } from 'react-native'; // Assuming you are using React Native
const Menubar = () => {
  const handleDownloadResume = () => {
    // Create a new anchor element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the resume file
    link.href = "https://drive.google.com/file/d/17Wg5VQvE03wxrxSVK5-HSyn2xQkE-_hQ/view?usp=sharing"; // Assuming you have the URL of the resume file
    // Set the download attribute to specify the filename
    link.download = 'Resume.pdf';
    // Simulate a click on the anchor element to trigger the download
    link.click();
  };

  return (
    <>
      <Button className='ml-4 dark:text-white dark:bg-black white:bg-white white:text-black' variant="outline" onClick={handleDownloadResume}>
        Download Resume
      </Button>
    </>
  );
};

export default Menubar;
