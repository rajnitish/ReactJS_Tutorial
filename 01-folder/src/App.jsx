
const App = () => {
  return (
    <div>
      <h1>Hello, World!!</h1>
    </div>
  );
};


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => { 
  
  return number % 2 === 0; 

});

export { evenNumbers }; 

export default App; 