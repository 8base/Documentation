# Change Log
<p><br /></p>

## Oct 24th, 2023

** Fixes :fire: **

- App Builder | Components - The problems that arose when working with loopers and dialogs were resolved; No more weird behaviors when working with these two components simultaneously on the canvas. 
- App Builder | Draft Engine - We have fixed issues causing events to be lost in DE. 
- App Builder | Styles - We've fixed the issue causing the custom Styles not to work correctly on Dialogs. 
- App Builder | Selector components - Authowidth & Full Width props are working as expected. 
- App Builder | Events - Navigate Action was fixed. 
- App Builder | Templates - Coded (In-App) Auth and Hosted Login have been improved. 
- App Builder | Events - We’ve updated and fixed the OnChange events in some components. 
- App Builder | App Engine - Now, the preview mode will provide feedback to the user when an error happens. 
- App Builder | Input components - Users can now type into input elements without having a state in the value prop. 
- App Builder | Dashboard - We’ve fixed the icon for the HTML component. 
- Project Object | Invitations - UK Project invitations are fixed now. 
- BackEnd | Requests - We’ve improved the performance of Mutations and queries using filters 

**Technical Tasks  :nerd_face: **

- Allow access in frontend to users with access in the management system Project. 
- increment memory in lambdas 

<p><br /></p>

## Oct 20th, 2023

**Fixes :fire:**
- Project Object | Frontend Creation - We’ve fixed the issue causing errors when adding a FrontEnd to UK Projects.
- App Builder | Libraries - Now, Lodash is no longer hardcoded into dependencies. 
- App Builder | Events - Crashes when using the “Update State” Action are now solved. 
- App Builder | Components - 8base File pickers are working with UK backends as expected. 

**Technical Tasks :nerd_face:**
- Draft Engine | A log to track all REDIS events was created; this will be used on the support track. 

<p><br /></p>

## Oct 14th, 2023

**Improve :rocket:**
- App Builder | New component - HTML: Now, users will be able to add and render HTML blocks in their 8base applications. 

**Fixes :fire:**
- App Builder | Loopers - Now users can use nested loopers without “undefined Item” errors. 
- App Builder | We’ve added the missing prop to the Form Rich Text Editor so it can now be accessed through data in a Form block. 
- App Builder | Events - We fixed the issue causing events not to work on Icons when using an image in them. 
- App Builder | Local Dialogs - Now, states created within the Local Dialogs are removed when deleting the component.  
- App Builder | Requests - Now Rest params are working as expected on paths with multiple levels. 

<p><br /></p>

## Oct 10th, 2023

**Improve :rocket:**
- App Builder | App Engine - The new Preview is here!  :tada: - A more robust and powerful version based on the code engine has arrived. 
- App Builder | Components | Multi-select - Choose the best way to display the multi-select component with support for checkbox, Chip, and option. This gives users greater flexibility to create the UI that works best for their needs. 

** Fixes :fire: **
- App Builder | Editor - Now, the changes made to the media queries are kept. 
- App Builder | Requests - The issue that caused changes to the mutation body not to be saved has been solved. 
- App Builder | Components - We've fixed the margin error on input components.
- App Builder | Editor | Copy/Paste - We have fixed the issue that caused conflicts in DSL when copying a component. 
- App Builder | Styles - Now, deleting custom styles does not affect the other style attributes of the component. 

**Technical Tasks :nerd_face:**
- Project Object | The loading of the dashboard and workspaces has been optimized. 