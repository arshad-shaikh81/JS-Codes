// ============================================
// 1️⃣ WHY WE HAVE TRUST ISSUES WITH setTimeout()
// ============================================
// setTimeout(fn, delay) ka matlab ye NAHI hota ki
// 'delay' ms ke baad fn EXACTLY chalega.
// Iska matlab hota hai: "kam se kam delay ms baad,
// callback ko Task Queue mein daal do."
// Call Stack free hone ke baad hi Event Loop
// callback ko execute karega.
// Agar Call Stack busy hai (blocking code chal raha hai),
// to callback delay hoga — chahe timer khatam ho chuka ho.

console.log("Start");

setTimeout(() => {
    console.log("Timeout callback (expected after 1000ms)");
}, 1000);

// Ye ek blocking loop hai jo 3 second lega
const blockUntil = Date.now() + 3000;
while (Date.now() < blockUntil) {
    // CPU ko busy rakh rahe hain (synchronous blocking)
}

console.log("End of synchronous code");

// OUTPUT ORDER:
// Start
// End of synchronous code
// Timeout callback (expected after 1000ms)  <-- 3 sec baad aayega, 1 sec nahi!
//
// ISLIYE TRUST ISSUE: humne 1000ms bola tha,
// par actual delay ~3000ms+ hua kyunki
// Call Stack free nahi tha.


// ============================================
// 2️⃣ CODE DEMONSTRATION — ACTUAL DELAY MEASURE KARNA
// ============================================
function demonstrateDelay() {
    const scheduledDelay = 500; // hum 500ms maang rahe hain
    const startTime = performance.now();

    setTimeout(() => {
        const actualDelay = performance.now() - startTime;
        console.log(`Requested delay: ${scheduledDelay}ms`);
        console.log(`Actual delay: ${actualDelay.toFixed(2)}ms`);
        console.log(`Difference: ${(actualDelay - scheduledDelay).toFixed(2)}ms`);
    }, scheduledDelay);

    // Isi beech thoda synchronous kaam bhi kar rahe hain
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
        sum += i;
    }
    console.log("Heavy loop finished, sum =", sum);
}

demonstrateDelay();
// Har baar chalane par "Actual delay" 500ms se thoda
// (ya zyada, agar CPU busy hai) alag aayega.
// Ye prove karta hai ki setTimeout delay ek
// "minimum guarantee" hai, exact promise nahi.


// ============================================
// 3️⃣ setTimeout(fn, 0) — DELAY 0 KA KYA MATLAB HAI?
// ============================================
// setTimeout(fn, 0) ka matlab ye NAHI hai ki fn
// IMMEDIATELY (synchronously) chalega.
// Ye sirf callback ko Macrotask Queue mein daal deta hai,
// aur wo tabhi chalega jab Call Stack + Microtask Queue
// (Promises, async/await) dono empty ho jayenge.

console.log("1: Synchronous code start");

setTimeout(() => {
    console.log("4: setTimeout with 0ms delay");
}, 0);

Promise.resolve().then(() => {
    console.log("3: Promise (microtask)");
});

console.log("2: Synchronous code end");

// OUTPUT ORDER:
// 1: Synchronous code start
// 2: Synchronous code end
// 3: Promise (microtask)
// 4: setTimeout with 0ms delay
//
// EXPLANATION:
// - Synchronous code hamesha pehle chalta hai (Call Stack)
// - Uske baad Microtask Queue (Promises) clear hoti hai
// - Sabse LAST mein Macrotask Queue (setTimeout) chalta hai
// - Isliye setTimeout(fn, 0) bhi "immediate" nahi hota,
//   balki "as soon as possible after current stack +
//   microtasks are done" hota hai.