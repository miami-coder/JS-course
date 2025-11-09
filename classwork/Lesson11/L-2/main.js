let url = new URL('https://jsonplaceholder.typicode.com/posts');
url.searchParams.set('userId', 8);

fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));