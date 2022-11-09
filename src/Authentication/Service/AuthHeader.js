export default function AuthHeader() {
    const token = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (token && token.accessToken) {
      // for Node.js Express back-end
      alert(token);
      alert(token.accessToken);
      return { 'x-access-token': 'Bearer '+token.accessToken };
    } else {
      return {};
    }
  }