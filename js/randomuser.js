const loadUser = () => {
    
    fetch('https://randomuser.me/api/?gender=female')
        .then(res=>res.json())
    .then(data=>displayUser(data))


}

const displayUser = user => {



    const genderTag = document.getElementById('gender');
    const nameTag = document.getElementById('name');
    const locationTag = document.getElementById('location');
    const profilePicture = document.getElementById('dp');


    genderTag.innerHTML = user.results[0].gender;

    nameTag.innerHTML = user.results[0].name.first + ' ' + user.results[0].name.last;
    
    locationTag.innerHTML = user.results[0].location.street.name + ',' + user.results[0].location.city + ',' + user.results[0].location.country;

    profilePicture.src = user.results[0].picture.large;

    
   console.log(user.results[0].picture.large);

    
}

loadUser();