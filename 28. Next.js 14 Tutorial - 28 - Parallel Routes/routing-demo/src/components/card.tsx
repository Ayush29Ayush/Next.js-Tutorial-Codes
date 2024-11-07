const Card = ({children}: {children: React.ReactNode}) => {
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        border: "1px solid #f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return <div style={cardStyle}>{children}</div>;
}

export default Card;