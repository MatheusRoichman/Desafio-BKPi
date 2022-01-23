const setNotificationsState = event => {
  event.preventDefault();
  
  const selectedOption = document.querySelector('input[name="ntf"]:checked')?.value || (localStorage.getItem('notifications-state') || 'Off')
  
  localStorage.setItem('notifications-state', selectedOption);
  
  window.location.replace('/');
}