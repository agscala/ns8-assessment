# NS8 Assessment
Requirements: https://github.com/ns8inc/ns8-tech-assessment

## Building And Running
1. `npm install`
2. `npm run tsc`
3. `node build/server.js`
4. `localhost:4004`

```
GET  /api/events
     Fetch all of the events.  Optional query param filters: userId, dateStart, dateEnd.

POST /api/users
     Create a new user.  Phone optional.
     {"email": "test@ns8.com", "password": "passwordIsPizza", "phone": "333-222-1111"}

GET  /api/users/:userId
     Get a user by the user's id.

POST /api/users/:userId/events
     Create a new event for a user.
     {"type": "EVENTNAME"}

GET  /api/users/:userId/events
     Fetches all of the user's events.
```

## Notes
**MongoDB:** Since NS8 uses mongo, I chose mongo for this project despite not being a requirement.
It uses an in-memory implementation on mongo for simplicity.

**TypeScript:** This is my first experience with typescript, though I've used modern javascript otherwise. I've used C# a lot at my current job and C/C++ in past jobs, so statically typed languages aren't new to me.  Overall, it was pleasant to use. The compiler caught some bugs at compile time instead of runtime which was nice.

**BCrypt:** Passwords are strongly hashed for the heck of it.  It was pretty simple to hash them in a pre-save hook with mongoose.

**Query Filtering:** The `/api/events` resource allows you to specify a start and end date.  The requirements mentioned being able to query for events that happened in the past 24 hours, but this is more flexible.

## Future Considerations
* The **build pipeline** can probably be streamlined to not require compiling .ts and then running .js files.
* **Tests** aren't set up.  I looked into Jest and Mocha briefly to see if it was something I could set up quickly, but it ended up being outside the scope of this project.
* A proper **logging** strategy should be set up.
* **Self-documenting API** with swagger. Possibly with something like https://github.com/scottie1984/swagger-ui-express
