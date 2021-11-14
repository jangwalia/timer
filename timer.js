const input = process.argv;
const result = input.slice(2);
result.forEach(element => {
  let num = Number(element);
  if(!num || num === NaN || num < 1) process.exit();
  setTimeout(()=>{
    process.stdout.write('\x07');
  },num * 1000);
});
  
