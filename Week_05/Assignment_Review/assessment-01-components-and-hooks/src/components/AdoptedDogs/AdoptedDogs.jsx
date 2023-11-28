import "./AdoptedDogs.css";

function AdoptedDogs({ dogs }) {
  return (
    <div>
      <h3>Dogs You Have Adopted</h3>
      <div className="photos">
        {dogs.map((dog) => (
          <img key={dog} className="adopted" src={dog} alt={dog} />
        ))}
      </div>
    </div>
  );
}

export default AdoptedDogs;
