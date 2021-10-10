import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, users }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [users]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

