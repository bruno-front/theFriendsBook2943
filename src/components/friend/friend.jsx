import { useState } from 'react';
import css from './friend.module.css';

function Friend(props) {
  let friend = props.friendData;

  friend.setFollow();
  let [isFollow, setFollow] = useState(friend.isFollow);

  return (
    <div className={css.item} key={friend.id}>
      <img src={friend.pic} alt="" className={css.userpic} />
      <strong className={css.name}>{friend.name}</strong>
      {isFollow ?
        <button onClick={ () => setFollow(!isFollow) } className={css.btn}>Отписатсья</button> :
        <button onClick={ () => setFollow(!isFollow) } className={css.btn}>Подписаться</button>
      }
    </div>
  )
}

export default Friend;
