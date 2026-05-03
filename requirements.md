  
Assignment Category : category-A8-Mango 
Online Book Borrowing Platform 

🚩🚩Explanation Video
Project Theme
A seamless and modern web application designed to digitize the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally. The platform prioritizes security and performance using BetterAuth, Next.js, and MongoDB.

Key Things you have must to do

GitHub Commits: Include at least 10 meaningful commits with descriptive messages.
Readme.md: Include a README file with the project name, purpose, live URL, key features, and any npm packages you have used.
Responsiveness: Ensure the website is fully responsive on mobile, tablet, and desktop.
Environment Variables: Secure configuration keys using environment variables.
Unique Design:  Create a unique design that goes with the given Concept. You can use this blog for these kinds of resources 
Host your Application:  You can choose deployment systems  like vercel, render for hosting . As you are developing a single page application 
ensure that  page doesn't throw any error on reloading from any routes.  

Main Requirements
``1. Layout Structure
Header (Navbar): * Left: Website Logo (links to Home).
Center: Navigation links for Home, All Books, and My Profile.
Right: Conditional rendering—If logged out, show Login. If logged in, show the User’s Name and a Logout button.
Footer: A custom-designed footer featuring social media links and a "Contact Us" section.
2. JSON Data Generation

 To create data , use the following structure:
{
id,
title,
author,
description,
category,
available_quantity,
image_url
}

 You can use this as a prompt for ChatGPT/Gemini:
"Generate a JSON array of 12 book objects. Each object must include: id, title, author, description, category (choose from Story, Tech, Science), available_quantity (integer), and image_url."

3. Home
Banner: A large "Find Your Next Read" heading with a "Browse Now" button leading to the All Books page.
Marquee: A scrolling line of text showing "New Arrivals: [Book Name] | Special Discount on Memberships..."
Featured Books: A section showing the top 4 books fetched from the server(json-server/local data). Each card must have a "View Details" button.
Add two more extra sections. Implement them with your own ideas.
4. Authentication

User Login
The user will  show  a Login page with a form , so that the user can Log in this application. 
Show a Title for Login.  & Form with following fields 
( Email , Password , Login button ) 

If the user Login successfully then 
navigate him to his Home page.
If not, show him an error with toast / error message anywhere in the form.

There will be some other options like 
Show the user a Link for Register  so that he can go to the register page. 
Show users a Social Login Button ( Google only ) . on Clicking it 
user authenticate with Google
 Navigate him to  his Home page.
 
User Registration
Create a register page with a form , so that the user can register himself in this application. 
Show a Title for registration and a Form with following fields
( Name , Email, Photo-url(link), Password & Register Button ) 

If the user Register successfully then 
navigate him to his login page.
If not, show him an error with toast / error message anywhere in the form.


There will be some other options like 
Show the user a Link for Login so that he can go to the Login page. 
Show users a Social Login Button ( Google only ) . on Clicking it 
user authenticate with Google
Navigate the user to the Home page.

 💡Don’t implement email verification or forget password method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.

5. All Books Page 
Search Bar: A large input at the top to search for books by title.
Book Cards: Display:
Book Image & Title.
"Details" Button: Navigates to the specific Book Details page.



 6. Single Book Details Page(PRIVATE ROUTE)
Access: Only logged-in users can view this
Visuals: Large Book Cover on the left, text/details on the right.
Info: Title, Author, Description, and Available Quantity (e.g., "5 copies left").
The Action Button:
"Borrow This Book" Button:
If Logged Out: Redirects to the Login page.
Show a confirmation toast.

7. My Profile(PRIVATE ROUTE)
Access: Only logged-in users can view this
Show all user information
Challenges 
1. Update Information Feature
In My Profile route there will be an update button. On clicking it,  Take user to another route 
Show user a form with 2 input field ( image and Name ) 
An Update Information button.

Follow this documentation: https://better-auth.com/docs/concepts/users-accounts#update-user 
2. Category Sidebar: A functional left sidebar on the "All Books" page to filter books by category(e.g., Story, Tech, Science).
3.  Implement any one npm package from the following
Animate.css, 
React-Spring
swiperjs


Tech Stack: 
Next JS
Tailwind CSS
DaisyUI/HeroUI
BetterAuth

What to Submit 
Your Github Repo Link : 
Your Live Link : 




