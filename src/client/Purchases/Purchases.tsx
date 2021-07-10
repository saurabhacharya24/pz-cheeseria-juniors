// Components
import Purchase from './Purchase/Purchase';
// Types
import { PurchaseItemType } from '../App';
// Styles
import { Wrapper } from './Purchases.styles';

type Props = {
  purchases: PurchaseItemType[];
};

// Extra features: Making Drawers fit on mobile screens properly (both Purchases and Cart)
const Purchases: React.FC<Props> = ({ purchases }) => {
  return (
    <Wrapper data-cy="purchases">
      <h2>Your Recent Purchases</h2>
      {purchases.length === 0 ? <p>No recent purchases.</p> : null}
      {purchases.map(purchase => (
        <Purchase key={purchase.id} items={purchase.items} totalPrice={purchase.total}/>
      ))}
    </Wrapper>
  );
};

export default Purchases;
