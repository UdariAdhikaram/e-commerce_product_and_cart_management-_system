# E-commerce Product and Cart Management System (Frontend Development)
Develop the frontend for an e-commerce system to manage products, add them to the cart,  update quantities, remove items, and place orders using Raact Js and Redux.


**Project setup**
To Create React Project -> npm create-react-app ecommerce -> cd ecommerce

Install Required Dependencies:

*Install Redux and React-Redux* -> npm install redux react-redux
redux - Manages the global state of application.
react-redux - Connects Redux to React components.

*Install React Router* -> npm install react-router-dom
react-router-dom → Enables navigation between pages in a React app

*Install UI library like Material-UI* -> npm install @mui/material @emotion/react @emotion/styled
Use Material-UI components for a clean and modern design.

*API Integration* -> npm install axios
Use Axios to interact with the backend.

*Run the Project* -> npm start


**Screenshots of the working application**
Step 01: In Home Page Click the Shop Now Button
![Alt text](https://raw.githubusercontent.com/UdariAdhikaram/e-commerce_product_and_cart_management_system/main/ecommerce/public/assets//images/screenshots/Capture1.PNG)

Step 02: Show a list of products and allow users to add them to the cart.
each product, display: Product name, Price, Available quantity, An "Add to Cart" button to add the product to the cart.
![Alt text](https://raw.githubusercontent.com/UdariAdhikaram/e-commerce_product_and_cart_management_system/main/ecommerce/public/assets//images/screenshots/Capture2.PNG)

Step 03: To add the products to the cart click Add to Cart Button and when click the Add to cart button The NavBar cart icon numbers are change(Increase number)
Click the button more than one time in same product the cart number did not increase. to order the more than one products need to go the Cart page.
![Alt text](https://raw.githubusercontent.com/UdariAdhikaram/e-commerce_product_and_cart_management_system/main/ecommerce/public/assets//images/screenshots/Capture3.PNG)

Step 04: Click NavBar Cart icon can see Product name, Price, Quantity (with input field to allow users to change the quantity), Option to remove items from the cart, Display the total price for each item and the total amount of the cart.
to place the order click Place Your Order Button.
![Alt text](https://raw.githubusercontent.com/UdariAdhikaram/e-commerce_product_and_cart_management_system/main/ecommerce/public/assets//images/screenshots/Capture4.PNG)

Step 05: After placing the order, clear the cart and show an order confirmation message.
Click the Continue Shopping button it will move to the Home page
![Alt text](https://raw.githubusercontent.com/UdariAdhikaram/e-commerce_product_and_cart_management_system/main/ecommerce/public/assets//images/screenshots/Capture5.PNG)

Step 06: After Clicking Continue Shopping Button
![Alt text](https://raw.githubusercontent.com/UdariAdhikaram/e-commerce_product_and_cart_management_system/main/ecommerce/public/assets//images/screenshots/Capture6.PNG)

