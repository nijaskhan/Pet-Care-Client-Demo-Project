const SessionDivider = ({ height = "3.5rem" }) => (
    <div
        className="w-full"
        style={{
            height: `clamp(2rem, 4vw, ${height})`
        }}
        aria-hidden="true"
    ></div>
);

export default SessionDivider;