import './IdCard.css';

function IdCard(props) {
  return (
    <div className="idCard">
      <div className='containerImg'>
      <img src={props.picture} />
      </div>
      <section className='infos'>
        <p>
          <strong>First Name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last name</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height / 100}
        </p>
        <p>
          <strong>Birth:</strong> {props.birth.toDateString()}
        </p>
      </section>
    </div>
  );
}

export default IdCard;
