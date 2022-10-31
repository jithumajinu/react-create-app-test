import React, { FC } from 'react';
// import * as errors from '@/images/errors';

export interface DefaultLayoutProps {
  code: 404;
  children?: React.ReactNode;
}

export const ErrorPage: FC<DefaultLayoutProps> = props => {
  const { code, children } = props;
  return (
    <div className="error-page">
      <div className="item">
        {/* <img src={errors[`Error${code}Img`]} /> */}
        <div className="text">
          <h1 className="error-page-code">{code}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

ErrorPage.displayName = 'ErrorPage';
