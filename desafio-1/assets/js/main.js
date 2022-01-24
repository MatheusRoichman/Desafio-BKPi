window.addEventListener('load', async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  
  sessionStorage.setItem('data', JSON.stringify(data))
  document.querySelector('#notifications-state').append(document.createTextNode(localStorage.getItem('notifications-state') || 'Off'));

  const results = data['results'][0];

  const user = {
    name: `${results['name']['first']} ${results['name']['last']}`,
    picture: results['picture']['large'],
    location: `${results['location']['city']}, ${results['location']['country']}`
  }
  
  const userPicture = document.createElement('img');
  userPicture.setAttribute('src', user.picture);
  userPicture.setAttribute('alt', `Foto de perfil de ${user.name}`);
  userPicture.classList.add('profile__picture');
  
  const userName = document.createElement('h1');
  userName.appendChild(document.createTextNode(user.name));
  
  const userLocation = document.createElement('div');
  
  const locationSVG = (function() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '1.5rem');
    svg.setAttribute('height', '1.5rem');
    svg.classList.add('icon--location');
    
    const svgPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath1.setAttribute('d', 'M0 0h24v24H0V0z');
    svgPath1.setAttribute('fill', 'none');
    
    const svgPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath2.setAttribute('d', 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z');
    
    const svgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    svgCircle.setAttribute('cx', '12');
    svgCircle.setAttribute('cy', '9');
    svgCircle.setAttribute('r', '2.5');
    
    svg.append(svgPath1, svgPath2, svgCircle);
    
    return svg;
  })();

  const userLocationText = document.createElement('h5');
  
  userLocationText.classList.add('secondary-text');
  userLocationText.appendChild(document.createTextNode(user.location));
  
  userLocation.append(locationSVG, userLocationText);
  userLocation.classList.add('profile__location');
  
  const offices = [
    'Graphic Designer',
    'UX Designer',
    'UI Designer',
    'Web Designer',
    'UI/UX Designer',
    'Game Designer'
  ];
    
  const userOffice = document.createElement('h3');
  userOffice.appendChild(document.createTextNode((function(min, max, array) {
    return array[Math.floor(
      Math.random() * (max - min) + min
    )];
  })(0, offices.length, offices)));
  
  const userInfo = document.createElement('div');
  
  userInfo.append(userPicture, userName, userLocation, userOffice);
  
  const header = document.querySelector('#profile')
  
  header.insertBefore(userInfo, document.querySelector('#upgrade'));
});

document.querySelector('.icon--back').addEventListener('click', () => redirect('/'));

const redirect = url => window.location.assign(url);

const toggleColorScheme = () => {
  const isChecked = document.querySelector('#colorSchemeToggler').checked;
  const root = document.querySelector(':root').style;
  
  if (isChecked) {
    root.setProperty('--body-bg', '#161616');
    root.setProperty('--settings-bg', '#000');
    root.setProperty('--text-color', '#fff');
  } else {
    root.setProperty('--body-bg', '#f4f4f4');
    root.setProperty('--settings-bg', '#fff');
    root.setProperty('--text-color', '#000');
  }
};