const MyComponent = ({ user }) => {
  return (
    <div className="cards">
      <div className="front" id={`front${user.id}`}>
        <p className="first-name" id={`firstName${user.id}`}>
          {user.firstName}
        </p>
        <p className="last-name" id={`lastName${user.id}`}>
          {user.lastName}
        </p>
        <p className="email" id={`email${user.id}`}>
          {user.email}
        </p>
        <h3 className="companyName" id={`companyName${user.id}`}>
          {user.companyName}
        </h3>
        <p className="phoneNumber" id={`phoneNumber${user.id}`}>
          {user.phoneNumber}
        </p>
        <p className="address" id={`address${user.id}`}>
          {user.address}
        </p>
      </div>
    </div>
  );
};
export default MyComponent;
