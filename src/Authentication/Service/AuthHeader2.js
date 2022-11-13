export default function AuthHeader2() {
    const signature = JSON.parse(sessionStorage.getItem('currentUser'));
    if (signature && signature.token) {
        // for Node.js Express back-end
        // alert(signature);
        // alert(signature.token);
        return { Authorization: 'Bearer ' + signature.token, "Content-Type": "multipart/form-data" };
    } else {
        return {};
    }
}

