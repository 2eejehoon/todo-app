export const fetchAddTodo = (url, data) => {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export const fetchDelete = (url, id) => {
  fetch(`${url}${id}`, {
    method: "DELETE",
  })
    .then(() => {
      window.location.href = "http://localhost:3000/";
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export const fetchPatch = (url, id, data) => {
  fetch(`${url}${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export const fetchPut = (url, id, data) => {
  fetch(`${url}${id}`, {
    method: "PUT",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error", error);
    });
};
