The objective of the Movies DB web application is to provide users with an engaging and intuitive platform to explore and discover a wide range of movies. This application offers a comprehensive list of popular, top-rated, and upcoming movies. Users can view detailed information about each movie, including descriptions, ratings, and release dates. Additionally, the app features a robust search functionality that allows users to easily find specific movies based on their preferences. The goal is to create a seamless and enjoyable movie browsing experience leveraging the power and flexibility of React JS.

### Refer to the image below:

<div style="text-align: center;">
     <img src="./public/images/largeView.png" alt="ui"> 
</div>
<br/>

### Design Files

<details>
<summary>popular</summary>
<br/>
Add the design files according to the route (if any) and responsiveness

[Extra Small (Size < 576px) and Small (Size >= 576px)](./public/images/mobileView.png)

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](./public/images/largeView.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Assignment Completion Instructions

<details>
<summary>Functionality added</summary>
<br/>

The app must have the following functionalities:

- Navigate through pages with use of react router dom.
- Popular Movie Page
- Top Rated Movie Page
- Upcoming Movie Page
- Search Functionality
- Responsiveness
- Pagination

</details>

### Assignment Completion Checklist

<details>
<summary>Click to view</summary>

- The completion Checklist includes the below-mentioned points
  - I have completed all the functionalities asked in the assignment
  - I have used only the resources (Frameworks, Design files, APIs, third-party packages) mentioned in the assignment
  - I have modified the README.md file based on my assignment instructions
  - I have completed the assignment On Time.
  </details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- I have used axios a third party Pakage for fetching data from a api
- date-fns third party pakages for formatting the date
</details>

### Important Note

<details>
<summary>Click to view</summary>
<br/>

- Search Functionality doesn't work in MovieDetailPage route

</details>

### Resources

<details>
<summary>Data Fetch URLs</summary>
<br/>

- API KEY
  -c45a857c193f6302f2b5061c3b85e743

-Get all movies -https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1

-Get movie detail
https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US

-Get movie cast detail
https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US

-Get upcoming movies
https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1

-Get top-rated movies
https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1

-Get search result
https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${mov
ie_name}&page=1

</details>

<details>
<summary>Image URLs</summary>
<br/>

- For Image Path:- base domain used given below
  https://image.tmdb.org/t/p/w500

</details>

<details>
<summary>Colors</summary>
- text-colors
    #fffff
    #00000

- background-color
  #464343
  rgb(27, 27, 27)
  <br/>

Add the text and background colours to be used in the assignment yourself.

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
