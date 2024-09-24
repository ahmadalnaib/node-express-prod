# Webshop Backend API Specifications

Create the backend for a webshop directory website. All of the functionality below needs to be fully implmented in this project.

### Products
- List all products in the database
   * Pagination
   * Select specific fields in result
   * Limit number of results
   * Filter by fields
- Search products from meilisearch
- Get single product
- Create new product
  * Authenticated users only
  * Must have the role "user" or "admin"
- Update product
  * Owner only
  * Validation on update
- Delete product
  * Owner only


### Users & Authentication
- Authentication will be ton using JWT/cookies
  * JWT and cookie should expire in 30 days
- User registration
  * Register as a "user"
  * Once registered, a token will be sent along with a cookie (token = xxx)
  * Passwords must be hashed
- User login
  * User can login with email and password
  * Plain text password will compare with stored hashed password
  * Once logged in, a token will be sent along with a cookie (token = xxx)
- User logout
  * Cookie will be sent to set token = none
- Get user
  * Route to get the currently logged in user (via token)
- Password reset (lost password)
  * User can request to reset password
  * A hashed token will be emailed to the users registered email address
  * A put request can be made to the generated url to reset password
  * The token will expire after 10 minutes
- Update user info
  * Authenticated user only
  * Separate route to update password
- User CRUD
  * Admin only


## Security
- Encrypt passwords and reset tokens
- Prevent cross site scripting - XSS
- Prevent NoSQL injections
- Add a rate limit for requests of 100 requests per 10 minutes
- Protect against http param polution
- Add headers for security (helmet)
- Use cors to make API public (for now)

## Documentation
- Use Postman to create documentation
- Use docgen to create HTML files from Postman
- Add html files as the / route for the api

## Deployment ()
-
-
-


## Code Related Suggestions
- NPM scripts for dev and production env
- Config file for important constants
- Use controller methods with documented descriptions/routes
- Error handling middleware
- Authentication middleware for protecting routes and setting user roles
- Validation libraries
- Use async/await (create middleware to clean up controller methods)
- Create a database seeder to import and destroy data