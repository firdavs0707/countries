let sel = document.querySelector('#theme');
let selects = document.querySelectorAll('.select'); 
let body = document.querySelector('body')
let inp = document.querySelector('.input');
let type = document.querySelector('#order')
let btn = document.querySelector('#btn');
let logo = document.querySelector('.logo');
let out = document.querySelector('.list-countries');

async function fetchMoviesBadStatus() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const movies = await response.json();
  for (const iterator of movies) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    let name = document.createElement('h2');
    li.className = 'item'
    name.textContent = iterator.name.common;
    name.className = 'text';
    img.src = iterator.flags.svg;
    img.style.height = '200px';
    img.style.width = '300px';
    img.className = 'fl-img';
    li.append(img, name)
    out.appendChild(li);
  }
  return console.log(movies);
}
fetchMoviesBadStatus().catch(error => {
  error.message;
});

btn.addEventListener( 'click', () => {
  if(inp.value == '') {
    alert('Davlat nomini kiritmadingiz');
  }
  else if(type.value == 'name') {
    out.innerHTML = '';
    async function fetchMoviesBadStatus() {
      const response = await fetch(`https://restcountries.com/v3.1/name/${inp.value}`);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const movies = await response.json();
      for (const iterator of movies) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        li.className = 'item'
        name.textContent = iterator.name.common;
        name.className = 'text';
        img.src = iterator.flags.svg;
        img.style.height = '200px';
        img.style.width = '300px';
        img.className = 'fl-img';
        li.append(img, name)
        out.appendChild(li);
      }
      return console.log(movies);
    }
    fetchMoviesBadStatus().catch(error => {
      let p = document.createElement('p');
      p.classList.add('err');
      p.textContent = 'Sizning internetingizda muommo bor! yoki unday davlat yoq!';
      out.appendChild(p);
    });
  }
  else if(type.value == 'capital') {
    out.innerHTML = '';
    async function fetchMoviesBadStatus() {
      const response = await fetch(`https://restcountries.com/v3.1/capital/${inp.value}`);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const movies = await response.json();
      for (const iterator of movies) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        li.className = 'item'
        name.textContent = iterator.name.common;
        name.className = 'text';
        img.src = iterator.flags.svg;
        img.style.height = '200px';
        img.style.width = '300px';
        img.className = 'fl-img';
        li.append(img, name)
        out.appendChild(li);
      }
      return console.log(movies);
    }
    fetchMoviesBadStatus().catch(error => {
      error.message;
    });
  }
  else if(type.value == 'currency') {
    out.innerHTML = '';
    async function fetchMoviesBadStatus() {
      const response = await fetch(`https://restcountries.com/v3.1/currency/${inp.value}`);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const movies = await response.json();
      for (const iterator of movies) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        li.className = 'item'
        name.textContent = iterator.name.common;
        name.className = 'text';
        img.src = iterator.flags.svg;
        img.style.height = '200px';
        img.style.width = '300px';
        img.className = 'fl-img';
        li.append(img, name)
        out.appendChild(li);
      }
      return console.log(movies);
    }
    fetchMoviesBadStatus().catch(error => {
      error.message;
    });
  }
  else if(type.value == 'language') {
    out.innerHTML = '';
    async function fetchMoviesBadStatus() {
      const response = await fetch(`https://restcountries.com/v3.1/translation/${inp.value}`);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const movies = await response.json();
      for (const iterator of movies) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        li.className = 'item'
        name.textContent = iterator.name.common;
        name.className = 'text';
        img.src = iterator.flags.svg;
        img.style.height = '200px';
        img.style.width = '300px';
        img.className = 'fl-img';
        li.append(img, name)
        out.appendChild(li);
      }
      return console.log(movies);
    }
    fetchMoviesBadStatus().catch(error => {
      error.message;
    });
  }
  else if(type.value == 'region') {
    out.innerHTML = '';
    async function fetchMoviesBadStatus() {
      const response = await fetch(`https://restcountries.com/v3.1/region/${inp.value}`);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const movies = await response.json();
      for (const iterator of movies) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        li.className = 'item'
        name.textContent = iterator.name.common;
        name.className = 'text';
        img.src = iterator.flags.svg;
        img.style.height = '200px';
        img.style.width = '300px';
        img.className = 'fl-img';
        li.append(img, name)
        out.appendChild(li);
      }
      return console.log(movies);
    }
    fetchMoviesBadStatus().catch(error => {
      error.message;
    });
  }
});

logo.addEventListener('click', () => {
  out.innerHTML = '';
  inp.value = ''
  async function fetchMoviesBadStatus() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const movies = await response.json();
    for (const iterator of movies) {
      let li = document.createElement('li');
      let img = document.createElement('img');
      let name = document.createElement('h2');
      li.className = 'item'
      name.textContent = iterator.name.common;
      name.className = 'text';
      img.src = iterator.flags.svg;
      img.style.height = '200px';
      img.style.width = '300px';
      img.className = 'fl-img';
      li.append(img, name)
      out.appendChild(li);
    }
    return console.log(movies);
  }
  fetchMoviesBadStatus().catch(error => {
    error.message;
  });
});

setTimeout(() => {
  let texts = document.querySelectorAll('.text'); 

sel.addEventListener('click', () => {
  if (sel.value == 'dark') {
    for (const iterator of selects) {
      iterator.style.borderBottomColor = 'white';
      iterator.style.color = 'white';
    }
    btn.style.color = 'white';
    btn.style.borderColor = 'white';
    for (const iterator of texts) {
      iterator.style.color = 'white';
    }
    body.style.backgroundColor = 'black';
    inp.style.borderBottomColor = 'white';
    inp.style.color = 'white';
  }
  else if (sel.value == 'default') {
    for (const iterator of selects) {
      iterator.style.borderBottomColor = 'black';
      iterator.style.color = 'black';
    }
    btn.style.color = 'black';
    btn.style.borderColor = 'black';
    for (const iterator of texts) {
      iterator.style.color = 'black';
    }
    body.style.backgroundColor = 'white';
    inp.style.borderBottomColor = 'black';
    inp.style.color = 'black';
  }
  else if (sel.value == 'blue') {
    for (const iterator of selects) {
      iterator.style.borderBottomColor = 'white';
      iterator.style.color = 'white';
    }
    btn.style.color = 'white';
    btn.style.borderColor = 'white';
    for (const iterator of texts) {
      iterator.style.color = 'white';
    }
    body.style.backgroundColor = '#1B1B42';
    inp.style.borderBottomColor = 'white';
    inp.style.color = 'white';
  }
});
}, 0050 );