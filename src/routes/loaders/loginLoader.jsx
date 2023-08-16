import {
  redirect
} from 'react-router-dom'

export const loader = () => {
  const token = localStorage.getItem("token");
  // console.log(token);
  if (token) return redirect("/task");
  return null;
}