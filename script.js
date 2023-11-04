function update() {
  const container = document.getElementById("container");
  fetch("https://cricbuzz-basic-api-by-subrata.onrender.com/basic", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      let content = "";
      res.forEach((item) => {
        content += "<ul>";
        content += "<li>" + item.Match + "</li>";
        content += "<li>" + item.Title + "</li>";
        content += "<li>" + item.Score + "</li>";
        content += "</ul>";
      });
      container.innerHTML = content;
    });
}

function fun() {
  const container = document.getElementById("container");
  container.innerHTML = "<h3>Loading...<h3/>";
  setInterval(() => {
    update();
  }, 3000);
}

window.onload = () => {
  fun();
};
