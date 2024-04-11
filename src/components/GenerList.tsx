import useGeners from "../hooks/useGeneres";

const GenerList = () => {
  const { genres } = useGeners();
  return (
    <ul>
      {genres.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenerList;
