async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
  

// Example usage
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);


async function awaitCall() {
    const simulateApiCall = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: 'Fetched Data' });
        }, 1000);
      });
    };
  
    const response = await simulateApiCall();
    console.log(response.data);
}
// Example usage
awaitCall();

async function awaitCall() {
    const simulateApiCall = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve({ data: 'Fetched Data' });
          } else {
            reject(new Error('Failed to fetch data'));
          }
        }, 1000);
      });
    };
  
    try {
      const response = await simulateApiCall();
      console.log(response.data);
    } catch (error) {
      console.log('Error: Unable to fetch data. Please try again later.');
    }
  }
  
  // Example usage
  awaitCall();
  
  