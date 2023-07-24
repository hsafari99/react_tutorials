import { mount as productMounter} from 'product/list';
import { mount as cartMounter } from 'cart/cartShow';

const prodContainer = document.querySelector('#products-container');
const cartContainer = document.querySelector('#cart-container');
productMounter(prodContainer);
cartMounter(cartContainer);