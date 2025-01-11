
import { notificationIcon, addToCartIcon, addToFavoriteIcon, logo, pic1, pic2, pic3, pic4, pic5, pic6, pic7, facebook, instagram, telegram, twitter, call, mail } from '../assets';

export const nav_link = [
    { href: "Login", label: "Login" },
    { href: "Register", label: "Register" },
]
export const nav_icon = [
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
export const detailpic = [
    { pic: pic1 },
    { pic: pic2 },
    { pic: pic3 },
    { pic: pic4 },
    { pic: pic5 },
]
export const productCart = [
    {
        id: 1,
        name: "Product 1",
        price: "100",
        color: "Red",
        size: "M",
        pic: pic1,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 2,
        name: "Product 2",
        price: "120",
        color: "Blue",
        size: "L",
        pic: pic2,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 3,
        name: "Product 3",
        price: "80",
        color: "Green",
        size: "S",
        pic: pic3,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 4,
        name: "Product 4",
        price: "150",
        color: "Black",
        size: "XL",
        pic: pic4,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 5,
        name: "Product 5",
        price: "90",
        color: "White",
        size: "M",
        pic: pic5,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 6,
        name: "Product 6",
        price: "110",
        color: "Yellow",
        size: "S",
        pic: pic1,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 7,
        name: "Product 7",
        price: "130",
        color: "Purple",
        size: "M",
        pic: pic2,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 8,
        name: "Product 8",
        price: "140",
        color: "Orange",
        size: "L",
        pic: pic3,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 9,
        name: "Product 9",
        price: "95",
        color: "Pink",
        size: "S",
        pic: pic4,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 10,
        name: "Product 10",
        price: "160",
        color: "Gray",
        size: "XL",
        pic: pic5,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 11,
        name: "Product 11",
        price: "70",
        color: "Cyan",
        size: "M",
        pic: pic1,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 12,
        name: "Product 12",
        price: "200",
        color: "Magenta",
        size: "S",
        pic: pic2,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 13,
        name: "Product 13",
        price: "135",
        color: "Teal",
        size: "L",
        pic: pic3,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 14,
        name: "Product 14",
        price: "105",
        color: "Brown",
        size: "M",
        pic: pic4,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 15,
        name: "Product 15",
        price: "75",
        color: "Beige",
        size: "S",
        pic: pic5,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 16,
        name: "Product 16",
        price: "125",
        color: "Lime",
        size: "XL",
        pic: pic1,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 17,
        name: "Product 17",
        price: "155",
        color: "Violet",
        size: "M",
        pic: pic2,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 18,
        name: "Product 18",
        price: "85",
        color: "Indigo",
        size: "L",
        pic: pic3,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 19,
        name: "Product 19",
        price: "100",
        color: "Gold",
        size: "S",
        pic: pic4,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    },
    {
        id: 20,
        name: "Product 20",
        price: "125",
        color: "Silver",
        size: "M",
        pic: pic5,
        picDetail: [pic1, pic2, pic3, pic4, pic5]
    }
];


export const detailText = [
    {
        name: "Product 1",
        price: "$100",
        color: "Red",
        size: "M"
    }
];
export const footerImage = [
    facebook,
    instagram,
    telegram,
    twitter
]
export const footerInfo = [
    { header: "Information", body: [{ detail: ["About us", "Event"] }] },
    { header: "Helpful Links", body: [{ detail: ["Sevice", "Support", "Term & Condition", "Privacy Policy"] }] },
    { header: "Our Sevice", body: [{ detail: ["Brands List", "Order"] }] },
    {
        header: "Contect", body: [
            {
                detail: [],
                img: [{ img: call, detail: "1231231" },
                { img: mail, detail: "ShoesStore@gamail.com" },
                ]
            }]
    },
]
