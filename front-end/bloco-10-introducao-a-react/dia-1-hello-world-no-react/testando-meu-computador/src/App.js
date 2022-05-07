import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// const tarefas = ['café da manhã', 'lavar roupa', 'almoço', 'estudar'];

/**
 * Task is a function that takes in a value and returns a list item with the value as the text
 * @param value - The value of the item in the array.
 * @returns A function that returns a list item with the value passed in as the text.
 */
// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//   );
// }

function App() {
  return (
    <div>
      {/* <ul>
        {tarefas.map((tarefa) => Task(tarefa))}
      </ul> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
