
import { notificationIcon, addToCartIcon, addToFavoriteIcon, logo, pic1 } from '../assets';

export const nav_link = [
    { href: "Login", label: "Login" },
    { href: "Register", label: "Register" },
]
export const nav_icon = [
    { href: "Notification", img: notificationIcon, label: 'Notification' },
    { href: "Add-to-card", img: addToCartIcon, label: 'AddToCart' },
    { href: "Add-to-favorite", img: addToFavoriteIcon, label: 'AddToFavorite' },
]
export const menubar = [
    { label: 'Brand', items: ['Nike', 'Adidas', 'Puma', 'Reebok'] },
    { label: 'Men', items: ['T-Shirts', 'Jeans', 'Jackets', 'Shoes'] },
    { label: 'Women', items: ['Dresses', 'Tops', 'Skirts', 'Sandals'] },
    { label: 'Kid', items: ['T-Shirts', 'Shorts', 'Sneakers', 'Hats'] },
    { label: 'Deals', items: ['Buy 1 Get 1 Free', '50% Off', 'Clearance Sale', 'Limited Time Offer'] },
    { label: 'Clearance', items: ['Winter Sale', 'End of Season', 'Final Clearance', 'Overstock'] }
];

export const category_menu = [
    { name: 'Skateboarding Shoes' },
    { name: 'Casual Sneakers' },
    { name: 'Skateboarding Shoes' },
    { name: 'Skateboarding Shoes' },
    { name: 'Skateboarding Shoes' },
]
export const img_slider = [
    logo,
    pic1,
    logo,
    pic1,
    logo
]