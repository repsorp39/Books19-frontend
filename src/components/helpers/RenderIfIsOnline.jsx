import React from 'react';
import { useSelector } from 'react-redux';
import { selectisAuthenticated } from '../../store/features/userAuth/authSlice';

function RenderIfIsOnline({ Component,Alternative}) {
  const isAuthenticated = useSelector(selectisAuthenticated);
  return (
   isAuthenticated ? <Component /> : <Alternative />
  );
}

export default RenderIfIsOnline;