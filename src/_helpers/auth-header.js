export function authHeader() {
    // return authorization header with jwt token
    let user = getUser()

    if (user && user.tokenId) {
        return { 'Authorization': 'Bearer ' + user.tokenId,
        'Content-Type': 'application/json' };
    } else {
        return {};
    }
}

export function getTokenId(){
    let user = getUser()
    if (user && user.tokenId) {
     return  { 'tokenId' : user.tokenId } 
    } else {
        return {}
    }
  
}

function getUser(){
    return JSON.parse(localStorage.getItem('user'));
}