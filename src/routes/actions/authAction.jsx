import {
  redirect
} from 'react-router-dom'

export async function action({ request, params }) {

  const formData = await request.formData();

  const updates = Object.fromEntries(formData);

  const resp = await peticionLogin(updates);

  console.log(resp)


  return redirect("/task");
}

const peticionLogin = async (body) => {
  const url = 'https://todo.victormireles.com/api/Auth/login';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  fetch(url, requestOptions)
    .then(response => {
      if (response.status != 200) {
        throw new Error('La peticion no fue exitosa');
      }
      return response.json();
    })
    .then(data => {
      // console.log(data);
      localStorage.setItem('token', "Bearer " + data.token);
      return data;
    })
    .catch(error => {
      console.log("Error: ", error);
    })

}