import css from './profile.module.css';

function Profile(props) {

  return (
    <div className="profile">
      <div className="title">
        <h1>Профиль</h1>
      </div>
      <div className="content">
        <strong className={css.name}>{props.name}</strong>
        <p className={css.city}>{props.city}</p>
      </div>
    </div>
  )
}

export default Profile;
