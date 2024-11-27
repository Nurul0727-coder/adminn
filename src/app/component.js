const MyComponent = ( {props} ) => {
    return (
      <div className="cards">
        <div className="front" id={`front${props.id}`}>
          <p
            style={{ position: "absolute" }}
            className="first-name"
            id={`firstName${props.id}`}>
            {props.firstName}
          </p>
          <p
            style={{ position: "absolute" }}
            className="last-name"
            id={`lastName${props.id}`}>
            {props.lastName}
          </p>
          <p
            style={{ position: "absolute" }}
            className="email"
            id={`email${props.id}`}>
            {props.email}
          </p>
          <h3
            style={{ position: "absolute" }}
            className="companyName"
            id={`companyName${props.id}`}>
            {props.companyName}
          </h3>
          <p
            style={{ position: "absolute" }}
            className="phoneNumber"
            id={`phoneNumber${props.id}`}>
            {props.phoneNumber}
          </p>
          <p
            style={{ position: "absolute" }}
            className="address"
            id={`address${props.id}`}>
            {props.address}
          </p>
        </div>
      </div>
    );
  };
  export default  MyComponent ;