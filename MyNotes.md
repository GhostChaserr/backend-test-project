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