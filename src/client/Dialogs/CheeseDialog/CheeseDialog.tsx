import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './CheeseDialog.styles';

type Props = {
  item: CartItemType;
  open: boolean;
  handleClose: () => void;
}

const CheeseDialog: React.FC<Props> = ({ item, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
          <h3>{item.title}</h3>
          <h4>Price: ${item.price}</h4>
          <h4>Category: {item.category}</h4>
          <p>{item.description}</p>
        </div>
        <Button color="secondary" onClick={handleClose}>Close</Button>
      </Wrapper>
    </Dialog>
  )
};

export default CheeseDialog;
