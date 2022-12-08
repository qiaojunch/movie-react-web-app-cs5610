import React from 'react';
import './pageNotFound.scss';
import Navbar from '../../components/navbar/Navbar';

export default function pageNotFound() {
  return (
    <>
      <Navbar />
      <div className="pageNotFound-container">No movies or shows found</div>
    </>
  )
}
