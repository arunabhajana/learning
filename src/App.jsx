import './App.css'
import Greetings from './components/Greetings.jsx'
import Users from './components/Users.jsx'
import ProductList from './components/ProductList.jsx'
import Handle from './components/Functions.jsx'
import Card from './components/Card.jsx'
import Password from './components/Password.jsx'
import Cart from './components/Cart.jsx'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus.jsx'
import Events from './components/Events.jsx'
import Copy from './components/Copy.jsx'
import State from './components/State.jsx'
import Friends from './components/Friends.jsx'
import Movie from './components/Movie.jsx'
import MovieDB from './components/MovieDB.jsx'
import Sharing from './components/Sharing.jsx'
import Todo from './components/Todo.jsx'
import ClipboardCopy from './components/ClipboardCopy.jsx'
import Effect from './components/Effect.jsx'
import Data from './components/Data.jsx'
import BasicEffects from './components/BasicEffects.jsx'
import Context from './components/Context.jsx'
import ContextHook from './components/ContextHook.jsx'
import Reducer from './components/Reducer.jsx'
import Ref from './components/Ref.jsx'

const App = () => {

  const Header = () => <div><h1>Header</h1></div>;
  const Footer = () => <div><h1>Footer</h1></div>;
  return (
    <>
      <Header />
      <Greetings name="Arun" />
      <Users name="Arun" />
      <ProductList name="Iphone" price={1000} rating={5} />
      <Handle />
      <Card>
        <h1>This Is A Card</h1>
        <p>Content For Card 1</p>
      </Card>
      <Password isValid={true} />
      <Cart />
      <Weather temp={20} />
      <UserStatus isLoggedin={true} isAdmin={true} />
      <Events />
      <Copy />
      <State />
      <Friends />
      <Movie />
      <MovieDB />
      <Sharing />
      <Todo />
      <ClipboardCopy />
      <Effect />
      <Data />
      <BasicEffects />
      <Context/>
      <ContextHook />
      <Reducer />
      <Ref />
      <Footer />
    </>
  )
}
export default App;
