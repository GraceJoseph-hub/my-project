import React from 'react'

const Info = ({ category, name, type }) => {
  const formattedType = type.replace(/_/g, "");
  return (
    <>
      <p className="text-yellow text-sm font-krona">{formattedType}</p>
      <h1 className="font-krona text-base">{name}</h1>
      <p>{category}</p>
    </>
  );
}

export default Info