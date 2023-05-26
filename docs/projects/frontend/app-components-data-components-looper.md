---
id: 'app-components-data-components-looper'
sidebar_label: 'Looper'
redirect_from: '/frontend/app-components/data-components/looper'
slug: '/projects/frontend/app-components/data-components/looper'
---

# Looper
The *Looper* component acts as a container and requires an array and another component, such as a *List* or *Card*. It uses the array to dynamically populate the other component's content inside the *Looper*.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>loopData</td><td>array</td><td></td><td>Defines an array of data in the format id, prop1, prop2, prop3. The id <b>must</b> be is small letters.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Defines a unique identifier that allows access the array element's properties.</td></tr>
</tbody>
</table>

> [!NOTE] Example: How create dynamic content using the Looper
> 
> For this example, we assume you already have a *Page* with *Form Block*, *Form Text Field*, a submit *Button* called "Add", and a *Looper*.  You will also need a database table for a To Do List with "id" and "item" fields. 
> 
>Additionally, you will need one query and two mutations:
> - **addToDo** - Takes input from the text field and stores it in the database table.
> - **getTodos** - Fetches the To Do List data from the database table.
> - **deleteToDo** - Deletes a To Do item in the database table.
> 
> 1. Drag a *Card* component from the *Components* pane and drop it onto your *Looper*.
> 2. Click the *Page Structure* icon to confirm the *Card* component is inside the *Looper Content* component. 
> 3. Click the *Requests* icon to open the *Requests* pane and "Run" your **getTodos** query.
> 4. Once you get your Response, click the *State* icon to open the *State* pane.
> 5. Under the *Requests* section, click the green arrow next to the **getTodos** name to view its properties. 
> 6. Click the green arrow next to the "data" property and drill down to the "items" property. At this point, the array will not contain any data.
> 7. Click the *clipboard* icon below the "Items" property to copy the array to the clipboard.
> 8. Click the *Page Structure* icon and select your *Looper* component, which opens the *Properties* pane.
> 9. Paste the array you copied into the *Loop Data* field. Your array should look something like this: `{{ getTodos.data?.todosList.items || [] }}`
> 10. In the *Item Name* field, enter the word **item**.
> 11. Select your *Card* component on the *Page* and open the *Properties* pane.
> 12. Under *Custom Properties*, click "Add Item" to add a custom property.
> 13. Click the gear icon next to the *propname* to open a pop-up window.
> 14. Enter "cardid" in the *Key* field and `{{ item?.id || "" }}` in the *Value* field, then close the pop-up.
> 15. Click the gear icon next to the *Header* property to open a pop-up window.
> 16. Enter `{{ item?.todo || "" }}` in the *Title* field, which will display the **item** as the header for the *Card* component.
> 17. Select the *Card Content* component on the *Page* and open the *Properties* pane.
> 18. Drag an *Icon Button* component onto the *Card Content* component.
> 19. Expand the *Icon* section of the *Properties* pane, and click on the gear icon next to the *Icon* property to open a pop-up window. 
> 20. Click the "Change" button, which opens a pop-up window.
> 21. Enter "Delete" in the *Search* field, choose an appropriate icon, click "Apply", and close the *Icon* properties pop-up window.
> 22. Select the *Icon Button*  and click the *Events* tab in the right-hand pane.
> 23. Click "+" and select the "On Click" event. 
> 24. Click "Choose Action", then select "Run Custom Code", and click the "Add Custom Code" button.
> 25. You want to call your **deleteToDo** mutation in the code panel and pass it the **cardid**.
> 26. Your code should look similar to: `deleteToDo.run({ variables:{ "todoId": item.id} });`. 
> 
> If you enter a To Do item in the form text field, such as "Clean Car" and click the "Add" button, a new card is created with the heading "Clean Car". As you add new items, they are added to the *Looper* array.
> 
> If you click the delete button on a card, the card is deleted. As you delete items, they are deleted from the *Looper* array.
