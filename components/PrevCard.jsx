const PrevCard = ({ children }) => {
  return (
    <>
      <div className="w-40 h-40 border bg-neutral-700 flex items-center justify-center">
        {children}
      </div>
    </>
  );
};

export default PrevCard;
