const BASE_URL = "https://auth.nomoreparties.co";

const checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }

export const register = (password, email) => {
  console.log(password, email);
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email  })
  })
    .then(checkResponse)
    .catch((err) => console.log(err));
};
