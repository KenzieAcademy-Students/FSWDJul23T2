import "./AdoptableDog.css";

function AdoptableDog({ url, time }) {
  return (
    <div>
      <h3>Current Dog For Adoption</h3>
      <img className="adoptable" src={url} alt="Adoptable" />
      <section>
        <h4>Time Remaining</h4>
        <p>{time}</p>
      </section>
    </div>
  );
}

export default AdoptableDog;
