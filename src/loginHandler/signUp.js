export const signUp = async (username, email, password, favourites, setUser) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        favourites: favourites
      }),
    });
    const data = await res.json();
    if (data.err) {
      throw new Error(data.err);
    }
    setUser(data.user);
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error.message);
  }
};

export const tokenFetch = async (setUser) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await res.json();
    setUser(data.user);
  } catch (error) {
    console.error(error.message);
  }
};

export const remove = async (setUser) =>{
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    })
    const data = await res.json();
    setUser(data.user)
  } catch (error) {
    console.error(error.message)
  }
}

export const replace = async (username, password, email, setUser) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
    const data = await res.json()
    setUser(data.user)
  } catch (error) {
    console.error(error.message)
  }
}

export const favourites = async (username, setFavourites) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}favourites`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        favourites: setFavourites,
      }),
    })
    const data = await res.json()
    setFavourites(data.favourites)
  } catch (error) {
    console.error(error.message)
  }
}
