import { connect } from 'react-redux';

function checkAuth(
  { roles, permissions },
  checkRole,
  checkPermission
) {
  if (checkRole && !roles.includes(checkRole)) {
    return false;
  }

  if (checkPermission && !permissions.includes(checkPermission)) {
    return false;
  }

  return true;
}

const Can = ({ children, user, checkRole, checkPermission }) =>
  checkAuth(user, checkRole, checkPermission) && children;

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Can);
