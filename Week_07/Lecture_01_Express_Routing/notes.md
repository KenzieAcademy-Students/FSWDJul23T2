## Resources
- [The Six Rules of REST API's](https://blog.hubspot.com/website/what-is-rest-api) (focus on just 1-3)

## RESTful Routing Example

Let's say we want to build an API about holidays. We should be able to see what holidays exist, and what kinds of food is eaten on a given holiday, when is the holiday, etc.

URL | Method | Resource/Action
--- | --- | --- 
/api/holidays | GET | A list of all holidays 
/api/holidays | POST | Create a new holiday
/api/holidays/:holidayId | GET | A single holiday
/api/holidays/:holidayId | PUT | Update a single holiday
/api/holidays/:holidayId | DELETE | Delete a single holiday
/api/holidays/:holidayId/cuisine | GET | A list of food eaten on a specific holiday
/api/holidays/:holidayId/cuisine | POST | Create a new food to be eaten on a specific holiday
/api/holidays/:holidayId/music | GET | A list of music listened to on a specific holiday
/api/holidays/:holidayId/music | POST | Create a new type of music to listen to on a specific holiday
/api/foods | GET | A list of all foods
/api/foods | POST | Create a new food