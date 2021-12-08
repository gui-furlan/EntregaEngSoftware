import './App.css';
import Conteiner from './components/conteiner'


function App()
{

  // const monsters = [
  //   {name: 'Frankstein', id:'1'},
  //   {name: 'Vampire', id:'2'},
  //   {name: 'Zombie', id:'3'},
  //   {name: 'Bozoloide', id:'4'},
  // ]

  // const [ users, setUsers ] = useState();

  // const number = 666;

  // useEffect(() => {
  //   // Atualiza o titulo do documento usando a API do browser
  //   fetch( 'https://jsonplaceholder.typicode.com/users' )
  //     .then( response => response.json() ) // formatar para json
  //     .then (users=> console.log(users) ) // saida do array - > 
  // } );
  
  // useEffect( () =>
  // {
  //   // Atualiza o titulo do documento usando a API do browser
  //   fetch( 'https://jsonplaceholder.typicode.com/users' )
  //     .then( response => response.json() ) // formatar para json -> response.json()
  //     .then( usr => setUsers( usr ) ) // saida do array - > 
  // },[]);
  


  return ( // é o que será renderizado no  browser
    
    <div >
      <Conteiner />
    </div>
  );
}
export default App;



// component 
