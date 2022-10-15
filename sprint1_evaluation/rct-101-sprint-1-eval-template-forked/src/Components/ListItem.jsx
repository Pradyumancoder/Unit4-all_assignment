function ListItem({ data }) {
  const style = { display: "flex", gap: 8, justifyContent: "center" };
  return (
    <div data-testid="list-container" style={style}>
      {data.map((item) => (
        <>
          <p data-testid="list-item">
            <b data-testid="list-item-title">{item.title}</b>
            <span data-testid="list-item-status">{item.status}</span>
          </p>
          <button data-testid="delete-btn">DELETE</button>
        </>
      ))}
    </div>
  );
}

export default ListItem;
