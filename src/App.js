import Home from "./pages/home/Home";
import Popup from "./pages/home/components/Popup";

const data = [
  {
      id: 'MA01',
      name: 'Chinese Yangzhou fried rice',
      price: 200,
      img: 'http://casestudy.cyberlearn.vn/img/MA01.jpeg',
      categoryId: 'MC',
      category: 'Fried food'
  },
  {
      id: 'MA02',
      name: 'Salted fish fried rice',
      price: 300,
      img: 'http://casestudy.cyberlearn.vn/img/MA02.jpeg',
      categoryId: 'MC',
      category: 'Fried food'
  },
]
function App() {
  return (
    // {/*<Home/>*/}
    <div>
      <Popup openPopup={true} setOpenPopup={true} item={data} />
    </div>

  );
}
export default App;
