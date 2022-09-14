import React, { FC } from 'react'
import { Link } from "react-router-dom";
import Header from './pages/Header';
export interface DefaultLayoutProps {
    children: React.ReactNode;
    currentPage?: number;
    totalPages?: number;
  }


export const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
    const {  children } = props;
    
  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100">
      <Header/>
      --------------------------------------------
        <div className="body flex-grow-1 px-3">
          {children}
        </div>
      </div>
    </>
  )
}


DefaultLayout.displayName = 'DefaultLayout'