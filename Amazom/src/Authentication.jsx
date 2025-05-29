import React from 'react'




 export const createUserWithEmailAndPassword = async(user, pwd) => {
  const response = await fetch("https://amazomecommerc.onrender.com/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({user, pwd }),
  });
    const status = response.status;

  
    const data = await response.json();

  return { status, data }; 
};

  

export const signInWithEmailAndPassword = async(user, pwd) => {
  const response = await fetch("https://amazomecommerc.onrender.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, pwd }),
  });
  const status = response.status;

  const data = await response.json();

  return { status, data };
}
  




