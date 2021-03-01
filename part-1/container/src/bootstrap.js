import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

mountProducts(document.querySelector("#remote-products"));
mountCart(document.querySelector("#remote-cart"));
