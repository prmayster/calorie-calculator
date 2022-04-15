const now = new Date('2022-04-13');

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours(52));
// console.log(now);

let start = new Date();

for(let i=0; i < 100000; i++) {
  let some = i + 3;
}

let end = new Date();

console.log(`JJLLNNJ ${end - start} dcwwwwwwwwwwc`);


const box = document.querySelector('.btn_dark'),
  btn = document.querySelector('.btn_dark');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// console.log(width, height);

btn.addEventListener('click', () => {
    // box.getElementsByClassName.fontSize = box.fontSize +'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

console.log(style);


console.log(document.documentElement.scrollTop);