# Strive

### [Strive](https://strive-for-strides.herokuapp.com/#/)

![](https://github.com/vnchen92/strive/blob/main/app/assets/images/strive-screenshot.jpg?raw=true)

Strive is the free version of what Strava would encompass. It is a full stack clone of a social networking application for athletes.

## Functionality & MVPs

### User Authentication

Users can log in and sign up. Only logged in users will be able to use site functionality.

### Activities

Users can create, read, update, and delete their own posts. Distance, time, and pace cannot be edited if a google map is present.

### Feed & Profile

Users are able to have a dashboard of all the activities from users they follow. Users are also able to view profiles of other users if they are following those users.

### Comments

Users are able to create and delete comments on their activities and on the activities of those they follow.

### Follows

The number of users a user is following is reflected on their dashboard as well as the followers the users has.

### Kudos

Users can like the posts of those whom they are following only once. They can also delete the like as they choose.

## Technologies

### Frontend: React & Redux

React is used to render each component efficiently with Redux to manage the global state.

### Backend: Ruby on Rails, PostgreSQL, & Jbuilder

Ruby on Rails handles user authentication via session tokens. It serves as another validation for any CRUD features before it is saved in the PostgreSQL database. Jbuilder is used to structure the JSON object when returned to the frontend using Ajax requests.

### Google Directions API

Used to render the routes on all google maps correctly. Lattitude and longitude points need to be fed into this API to render a polyline showing correct running routes. This way, paths take into consideration of other objects (such as buildings, highways, etc.) instead of rending a straight path from one point to another.

### Google Maps API & Google Static Maps API

Google Static Maps API is used for map snippet of route on the dashboard and profile pages. Google Maps API is used when a user clicks to show an activity so users are able to move the map dynamically to see where the route is as well as zoom in and out.

## Future Features

### Elevation Graph

Any activities with a google map will also have a graph showing the elevation points of the path.

### Create a Route

Users will be able to create their own path on a dynaic google map to share with other users. They can update and delete this as well. Dynamic marker placement will create this customized route. Distance and elevation will also be shown.


