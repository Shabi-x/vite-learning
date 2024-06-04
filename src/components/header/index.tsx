import Worker from './example.js?worker';
const worker = new Worker();

worker.addEventListener('message', (event) => {
    console.log(event.data);
});