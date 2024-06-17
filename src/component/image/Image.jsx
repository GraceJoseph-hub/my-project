import React from 'react'

const Image = ({name, img}) => {
  const imgUrl = `https://${img}`;
  return (
    <div className="flex items-center justify-center p-10">
      <img src={imgUrl} alt={name} />
    </div>
  );
}

export default Image