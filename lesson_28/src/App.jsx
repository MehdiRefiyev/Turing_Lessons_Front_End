import './App.css'
import Card from './components/Card/Card'

function App() {

  const mockData = [
      {
          price: "$8,500",
          img: "src/assets/images/bmw_e34_white.jpg", // Replace with an actual image URL
          title: "1990 BMW E34 5 Series",
          desc: "Classic 1990 BMW E34 5 Series with low mileage, well-maintained, and original parts."
      },
      {
          price: "$6,000",
          img: "src/assets/images/bmw_e34_red.jpg", // Replace with an actual image URL
          title: "1992 BMW E34 520i",
          desc: "1992 BMW E34 520i in excellent condition, featuring a smooth inline-six engine."
      },
      {
          price: "$10,000",
          img: "src/assets/images/bmw-m5-e34-black.jpg", // Replace with an actual image URL
          title: "1994 BMW E34 M5",
          desc: "Rare 1994 BMW E34 M5, performance tuned with sport suspension and upgraded exhaust."
      },
  ];

  return (
    <div className='mainDiv'>
      {
        mockData.map((i , index) => {
             return <Card 
                      key={index}
                      imgSrc = {i.img}
                      title = {i.title}
                      desc = {i.desc}
                      price = {i.price}
                    />
          })
      }
      
    </div>
  )
}

export default App
