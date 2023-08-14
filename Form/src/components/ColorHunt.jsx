import React from 'react';
// import './App.css'

export default function ColorHunt() {
  const colorArray = [
    '#504099',
    '#614BC3',
    '#FE7BE5',
    '#96B6C5',
    '#ADC4CE',
    '#F94C10',
    '#102C57',
  ];
  const colorBar = colorArray.map((colorArray) => {
    return (
      <div
        key={colorArray}
        style={{ backgroundColor: `${colorArray}` }}
        className='color-bars'
      >
        {colorArray}
      </div>
    );
  });
  return (
    <>
      <div className='color-bar'>{colorBar}</div>
    </>
  );
}
