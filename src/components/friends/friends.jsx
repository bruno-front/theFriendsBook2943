import Friend from '../friend/friend';
import css from './friends.module.css';

function Friends() {
  let friendsList = [
    {
      id: 0,
      name: 'Иван Иваныч',
      pic: 'https://cdnn21.img.ria.ru/images/07e4/06/12/1573140389_851:0:2899:2048_1920x0_80_0_0_9756b0b9064fdbc097a3fa6267bfc00e.jpg',
      isFollow: true
    },
    {
      id: 1,
      name: 'Петр Петрович',
      pic: 'https://kipmu.ru/wp-content/uploads/rzhpnda-scaled.jpg',
      isFollow: true
    },
    {
      id: 2,
      name: 'Кирилл Кириллович',
      pic: 'https://kipmu.ru/wp-content/uploads/rzhpnda-scaled.jpg',
      isFollow: false
    },
    {
      id: 3,
      name: 'Чебуратор',
      pic: 'https://oper.ru/static/data/gallery/l1048750805.jpg',
      isFollow: false
    },
    {
      id: 4,
      name: 'Терминатор',
      pic: 'https://aif-s3.aif.ru/images/018/332/9e27cf5647971c8736731decb0167653.jpg',
      isFollow: false
    },
  ];

  let friendsElements = [];

  friendsList.forEach(function (friend) {
    friendsElements.push(
      <Friend
        friendData={friend}
      />
    )
  });

  return (
    <div className="friends">
      <div className="title">
        <h1>Мои друзья</h1>
      </div>
      <div className={css.list}>
        {friendsElements}
      </div>
    </div>
  )
}

export default Friends;
