import React from 'react'




 export const createUserWithEmailAndPassword = async(user, pwd) => {
  const response = await fetch("https://amazomecommerc.onrender.com/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({user, pwd }),
  });
  return await response.json();
}
  

export const signInWithEmailAndPassword = async(user, pwd) => {
  const response = await fetch("https://amazomecommerc.onrender.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, pwd }),
  });
  return await response.json();
}
  




