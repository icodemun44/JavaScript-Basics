console.log("start")
setTimeout(() => {
    console.log("i will execute after 0s")

}, 0);

console.log("end");

/*
setTimeout is a asynchronous function
it means it will execute at last


setTimeout is asynchronous function
    anything which push task to the background is called asynchronous function

synchronous code Vs asynchronous code
synchronous code (code written inside  vs-code)
asynchronous code (code in background)

in this callstack runs the program line by line as js is synchronous 
after running every line code it will throw the code away but in case of set timeout it will put it in memory queue
with its respective timer and when the call stack is empty the memory queue will send the code in it to call stack to run 
as per the timer
*/
