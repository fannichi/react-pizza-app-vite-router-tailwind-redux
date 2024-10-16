import { useSelector } from 'react-redux';

function User() {
  const username = useSelector((store) => store.user.username);
  if (!username) return null;
  return <div className="text-sm font-semibold md:block">{username}</div>;
}

export default User;
