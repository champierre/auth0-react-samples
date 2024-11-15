import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserRoles = () => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [roles, setRoles] = React.useState([]);

  React.useEffect(() => {
    const fetchRoles = async () => {
      if (isAuthenticated) {
        const claims = await getIdTokenClaims();
        const namespace = '/roles';
        setRoles(claims[namespace] || []);
      }
    };
    fetchRoles();
  }, [isAuthenticated, getIdTokenClaims]);

  return (
    isAuthenticated && (
      <div>
        <h2>User Roles:</h2>
        <ul>
          {roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default UserRoles;
