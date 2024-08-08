try {
    console.log("im try");
    let myError = new Error("this is my second error");
    throw myError;
  } catch (error) {
    console.log("I am catch ");
    console.log(error.message);
  }
  