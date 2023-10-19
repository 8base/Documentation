---
id: 'common-tasks-implementing-pagination-api-queries'
sidebar_label: 'Implementing Pagination Using 8base GraphQL API Queries'
redirect_from: '/gettingstarted/common-tasks-implementing-pagination-api-queries'
slug: '/projects/gettingstarted/ccommon-tasks-implementing-pagination-api-queries'
---
# Implementing Pagination Using 8base GraphQL API Queries

Effectively managing large data sets is a crucial aspect of any robust application. One proven way to enhance the efficiency and speed of data retrieval is through pagination. In essence, pagination works by dividing your data into smaller, more manageable segments.

Pagination is primarily achieved using the  `first`  and  `skip`  arguments.

## Understanding the  `first`  and  `skip`  Arguments

The  `first`  argument specifies the number of items to display on a page. It essentially sets a limit on the number of records that a query returns. The default and maximum limit for this argument is 5000 records.

On the other hand, the  `skip`  argument determines the number of items to skip before something is displayed. It specifies the starting point for data retrieval in the context of the entire data set. This argument is particularly useful for accessing subsequent pages of data.

## Implementing Pagination

When implementing pagination in a query, the  `first`  and  `skip`  arguments are manipulated to control the subset of data that is retrieved. For instance, to display the first two items,  `first`  is set to 2 and  `skip`  is set to 0.

**Query:**

```javascript

     query {

      /**

       * First consider 0 as the starting slice of paginated records. As this

       * number is increased, the prior results leave out previously fetched

       * records. (i.e., skip 0 -> skip 3 -> skip 6 -> skip 9...)

       */

      postsList(skip: 0, first: 3) {

        items {

          title

        }

      }

    }

```

**Response:**

```javascript

    {

      "data": {

        "postsList": {

          "items": [

            {

              "title": "Awesome Possum"

            },

            {

              "title": "A Sunset and Waves"

            },

            {

              "title": "Vapor Distilled Water for All"

            }

          ]

        }

      }

    }

```

## Pagination Example

### First: The Backend Data

Every 8base Backend automatically delivers a user table.


<!--![alt__text](images/image1.png "image_tooltip")-->


To query these users, we input the following query into the **API Explorer**:

**Query:**

```javascript

    query TeamMembers ($filter: UserFilter) {

      usersList (

        filter: $filter

        sort: { firstName: ASC }

      ) {

        count

        items {

          id

          email

          firstName

          lastName

          status

          createdAt

          avatar {

            downloadUrl

          }

          roles {

            items {

              id

              name

            }

          }

        }

      }

    }

```

**Response**

```javascript

    {

      "data": {

        "usersList": {

          "count": 12,

          "items": [

            {

              "id": "clnnv3fj3007q08ml5z3p5fft",

              "email": "Bruce@wayne.com",

              "firstName": "Bruce",

              "lastName": "Wayne",

              "status": "active",

              "createdAt": "2023-10-13T00:19:49.984Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoiVWd1UUNESGhUb2V2ZWozMDkxYXEifQ==,signature:0988af19fa9d94c3024d88029982c90c996cbef76cad1749b3410fb9ebc52f6b/UguQCDHhToevej3091aq"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657r004t08kw5hncblc0",

                    "name": "Administrator"

                  }

                ]

              }

            },

            {

              "id": "clnnv14n2005t08mleu9b35v8",

              "email": "Charles@dean.com",

              "firstName": "Charles",

              "lastName": "Dean",

              "status": "active",

              "createdAt": "2023-10-13T00:18:02.558Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoidFZIRDl6RGRSeGlFMGFwNExJamwifQ==,signature:ab6f47734b4fa02ecd034592cc2d731a1b7ae13da9359fa2ff7d25b2a14d0736/tVHD9zDdRxiE0ap4LIjl"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657r004t08kw5hncblc0",

                    "name": "Administrator"

                  }

                ]

              }

            },

            {

              "id": "cllyfazq000ih08jyf1ty79jw",

              "email": "carlosjimenezrobayo@gmail.com",

              "firstName": "Charlie",

              "lastName": "Garcia",

              "status": "active",

              "createdAt": "2023-08-31T00:23:52.152Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoiN0ZmWVQ1YjhTU2EwVlRPUVhFS0gifQ==,signature:faa5f1982b733dd1a3dc117bb908a8db95dd84029efa73e4ad6f421a492dcee3/7FfYT5b8SSa0VTOQXEKH"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657r004t08kw5hncblc0",

                    "name": "Administrator"

                  }

                ]

              }

            },

            {

              "id": "clnnv2cwb007308mlh9mb7ry7",

              "email": "cLark@kent.com",

              "firstName": "Clark",

              "lastName": "Kent",

              "status": "active",

              "createdAt": "2023-10-13T00:18:59.915Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoiSmFZTWF3a1R5cTgweEhhZ0pJN2cifQ==,signature:e4c8e8f353bc34e73138fc9877780e70d7b4b49dbde9396284c7ca64bf3ed84b/JaYMawkTyq80xHagJI7g"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657f004s08kw8v194arm",

                    "name": "Guest"

                  }

                ]

              }

            },

            {

              "id": "clnnv3xxm008d08ml0bg8ck1q",

              "email": "corey@taylor.com",

              "firstName": "Corey",

              "lastName": "Taylor",

              "status": "inactive",

              "createdAt": "2023-10-13T00:20:13.834Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoiOHJFM2pGdUdSVjJMVnB6aGtDU2cifQ==,signature:3ff99284dd5976006a50668ef6d092ba44ce2ab94197f4408907c7e5128e6c27/8rE3jFuGRV2LVpzhkCSg"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657f004s08kw8v194arm",

                    "name": "Guest"

                  }

                ]

              }

            },

            {

              "id": "clnnv1ryc006g08mlhdbl14jd",

              "email": "Lois@lane.com",

              "firstName": "Lois",

              "lastName": "Lane",

              "status": "inactive",

              "createdAt": "2023-10-13T00:18:32.773Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoiZXdBcHRibThRSlNubjc3eGtUMFgifQ==,signature:9497d1570f682980a0052499af7e66e7420f0b855ac3a3826e0150a6e3625837/ewAptbm8QJSnn77xkT0X"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657f004s08kw8v194arm",

                    "name": "Guest"

                  }

                ]

              }

            },

            {

              "id": "clnnv0btk005608ml3hiveqkd",

              "email": "Lola@food.com",

              "firstName": "LoLa",

              "lastName": "Hamilton",

              "status": "active",

              "createdAt": "2023-10-13T00:17:25.208Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoiSldVWVFCQlF6QzlMV1V6U2xtb1UifQ==,signature:85833ccdf4c9f12f0b63f753220dddcd01b1b4713ae3de8500055aecb1ac09b1/JWUYQBBQzC9LWUzSlmoU"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657r004t08kw5hncblc0",

                    "name": "Administrator"

                  }

                ]

              }

            },

            {

              "id": "clnnssdp4000l08jy95iu7g3b",

              "email": "luigi@mario.com",

              "firstName": "Luis",

              "lastName": "Muro",

              "status": "active",

              "createdAt": "2023-10-12T23:15:15.161Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoiNnF1dkFvUXBRRGFmN0hIZzBmWTEifQ==,signature:ded945e9ce3b3715c01ac6cd319799ab6844a1fb9eb9e72a300d3fe331ccb743/6quvAoQpQDaf7HHg0fY1"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657r004t08kw5hncblc0",

                    "name": "Administrator"

                  }

                ]

              }

            },

            {

              "id": "clnnt8e2h00dn08ml9s5tfp22",

              "email": "marco@boudeaux.com",

              "firstName": "Marco",

              "lastName": "Boudeaux",

              "status": "active",

              "createdAt": "2023-10-12T23:27:42.137Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoieUd0TGtjaG1SSEdhdFlLMnJBTWUifQ==,signature:daee680db16511fce4d370e75ff5c15d6b088d510c6238ad8ff812dc65797efc/yGtLkchmRHGatYK2rAMe"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657f004s08kw8v194arm",

                    "name": "Guest"

                  }

                ]

              }

            },

            {

              "id": "clnnuzlys004j08mldjsdfscj",

              "email": "Maria@marzo",

              "firstName": "Maria",

              "lastName": "Marzo",

              "status": "active",

              "createdAt": "2023-10-13T00:16:51.701Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoidmRxSXJZNGhUUzZ6aDN4ZmdJa0EifQ==,signature:eeb84b417dcdde58fbdca77923b3d0e84a1f81abebac6a0a8507512bd1467956/vdqIrY4hTS6zh3xfgIkA"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657f004s08kw8v194arm",

                    "name": "Guest"

                  }

                ]

              }

            },

            {

              "id": "clnnqdmey001208jk7fik1gb4",

              "email": "mario@mario.com",

              "firstName": "Mario",

              "lastName": "Lopez",

              "status": "active",

              "createdAt": "2023-10-12T22:07:47.387Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoiR1dJSllnYVRXV29veFl3YUpvSWUifQ==,signature:0c6995008c8f58049c78cf5ebd9c6d596766501e28090834def370315e49fc6b/GWIJYgaTWWooxYwaJoIe"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657r004t08kw5hncblc0",

                    "name": "Administrator"

                  }

                ]

              }

            },

            {

              "id": "clnnstv4d006x08kvh9nn4wat",

              "email": "yoshi@mario.com",

              "firstName": "yoshua",

              "lastName": "Montreal",

              "status": "active",

              "createdAt": "2023-10-12T23:16:24.397Z",

              "avatar": {

                "downloadUrl": "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTY5NzI0MTYwMCwiaGFuZGxlIjoiVnZhdXNkSVhSeXlIY05ramcwRmEifQ==,signature:7028c0c75a563827a0b306aedd25d40a0ba05a38390286e319682ee715d3b280/VvausdIXRyyHcNkjg0Fa"

              },

              "roles": {

                "items": [

                  {

                    "id": "cllye657r004t08kw5hncblc0",

                    "name": "Administrator"

                  }

                ]

              }

            }

          ]

        }

      }

    }

```

Now we want to split the previous query response into two pages, to show the list of users in the Frontend. We will use the `first` and `skip` arguments.

**Query:**

```javascript

    query TeamMembers ($filter: UserFilter) {

      usersList (

        skip:0, 

        first: 6,

        filter: $filter

        sort: { firstName: ASC }

      ) {

        count

        items {

          id

          email

          firstName

          lastName

          status

          createdAt

          avatar {

            downloadUrl

          }

          roles {

            items {

              id

              name

            }

          }

        }

      }

    }

```

Using `skip: 0` / `first: 6` will bring only the first six records of the response. To get the following 6, we must send the following:

`skip: 6` / `first: 6`.

This way, we have two pages showing six records each. 

#### Next: The Frontend Implementation - Adding the Query

Our data is set up in the backend and we have a query ready. Let's dive into how we can leverage pagination in our frontend. We need to add a resource to our application.

To assess the resources integrated with your frontend, navigate to the **Resources** section. This can be accomplished by selecting the corresponding icon located in the sidebar.


<!--![alt__text](images/image2.png "image_tooltip")-->


You can select a specific resource to view more detailed information.


<!--![alt__text](images/image3.png "image_tooltip")-->


Here is the detailed view for a resource:


<!--![alt__text](images/image4.png "image_tooltip")-->


Now let’s craft the query: 



1. On the right-hand side, click **Requests**. 


<!--![alt__text](images/image5.png "image_tooltip")-->




2. Create a **Global Request** as a **Lazy Query**.


<!--![alt__text](images/image6.gif "image_tooltip")-->




3. If you want to update the `first` and `skip` values with a frontend event, you will need to modify their values to use variables. 
    * So, instead of using:

```javascript

    query TeamMembers ($filter: UserFilter) {

      usersList (

        skip:0, 

        first: 6,

        filter: $filter

```



* Your query should look like this:

```javascript

    query TeamMembers ($filter: UserFilter, $skip: Int, $first: Int) {

      usersList (

        skip: $skip, 

        first: $first,

        filter: $filter

        sort: { firstName: ASC }

      ) {

        count

        items {

          id

          email

          firstName

          lastName

          status

          createdAt

          avatar {

            downloadUrl

          }

          roles {

            items {

              id

              name

            }

          }

        }

      }

    }

```

4. Enter the query above in the query field of your new request and give it a name.

5. Click **Save**.


<!--![alt__text](images/image7.png "image_tooltip")-->


At this moment, we will not send the variables for `first` and `skip`. We will do this in another section, because this is not mandatory. If we execute the request, it will give us the total list without pagination.

### The Frontend Implementation - Using the Query

In this section, we will guide you through the process of using a GraphQL query in the frontend of your application. We will construct a webpage that displays a list of personnel data fetched from our backend.

To achieve this, we will leverage a local navigation event, with the **Run custom code** option. This action is necessary as our **Lazy Query** requires the values of the  `skip`  and  `first`  variables to be passed according to the data we intend to display.

In this scenario, the variables will be passed as follows:

```

-   `skip: 0`

-   `first: 6`

```

Our backend table contains twelve records. This configuration will display the first six records on the initial page.

#### Accessing Local Navigation Events

1.  Click on **Pages** in the sidebar.


<!--![alt__text](images/image8.png "image_tooltip")-->


2.  Locate your page and click on the gear icon to view its settings.


<!--![alt__text](images/image9.png "image_tooltip")-->


3.  The settings panel will appear. The Local **Navigation Events** section is located at the bottom.


<!--![alt__text](images/image10.gif "image_tooltip")-->


#### Configuring **BeforeRouteEnter** Event



1. Select the **BeforeRouteEnter** option. We want the query to execute when the page loads. 
2. Then, choose the custom code option to enter the request execution code. 


<!--![alt__text](images/image11.png "image_tooltip")-->




3. The code should be structured as follows, sending the  `skip`  and  `first`  variables:

```javascript

    accUsersGet.run({

      variables: {

        "skip":0,

        "first":6

      }

    });

```


<!--![alt__text](images/image12.png "image_tooltip")-->


4. After implementing the code, be sure to save your changes. Click on the **Save** button located at the top of the page settings.


<!--![alt__text](images/image13.png "image_tooltip")-->


Now your page is set up to execute the GraphQL query upon load. 

#### Rendering Query Responses with the Looper Component

The time has come to render the query response to the user.

We will use the looper component to show the information that comes in the query response. 

The looper component is designed to iterate over an array of data, providing a repeating structure to display each array item.

#### Connecting the Query Response to the Looper

First, we need to connect our query response to the looper component. This connection can be achieved through the Loop Data field. In this example, we will use the **Enter Code** option.


<!--![alt__text](images/image14.png "image_tooltip")-->


The reference to our query response will be placed in the **Loop Data** dropdown between {{ }}:  `{{ accUsersGet?.data }}`.


<!--![alt__text](images/image15.png "image_tooltip")-->


By default, the **Item Name** field is set to "item". This serves as the argument we will use to access each element in our query response.

#### Configuring the Card Component

Next, we will add a component within the looper to display the iterated information. For this instance, we will use a **Card Component** as it aligns well with our example.


<!--![alt__text](images/image16.png "image_tooltip")-->


The **Card Component** should be configured as follows:

1.  **Card Header**: The header will display the first and last name of each user. Using our "item" argument, it will look like this:  `{{item?.firstName}} {{item?.lastName}}`.


<!--![alt__text](images/image17.png "image_tooltip")-->


    

2.  **Card Content**: The content will display the user's profile photo. The image source configuration will be:  `{{item?.avatar?.downloadUrl}}`.


<!--![alt__text](images/image18.png "image_tooltip")-->


    

3.  **Typography Component**: Within the card content, we will add a typography component to display the user's email. The text of this component will be:  `{{item?.email}}`.


<!--![alt__text](images/image19.png "image_tooltip")-->
    

#### Previewing the Result

Once these steps have been completed, the component is set to display the information. To preview the result, execute the request from the requests panel.


<!--![alt__text](images/image20.gif "image_tooltip")-->


>**Note**: The pagination will not appear in the preview. When executing the query from the request panel, it is performed without a value in the `skip` and `first` variables.

#### Displaying the Second Page

Previously, we configured a local navigation event to trigger our query when the page loads. This displays the first page of our response, corresponding to the first 6 records. The next step involves providing a mechanism for the user to re-execute the query, this time aiming to display the subsequent page.

In order to achieve this, we will enhance our application's interface by adding a button to the canvas.

**Configuring the Button**

Here are the steps to add an `onClick` event to the button:



1. Drag a button onto the canvas.  

2. Go to the component and click on it. This action will open the properties panel.


<!--![alt__text](images/image21.png "image_tooltip")-->


3.  In the properties panel, select the **Events** tab.


<!--![alt__text](images/image22.png "image_tooltip")-->


4.  Under this tab, add an **On Click** event and choose **Run Custom Code**.


<!--![alt__text](images/image23.png "image_tooltip")-->


5. Just like we did for the local navigation event, we will incorporate the code to execute our request. This code will send the values for the  `skip`  and  `first`  variables.

```

-   `skip`: 6

-   `first`: 6

```

6. These particular values will trigger the query execution and fetch the next 6 records in the response.

```javascript

    accUsersGet.run({

           variables: {

             "skip":0,

             "First":6

           }

         });

```


<!--![alt__text](images/image24.png "image_tooltip")-->


7. After entering the code, save the configuration by clicking **Done**.

With that, we have successfully configured the pagination for the second page of our application.

#### Previewing the Application

In the editor's header menu, click the **Preview** button to launch a preview of your application. 


<!--![alt__text](images/image25.gif "image_tooltip")-->


Here is the first page:


<!--![alt__text](images/image26.png "image_tooltip")-->


And here is the second one:


<!--![alt__text](images/image27.png "image_tooltip")-->


Congratulations! Your application now has pagination.
