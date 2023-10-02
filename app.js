// fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email")
const statusRef = document.querySelector(".status")
const videoRef = document.querySelector(".video")

// After fetching the data, there are two ways to unlock it
// 1. Then
/**fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {

    // response.json() is a second promise
    // we need to use .then() again to make it readable/accessible with JS
    response.json().then(data => {  // b/c we used 'response' already
        // let's use 'data'
        emailRef.innerHTML = data.email
    })
})
*/

//now let's clean that up
// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         emailRef.innerHTML = data.email
//     })

// 2. Async/Await
// async function main() { // when you await a promise, it returns what's inside
//    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//    const data = await response.json()
//    // console.log(data)
//    emailRef.innerHTML = data.email
// }

// main();




// Let's create a new promise
function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
       resolve("VIP") 
    })
}

// 1. Then   dont have to use .json() since we're working in frontend
// getSubscriptionStatus().then(response => console.log(response))

// 2. Async/Await
// async function usePromise() {
//     const status = (await getSubscriptionStatus())
//     statusRef.innerHTML = status
// }

// usePromise()


/**
 * 1. Create a function called 'getVideo'
 * 2. Accept a parameter called 'subscriptionStatus'
 * 3. Return a new Promise inside of the function that:
 *      - if "VIP" resolve("show video")
 *      - if "FREE" resolve("show trailer")
 *      - otherwise reject("no video")
 * 4. console.log the result of getVideo(status) in main()
 */

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        } else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        } else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status
    try {
        console.log(await getVideo(status))
    } catch (e) {
        console.log(e)
        videoRef.innerHTML = e
    }
}

main()