# App overview
Uber like app where driver moves customer from one point to another. using geometric cordinates, we know start and end places for ride, who is driver, rider and also vehicle used on ride.

### What server rodes.

1. Allows client to post new ride using valid request body.
2. Allows client to query all rides. 
3. Allows client to query single ride.

!! We validate ride gemoetric cordinates to be valid.
!! We wont allow request to retrive ride that does not exits


# Overall app architecture

### HTTP Layer
handles incoming requests, data validations and policies.

### Service layer
handles app business logic

### DB Layer
handles database queries.

!! Generally its good idea to keep http layer small, just handle request, check policy and validate data. business logic 
is moved into service layer, which also comunicates with db layer.


# Integration tests PR
https://github.com/GhostChaserr/backend-test-project/pull/1

# Pagination
Example - http://localhost:4000/rides?page=1&size=10
https://github.com/GhostChaserr/backend-test-project/pull/2

# Test CI On Github Actions
https://github.com/GhostChaserr/backend-test-project/pull/5

# Winston and logging
https://github.com/GhostChaserr/backend-test-project/pull/6

# SQL Injection
https://github.com/GhostChaserr/backend-test-project/pull/7

# Artillery load testing
https://github.com/GhostChaserr/backend-test-project/pull/8

# Basic express security
https://github.com/GhostChaserr/backend-test-project/pull/9

# Travis CI Build 
https://github.com/GhostChaserr/backend-test-project/pull/10

# Pre commit Hooks. Additional tooling
https://github.com/GhostChaserr/backend-test-project/pull/11

# Swagger and api docs example
https://github.com/GhostChaserr/backend-test-project/pull/12

# PM2 Process manager
https://github.com/GhostChaserr/backend-test-project/pull/13