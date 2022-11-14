export default function AuthHeader() {
  const signature = JSON.parse(sessionStorage.getItem('currentUser'));
  if (signature && signature.token) {
    return { Authorization: 'Bearer ' + signature.token};
  } else {
    return {};
  }
}


