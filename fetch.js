import fetch from "node-fetch"
globalThis.fetch = fetch


fetch('https://api.github.com/users/mayzinng')
.then(response => {
    response.json()
    .then(data => console.log(data))
})



fetch('https://api.github.com/users/mayzinng')
.then(response => {
    response.json()
    .then(data => {
        fetch(data.repos_url)
        .then( res => res.json().then(data => console.log(data)))
    })
})

fetch('https://api.github.com/users/mayzinng')
.then(response => response.json())
    .then(data => {
        fetch(data.repos_url)
            .then(res => res.json())
                .then(d => console.log(d))
                    .catch(error => console.log(error))
})


