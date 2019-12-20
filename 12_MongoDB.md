## DATABASE NoSQL
![](img/2019-12-19-17-25-32.png)
![](img/2019-12-19-17-27-59.png)
![](img/2019-12-19-17-31-58.png)
---

## Installing MongoDB on macOS
- since I have installed mongoDB
![](img/2019-12-19-17-39-43.png)
- next step:
    - create a folder where the database can then actually store the data

#### Creating a Local Database
- if a database doen't exit
- basically switch to a database that doesn't exit, it will then create a new one 
![](img/2019-12-19-22-34-41.png)
```sql
> db
test
> use natours-test
switched to db natours-test
> db.tours.insertOne({ name: "The Forest Hiker", price: 297, rating: 4.7})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5dfc6c4c6e50a7965244007e")
}
> db.tours.find()
{ "_id" : ObjectId("5dfc6c4c6e50a7965244007e"), "name" : "The Forest Hiker", "price" : 297, "rating" : 4.7 }
> show dbs
admin         0.000GB
config        0.000GB
express-test  0.000GB
local         0.000GB
natours-test  0.000GB
> use admin
switched to db admin
> use natours-test
switched to db natours-test
> show collections
tours
```


## Using Compass App for CRUD
- go to `MongoDB Download Center`
![](img/2019-12-19-21-48-19.png)
- click Download
- then click connect
![](img/2019-12-19-21-59-20.png)
![](img/2019-12-19-21-59-39.png)
- `brew services start mongodb-community`
![](img/2019-12-19-22-04-30.png)
- after start service
![](img/2019-12-19-22-03-17.png)










---
### Creating a Hosted Database Atlas
- create a new account for mongodb
- create a new project
![](img/2019-12-19-21-10-13.png)
- name my project
![](img/2019-12-19-21-11-29.png)
- click next
![](img/2019-12-19-21-17-41.png)
- click create cluster
![](img/2019-12-19-21-21-04.png)
---

### connecting to Our Hosted
- click `CONNECT`
![](img/2019-12-19-21-22-05.png)
- Add your IP address
![](img/2019-12-19-21-23-07.png)
![](img/2019-12-19-21-39-32.png)
![](img/2019-12-19-21-39-44.png)
![](img/2019-12-19-21-40-09.png)
![](img/2019-12-19-21-40-33.png)
- choose: `Connect with MongoDB Compass`
![](img/2019-12-19-21-41-45.png)
- click copy








