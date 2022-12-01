export async function logoutUser() {
  try {
    const token = JSON.parse(localStorage.getItem('token') || '');

    const response = await fetch(
      // 'https://cors-anywhere.herokuapp.com/https://api-teman-ngorte-wsph3rjooq-et.a.run.app/logout',
      'https://api-teman-ngorte-wsph3rjooq-et.a.run.app/logout',
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Bearer ' + token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}
