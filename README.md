# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) General Assembly Software Engineering Immersive: Project 4

![homepage](assets/Screenshot%202022-02-17%20at%2015.27.13.png?raw=true)

## Overview

My final project for the Software Engineering Immersive course was a complex full-stack application built with Django REST Framework and React.
The brief was to create a full-stack with a Django backend and a React frontend. Project 4 could be done individually or as a team - I chose to work alone on the final project to test my knowledge of the course and to solidify the ideas in my head.

I chose to build a book collection app. I read a lot of books and sometimes choosing the next book to read is difficult so I wanted to build a random book choice button that would decide for me what book I would read next out of my collection. This spanned an idea of having an online collection of books that you wanted to buy and read.

You can see the app [here](https://modest-kare-3eff01.netlify.app/).

Please also find the Git repository for the backend [here](https://github.com/mikeomerta/sei-project4-backend)

## The Brief

* Build a full-stack application by making your own backend and your own front-end.
* Use a Python Django API using Django REST Framework to serve your data from a Postgres database.
* Consume your API with a separate front-end built with React.
* Be a complete product with multiple relationships and have multiple models.

## Timeframe

7 days.

## Technologies Used

* Bulma
* HTML
* CSS
* JavaScript
* React
* Axios
* Django
* Django REST framework
* Python
* GitHub
* Git

## Approach Taken

### Planning

I created an ERD diagram to plan the backend models and establish the relationships between them. This would help me in the build process if I knew where there were one to many or many to many relationships.

![ERD](assets/Screenshot%202022-02-01%20at%2016.15.38.png?raw=true)

I then drew out an idea of the app and the home page and listed out what features I wanted to have. I wanted to keep the app simple but challenge myself on a few aspects. I also decided to use a mix of Bulma and CSS for my styling. 

![Excalidraw](assets/Screenshot%202022-02-22%20at%2014.12.35.png?raw=true)

I wanted to build the following elements for my MVP:

* Login
* Register
* Add Book
* Delete Book
* Leave Comments
* Delete Comments
* Random Book Button

As Stretch goals I thought about adding the following elements: 

* Link to Amazon
* Email Wishlist 
* Review Book Section
* Recommend Button

I decided to call the app Tsundoku which is a Japanese word for collecting books and not reading them. 

![Tsunduko defintion](assets/Screenshot%202022-01-20%20at%2020.43.18.png?raw=true)

### The Build - Backend

This was my first experience of creating a back-end using Python. I used Django and Django REST Framework to create a PostgreSQL database with RESTful features.
Having learnt from my project 3 I wanted to build a very robust backend before even looking at the frontend. This would save me time later on in the build, so I began the first day and weekend building the backend. 

I created two models, one for the books and one for the users. 

![codeblock](assets/Screenshot%202022-02-22%20at%2014.12.48.png?raw=true)

All weekend while building the backend I used Insomnia to test the functionality of the backend and to make sure I was getting the right responses from the backend to whatever feature I had built. 

![Insomnia](assets/Screenshot%202022-02-17%20at%2015.17.32.png?raw=true)

For authorisation, I decided to use JWT as this was the auth system we were most comfortable with.

![codeblock](assets/Screenshot%202022-02-22%20at%2014.13.17.png?raw=true)

I had the backend and seeding data complete by the end of the weekend and was able to start the week with my frontend. I had also taken the time to add about fifteen books to the database, so I had some information to play with on my frontend.

### The Build - Frontend

I began by creating my Navbar and setting up basic pages for the Home, Show All, Show One, Register, Login, and Favourites pages. I wanted to have the pages working correctly before I worked on each individual one and added elements. 

![codeblock](assets/Screenshot%202022-02-22%20at%2014.13.25.png?raw=true)

I started with my home page and then moved along the list of pages completing them before moving on. The home page was relatively simple so I was able to move to the more difficult Show All page after this. This did take a larger chunk of the day to complete.

![error page](assets/Screenshot%202022-02-22%20at%2014.13.35.png?raw=true)

I created two files with one being a Book Card file that I would import into the Show All page. I did this to spread out my code and not have my JSX overloaded with code. I was then able to map quite simply through the array to get all the information that I wanted to display for the Show All page. 

![codeblock](assets/Screenshot%202022-02-22%20at%2014.13.44.png?raw=true)
![codeblock](assets/Screenshot%202022-02-22%20at%2014.13.51.png?raw=true)
![show all page](assets/Screenshot%202022-02-17%20at%2015.28.31.png?raw=true)

Over the next two days I built out the elements on all the pages I needed. Using a token in the local storage I was able to link the user and the book so the Show One page would advise who created the book and when. 

I once again used a Book Show Card to limit my code in one place in order to make it more readable. 

![website image](assets/Screenshot%202022-02-22%20at%2014.14.05.png?raw=true)

In the Add Book file and the Register file I set up a Cloudinary account so that the user’s avatar and images of books could be easily stored. At the same time I knew that error handling would be very important for these pages so I made sure to focus on that once I had completed all the initial pages I wanted.

![codeblock](assets/Screenshot%202022-02-22%20at%2014.14.12.png?raw=true)
![codeblock](assets/Screenshot%202022-02-22%20at%2014.14.19.png?raw=true)

I built error handling for the login, register and add book pages to make sure that if anything went wrong the user would be advised. 

At this stage my app was in a good place and I was thinking about styling for the penultimate  day to ensure I had an MVP for presentation. I would then add additional features to the app if I had time and after the course. 

This is where it went wrong. My wife, my son and I all managed to catch Covid-19 and I was quite ill and stuck in bed for 2 days. Additionally our son couldn't attend nursery so my wife and I had to look after him and the app had to be put on the shelf for a week. 

After a week I was able to come back to the app and style it using Bulma and CSS. My stretch goals were not achieved because of the delay so they are definitely on my future improvements for the app. 

## Challenges

Mapping through the array to get what I needed was not as straightforward as it should have been because I used a Book Show Card and a Book Show page. I had some issues where the user and the date were duplicating because I was mapping on both files. Once I identified this as the reason it was easy to correct. 

The main challenge was solidifying my knowledge and bringing all to the table to build the app. There was a lot of time looking at old projects, lesson notes and lesson videos. This helped me remember the steps I needed to build the app piece by piece. 

The delay in building the app did not help either as I lost momentum with my build. However, coming back to it the next week felt good as I only had the styling to finish.  

## Wins

Working solo was a win for me. I enjoyed the group projects I did but I really wanted to work alone on this to show myself that I knew the way to code this app. I wanted to use the knowledge I had gathered over the last 12 weeks to build something of my own making. 

I enjoyed Python too during this project. We had only learnt it for a couple weeks and it was quite intensive but I enjoyed the language and its capabilities. 

## Key Learnings

As with all projects, planning is a huge part of the success. Without planning I could easily have had a very incomplete project when I caught Covid 19. The planning helped me stay on track and know what needed to be completed each day.

Knowing what I wanted to build on the frontend too allowed me to plan my backend from the start. It saved me having to go back to the backend everyday to add features or adjust models. Overall the planning made me more efficient. 

## Known Bugs

My search bar does not function at this time. It can recognise and log a user’s entry but due to the illness I wasn't able to build the functionality to search the book array. I build it in the styling because I definitely want it in the app and I will complete it in the future. 

Additionally, my favourite function does not work as it should. I need to look at the code to fix the bug. This links to the User Collection page and ultimately to a random book choice button, which I still want to build. 

## Future Improvements

There are a number of things I want to complete on the app beyond the stretch goals I initially set out. 

Finishing the search bar would involve building genre tags into the model but this would also allow me to have a way to filter using genre tags which I want to have as a feature. 

I would like to build the home page to have more information on it as well. It could have recommended books based on the most liked by users.

The ransom book choice button is something I really want to build ultimately, as that was the genesis of the app idea and I could really use it when choosing my next book to read!
