import axios from "axios"

// axios.get('https://api.github.com/users/mayzinng') 
//     .then(response => {
//         const user = response.data

//         axios.get(user.repos_url)
//         .then(res => console.log(res.data))
//     })

axios.get('https://api.github.com/users/mayzinng') 
    .then(response => {
        const user = response.data
        return axios.get(user.repos_url)
    })
    .then(res => console.log(res.data))