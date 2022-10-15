const UserCard = ({ name, avatar }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.5rem"
      }}
      data-testid="user-card"
    >
      <img
        alt={name}
        width="40px"
        style={{ borderRadius: "50%" }}
        src={avatar}
        data-testid="user-card-img"
      />
      <div data-testid="user-card-name">
        {name}
      </div>
    </div>
  );
};

export default UserCard;