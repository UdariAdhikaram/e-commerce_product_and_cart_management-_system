const initialState = {
    cart: [],
    products: [
      {
        id: 0,
        title: "IPhone 11",
        price: 750,
        img: "/assets/images/products/img2.webp",
        available: 100,
      },
      {
        id: 1,
        title: "IPhone 11 Pro Max",
        price: 800,
        img: "/assets/images/products/img5.jpeg",
        available: 200,
      },
      {
        id: 2,
        title: "IPhone 12 Mini",
        price: 950,
        img: "/assets/images/products/img1.webp",
        available: 150,
      },
      {
        id: 3,
        title: "IPhone 12",
        price: 1050,
        img: "/assets/images/products/img4.webp",
        available: 170,
      },
      {
        id: 4,
        title: "IPhone 12 Pro",
        price: 1150,
        img: "/assets/images/products/img7.webp",
        available: 187,
      },
      {
        id: 5,
        title: "IPhone 12 Pro Max",
        price: 1250,
        img: "/assets/images/products/img8.jpeg",
        available: 240,
      },
      {
        id: 6,
        title: "IPhone 12 Pro Max",
        price: 2000,
        img: "/assets/images/products/img6.jpeg",
        available: 304,
      },
      {
        id: 7,
        title: "IPhone 12 Pro Max",
        price: 1550,
        img: "/assets/images/products/img9.jpeg",
        available: 482,
      },
      {
        id: 8,
        title: "IPhone 12 Pro Max",
        price: 2250,
        img: "/assets/images/products/img3.webp",
        available: 450,
      },
    ],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItem = state.cart.find((item) => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
  
        case 'REMOVE_FROM_CART':
            const updatedCart = state.cart.filter((item) => item.id !== action.payload);
            return {
                ...state,
                cart: updatedCart,
        };
  
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };

        case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;