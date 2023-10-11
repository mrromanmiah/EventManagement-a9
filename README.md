# Live Link: https://corporate-event-manageme-8caad.web.app
***

<h1 align="center">Features</h1>

### **1. Home Page**
The home page is divided into 3 main sections Header, Outlets, and Footer. Header Each section also has different features. These features are briefly discussed here.

#### **I)	Header :**
This section contains 2 elements, a Navbar, and a Banner. They have also some individual features.

- ***Navbar:*** 
    - There is a logo on the left side and 2 functional buttons named 'Login' & 'Register' on the right. 
    - Initially 2 buttons will show here but when the user logs in it will only show a 'logout' button.
    - Moreover, there are 5 route links named Home, About, Contact, Blog, and Gallery in the middle. 
    - Among these, the blog and gallery are private routes. 
    - These private routes will show when any user logs in otherwise they will be hidden. 
    - When the user is logged in, the left side of the logout button will show the user's name and picture.

- ***Header:*** 
    - The banner uses 4 images that can be changed one by one through the slider buttons.
    - A tagline is used right in the middle of each image and a short description is given below it.

#### **II)	Outlets :**
This section has 4 individual sub-sections ‘Why Choose Us’, ‘Our Services’, ‘Our Clients’, and ‘Subscribe Newsletter’.

- ***'Why Choose Us' :***
    - It has a title at the beginning and a short description below it.
    - Then there are 4 small cards that represent the company's specialty.

- ***'Our Services' :*** 
    - Here are 6 cards containing an image, a title, a short description, a Read More button, and a price.
    - The data for each card comes dynamically from a JSON file.
    - When the user clicks on the 'Read More' button, the details of that particular card will be taken to a separate page.
    - But clicking on the 'Read More' button will show the details only when the user is logged in otherwise the user will be redirected to the login page.

- ***'Our Clients' :*** 
    - It has also a title at the beginning and a short description below it.
    - Here are some brand logos with a function called marquee in it.
    - The logos run continuously from right to left.

- ***'Subscribe Newsletter' :***
    - Here It has an email input field along with a ‘Contact Now’ button. 

#### **III)	Footer :**
Here are some links that will take the user to specific routes if clicked. Along with logo and copyright information provided.

### **2.	About**
This route briefly discusses the organization's introduction, various missions, goals, services, and specialties.

### **3.	Contact** 
This page is designed for any user who wants to contact in urgent need. There are some input fields such as first name, last name, email, phone number, and a text area for writing messages. The address and emergency phone numbers of the organization are given at the bottom of the page.

### **4.	Blog (Private)** 
Here are 6 blogs containing an image, a title, and a short description. 

### **5.	Galley (Private)** 
Here are 6 pictures; Hovering over images shows a text in the middle of each image and changes the image's opacity. 

### **6.	Register**
- ***Input Fields :*** 
    - **Name:** Allows users to enter their full name.
    - **Email:** Collects user email for communication and login.
    - **Photo URL:** Option for users to link their profile picture.

- ***Password and Validation :*** 
    - **Password:** Secure input field for users to create a password.
    - **Password Validation:** Ensures users enter the password correctly by requiring a confirmation entry. At least 6 characters long, Minimum 1 uppercase letter, Minimum 1 number, Minimum 1 special character.

- ***Sweet Alerts :*** 
    - **Error Alert:** Displays a sweet alert with clear messages if there are issues during registration, such as incomplete fields or invalid data.
    - **Success Alert:** Shows a congratulatory sweet alert upon successful registration, providing a positive and reassuring message. 

### **7.	Login :**
- **Email and Password Fields:** Input fields for users to enter their email and password.
- **Eye Icon for Password Visibility:** Toggle icon to show/hide the entered password for user convenience. 
- **Login Button:** Clearly labeled button to initiate the login process.
- **Google Login:** Integration with Google popup for quick login options.
- **Error Handling:** Instant feedback on login errors with clear sweet alert messages. Highlighting of specific fields causing login issues. 
- **Logged In Greetings:** Trigger a sweet alert with a congratulatory message upon successful login. 
- **Redirects:** Automatic redirection to a secure page upon successful login.

## **Other Features :**
Adapted the layout and content dynamically for desktops, tablets, and mobile devices. Added visually appealing animations triggered by scrolling. Utilized AOS library to enhance user interactions.