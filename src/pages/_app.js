// src/pages/_app.js
import React from 'react';
import App from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    );
  }
}

export default MyApp;
