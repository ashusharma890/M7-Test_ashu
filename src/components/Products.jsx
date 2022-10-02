import  React,{useState,useEffect} from 'react';
import Group1 from '../components/assets/Group1.png';


const Products = (props) => {
    const [data, setData] = useState({});
    const [itemCount, setItemCount] = React.useState(1);
    const getData=()=>{
        fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
        )
          .then(function(response){
            // console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            // console.log(myJson);
            setData(myJson)
          });
      }
    useEffect(() => {
        getData();
        }, []);

        console.log(data);
  return (
    <div classNameName='mt-3'>
        <h3>Products</h3>
        <div className='card-section'>
        {Object.values(data).map((d, index) => {
        return (
            <div className="card cards"  key={index}>
            <img src={d?.productImage} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{d?.productName}</h5>
                <div className="cardinfo">
                    <div>
                        <img src={Group1} alt="" srcset="" />
                    </div>
                    <div className="price">
                        <p>{d?.oldPrice}</p>
                        <p>{d?.newPrice}</p>    
                    </div>
                </div>
            </div>
            <div class="card-footer cart">
                <button className='btn btn-primary btn-lg' onClick={() => {
                    props.setNum(props.num+1)
                } }>ADD TO CART</button>
            </div>
          </div>
        );
      })}
        </div>
    </div>
  )
}

export default Products