import React from "react";
import { Container, Button } from "shards-react";




// var myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");
// myHeaders.append("X-Billbee-Api-Key", "2789D049-32B2-4C5E-8828-15B3EFFE2519");
// myHeaders.append("Authorization", "Basic aW5mb0BoZWFsYXguZGU6bWFyY2VsQDEyMw==");
// myHeaders.append("Cookie", ".ASPXANONYMOUS=c2se8ZDqKxyNVoe3rkogMCwCI4aVhX1XBrIl9I-Zf2j7JB77_cEgp9afiN4Xi0URrSiD11_53UkpxhbY899YFRCnouOfp9wSTzQy0Xne2k0hqLVZqkdAEDMGYCXLpQQfLej7Sg2");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://cors-anywhere.herokuapp.com/"+"https://app.billbee.io/api/v1/orders", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>500</h2>
        <h3>Something went wrong!</h3>
        <p>There was a problem on our end. Please try again later.</p>
        <Button pill>&larr; Go Back</Button>
      </div>
    </div>
  </Container>
);

export default Errors;
