                                 PERFUMES FULLSTACK project
 Welcome to Perfumes.com, your ultimate destination for luxurious fragrances that captivate the senses. Explore a world of scents that redefine elegance and allure. Our carefully curated collection features an array of exquisite perfumes from renowned brands and emerging artisans. Whether you seek the timeless classics or the latest olfactory sensations, we have the perfect fragrance to suit your style

 There are three roles in this website:

1. The Guest role in which guest can only see the home page. 

2. The user Role in which user can add the products in to the cart.

3. The admin role in which you go the admin page.

Technologies Used
Frontend: React, Bootstrap
Backend: Express.js, Node.js
Database: MongoDB


Hi 👋, I'm soomi

About Me
I'm an enthusiastic frontend developer with a deep passion for creating intuitive and captivating user experiences. Armed with a solid expertise in languages such as HTML, CSS, and JavaScript, I'm dedicated to fashioning contemporary and adaptive web applications.

Presently engrossed in: Frontend Web Development Projects
Expanding my skills in: MERN Stack
Eager to team up on: Full Stack Ventures


API Reference
1) Users API
2) 
A) SignUp User

  POST /api/signup
  
Parameter 	Type  	Description 

username 	string 	Required.User's username

email	string	Required. User's email

password	string	Required. User's Password

B) Login User

  POST /api/login
  
Parameter  Type 	Description

email	 string 	Required. User's email

password	string	Required. User's Password

C) Get all User

|Method | :-------- :------------------------- | | GET| Get all Users|

  GET /api/getallusers
  
2) Products API
   
A) Get all products

  GET /api/get-all-products
  
|Method |Description | | :-------- :------------------------- | | GET| Get all products|


B) Create Product

  POST /api/create-product
  
Parameter	Type	Description

name	string	Required. Product name

category	string	Required. Product Category

brand	string	Required. Product Brand

price	string	Required. Product Price

B) Update Product

  PUT /api/update-product
  
Parameter	Type	Description

id	string	Required. Product ID

name	string	Required. Product new Name

category	string	Required. Product new Category Name

brand	string	Required. Product new Brand Name

price	string	Required. Product new Price

C) Delete Product

  DELETE /api/delete-product
  
Parameter	Type	Description

id	string	Required. Product ID
