// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Purchase.styles';

type Props = {
  items: CartItemType[];
  totalPrice: number;
}

const Purchase:React.FC<Props> = ({ items, totalPrice }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <div className="item">
          <div>
            <h3>{item.title}</h3>
            <div>
              <p>Amount: {item.amount}</p>
              <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
          </div>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
    </Wrapper>
  )
};

export default Purchase;