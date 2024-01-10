import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../reducers/GreetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, status, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
   
    return (
      <div>
        <div>
          Error Name:
          {error.name}
        </div>
        <div>
          Error Message:
          {error.message}
        </div>
        {/* Additional error information if needed */}
      </div>
    );
  }

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;