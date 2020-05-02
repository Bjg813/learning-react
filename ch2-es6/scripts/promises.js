// Promises give us a way to make sense out of asynchronous behavior
// Simple pass or fail
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () =>
        (request.status === 200) ?
        resolves(JSON.parse(request.response).results) :
        rejects(Error(request.statusText))
    request.onerror = (err) => rejects(err);
    request.send();
})

// We use Composition to chain the "then" function to two method functions
// This function also calls the fake members function and does either a pass or fail
// If passes it will call the API and show us 5 random members
// If it fails the console will display "cannot load members from radomuser.me"
getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error('cannot load members from randomuser.me')
    )
)