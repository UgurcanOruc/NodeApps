const names = ["Ugur", "Damla", "Yildiz"];
const shortNames = () => names.filter((name) => name.length <= 4);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
      callback(data);
  }, 2000);
};

geocode("Philadelphia", (data) => {
    console.log(data);
});

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
}

add(1, 3, (sum) => {
    console.log(sum);
})