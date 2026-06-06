import React from 'react';
import errorImage from '../../assets/images/401_page.png';

const Error401Page = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <img
        src={errorImage}
        alt="401 Unauthorized"
        className="xl:w-1/4 xl:h-3/4 lg:w-1/2 lg:h-3/4 w-3/4 h-3/4 pb-20 "
      />
    </div>
  );
};

export default Error401Page;
