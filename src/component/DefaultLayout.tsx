import React, { FC } from 'react'

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
        header <h1>Hello, React Router!</h1>
        <div className="body flex-grow-1 px-3">
          {children}
        </div>
       Footer
      </div>
    </>
  )
}


DefaultLayout.displayName = 'DefaultLayout'