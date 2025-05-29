import React from 'react'




async function createUserWithEmailAndPassword(user, pwd) {
  const response = await fetch("https://amazomecommerc.onrender.com/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({user, pwd }),
  });
  return await response.json();
}
  

async function signInWithEmailAndPassword(user, pwd) {
  const response = await fetch("https://amazomecommerc.onrender.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, pwd }),
  });
  return await response.json();
}
  




export default {signInWithEmailAndPassword,createUserWithEmailAndPassword}