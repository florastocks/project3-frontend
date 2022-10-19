<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.619 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Wed Oct 19 2022 04:25:17 GMT-0700 (PDT)
* Source doc: Earth BnB README
----->


**<span style="text-decoration:underline;">ReadMe - Earth BnB</span>**

**<span style="text-decoration:underline;">Group members:</span>**

Arianna Giordano: [https://github.com/silverjana](https://github.com/silverjana)

Aaron Zahl: [https://github.com/Zahlsky](https://github.com/Zahlsky)

Flora Stocks: [https://github.com/florastocks](https://github.com/florastocks)

This was my second group project. Myself and two others were challenged with making a full stack web application. After a short discussion, we decided to build an app in the style of AirBnB, where users can view properties for their next holiday, add any property they wish to rent out, and review others properties.

The app was deployed with Heroku and is available [here](https://project3-earthbnb.netlify.app/)<span style="text-decoration:underline;">.</span>
***
**Goal and TimeFrame**



* Build a full-stack application - by making your own backend and your own front-end.
* Use an Express API to serve your data from the Mongo database.
* Consume your API with a separate front-end built with React.
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.
* Have a visually impressive design.
* Be deployed online so it's publicly accessible.
* Timeframe: 8 days
***
**Technologies Used:**

**Frontend:**



* JavaScript
* HTML
* CSS
* SASS
* React
* React-Bootstrap
* MUI
* cloudinary-React

**Backend:**



* MongoDB
* Express
* Node

**Packages:**



* nodemon 
* JsonWebToken
* bcrypt
* dotenv
* Axios

**Dev tools:**



* VS Code
* Google Fonts
* Google Dev Tools
* Insomnia
* Excalidraw
* GitHub
***
**Process**

After a brief discussion about the theme of our project, we began our planning with a collaborative wireframe drawn out using Excalidraw. The full wireframe can be found [here](https://excalidraw.com/#room=81ec26a973c0b07b307e,xR-XsupOnF0AeFKzrE-AHA).

This is where we decided the feature of our app, and the different pages we would need, as well as how our backend would work, and stretch goals.
[![Screenshot-2022-10-18-at-11-58-15.png](https://i.postimg.cc/XXSfj7d5/Screenshot-2022-10-18-at-11-58-15.png)](https://postimg.cc/7J9GX4BP)
[![Screenshot-2022-10-18-at-11-58-25.png](https://i.postimg.cc/9XqNh4jr/Screenshot-2022-10-18-at-11-58-25.png)](https://postimg.cc/z38kwGvr)
[![Screenshot-2022-10-18-at-11-54-48.png](https://i.postimg.cc/tRmm0hf0/Screenshot-2022-10-18-at-11-54-48.png)](https://postimg.cc/DmLcLbn5)
 We added the different tasks to a trello board in order to ensure we knew what each other were doing - avoiding conflicts, but also so that at the end of each day, we could ensure we were on track to complete the project in the timeframe given. 
[![Screenshot-2022-10-18-at-11-53-45.png](https://i.postimg.cc/BQzWgWsK/Screenshot-2022-10-18-at-11-53-45.png)](https://postimg.cc/sv50jNMj)
We began again in the morning with a quick stand up, discussing which aspects of the app we would individually tackle that day, and ensure we were all still on the same track, as well as briefing each other with any issues we encountered. We used zoom throughout the days, and helped each other when an issue needed a combined force to solve. By ensuring the three of us  were constantly in contact about what we were currently doing, as well as frequently pushing and merging, we were able to complete the project with minimal merge conflicts.

During our planning stage, we also roughly delegated roles within the group. We wanted to divide the project so that we would all be able to work on both the front, and the backend code, in order to gain experience working with both sides, especially as this was our first full-stack application.  Aaron worked on the backend endpoints testing, mongoose schemas, register/login, util, error handling, properties controller, frontend uploading images, add-property and deleting properties. Ariana chose to work on the backend routes, authorisation, user controller, review controller and on the front end, the register and login pages. I created the React app through the terminal, the different components for the app, and the routes that correspond with the pages. I also did most of the styling across the site. I created the seeding data for our database, and connected it all to the front end. I then created the filter feature on the all properties page.

```
const handleChange = (e) => {
    const propertyTypes = allProps.filter(property => property.type === e.target.value)
    setFilterProperty(propertyTypes)
  }

  return (
    <Container as='main'>
      <div className="filter-div">
        <select className="type-select-all" name='type' onChange={handleChange}>
          <option value='All'>All Properties</option>
          <option value='cabin'>Cabins</option>
          <option value='city'>City</option>
          <option value='country'>Country</option>
          <option value='camping'>Camping</option>
          <option value='beach'>Beach</option>
        </select>
      </div>
```

I worked on a later version of the review controller, fixing the delete request in the review controller, and making the code more concise.

```
const remove = async (req, res, next) => {
  const { propertyId, reviewId } = req.params
  const { id: userId } = req.currentUser

  try {
    const property = await PropertyModel.findById(propertyId)
    const reviewToDelete = property.reviews.find(
      (review) => review.createdBy.toString() === userId
    )
    if(!reviewToDelete){
      return res.status(404).json({message: "Review doesnt exist"})
    }
    property.reviews = property.reviews.filter(
      (review) => review.createdBy.toString() !== userId
    )

    const user = await UserModel.findById(userId)
    user.reviews = user.reviews.filter(
      (review) => review.id !== reviewId
    )

    await property.save()
    await user.save()

    return res.status(200).json({
      message: "Comment successfully deleted",
    })
  } catch (error) {
    next(error)
  }
}
```
***
**Screen shots**

Landing page and carousel 
[![Screenshot-2022-10-19-at-12-34-31.png](https://i.postimg.cc/V6vpM4TR/Screenshot-2022-10-19-at-12-34-31.png)](https://postimg.cc/2bp0NdCb)
All properties with filter method 
[![Screenshot-2022-10-19-at-12-35-12.png](https://i.postimg.cc/Hs9qqJQb/Screenshot-2022-10-19-at-12-35-12.png)](https://postimg.cc/fJkqXRqb)
Individual property page
[![Screenshot-2022-10-19-at-12-35-37.png](https://i.postimg.cc/XYXssXxj/Screenshot-2022-10-19-at-12-35-37.png)](https://postimg.cc/HrD0xYfR)
[![Screenshot-2022-10-19-at-12-35-47.png](https://i.postimg.cc/qqMsgZ5J/Screenshot-2022-10-19-at-12-35-47.png)](https://postimg.cc/BLkLVN3k)
***
**Wins and Blockers**

I found working as part of a team very beneficial. Although we all had our different roles, because of our constant collaboration and screensharing on zoom, I can confidently say I contributed to the end result of most parts of the app, through helping problem solve when fresh eyes were needed on a task. Working as as part of a team also boosted moral at times and gave a sense of team spirit.

As this was the first time I worked collaboratively using Git (instead of VS Code live share) I found it initially difficult to grasp creating branches and merging, which at one stage led to a merge conflict. But this highlighted early on that better communication amongst the team was needed, which avoided the same mistake happening twice. 
***
**Key Learnings**



* Github: collaboration, branches, merging
* Importance of delegation, clear and detailed planning, and communication amongst the group. 

**Future Improvements**



* Create a bookings page 
* Creating a map on the individual properties page, so that users can see the properties location on a map. 
* Better use of cloudinary - so that all photos are the same dimensions on the single property page. 