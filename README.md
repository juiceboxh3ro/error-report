# JFZ Error Reports

### Feel free to fork this and make suggestions for features or styles you want the submission form to have.
### This app uses React and Firebase. 

### Currently the plan is to add a login to allow mentors, moderators, and admin from the From Zero! Discord servers to review submitted reports to make sure that they are indeed errors and that the submitted content is not vulgar.

# Getting Started
### Clone this repo
### Run `yarn start` and `yarn server` to start the frontend and backend respectively.
### ???
### Profit

# Error Reports Endpoints

`server link goes here`

#### Users Schema

| field    | data type        | metadata                                            |
| :------- | :--------------- | :-------------------------------------------------- |
| id       | unsigned integer | primary key                                         |
| username | varchar(99)      | required, unique                                    |
| password | varchar(1024)    | required                                            |

#### Reports Schema

| field          | data type        | metadata                                            |
| :------------- | :--------------- | :-------------------------------------------------- |
| id             | unsigned integer | primary key                                         |
| book           | varchar(99)      | required                                            |
| page           | integer          | required                                            |
| revision       | integer          | required                                            |
| typo           | varchar(255)     | required                                            |
| suggestion     | varchar(255)     | required                                            |
| description    | varchar(1024)    |                                                     |
| verified       | boolean          |                                                     |
| date_submitted | timestamptz      | required                                            |

#### API

The following endpoints are available to test the functionality of the model methods.
| HTTP Request | Endpoint                   | Description                                                                         |
| :----------- | :--------------------------| :---------------------------------------------------------------------------------- |
| `GET`        | `/`                        | pings the server to check if it's awake                                             |
| `POST`       | `/api/auth/register`       | register a new user, username must be on whitelist                                  |
| `POST`       | `/api/auth/login`          | login a user with their username and password, returns a token                      |
| `DELETE`     | `/api/auth/deactivate`     | removes a user from the database, requires their credentials and a token            |
| `GET`        | `/api/report`              | returns an array of every submitted report, regardless of verification status       |
| `GET`        | `/api/report/:book`        | returns 3 arrays (all, verified, unverified) of every submitted report for a book   |
| `POST`       | `/api/report`              | creates a new report, returns the report on success                                 |
| `PUT`        | `/api/report/:id`          | updates verification status of a report by ID                                       |
| `DELETE`     | `/api/report/:id`          | removes a report by ID                                                              |