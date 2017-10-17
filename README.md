## Feedreader App: Testing with Jasmine Framework
This project includes the feedreader.js which it uses the **_Jasmine_** library to test the app functionality. Below is a description on how the tests were implemented for this project.

###Test Suites
#### RSS Feeds
Before initializing all the tests, the ```forEach``` loop was used to test if the properties of all **AllFeeds** array were defined and not empty using the ```not.toBe()``` matcher.

#### The Menu
I tested the default visibility and its toggle behavior using the jQuery ```.hasClass()``` method which it returns _true_ if the CSS class ```menu-hidden``` has been applied. The ```toBe``` matcher was used to test the different states of the menu using the ```click()``` event function.

#### Initial Entries
This suite tests if the ```loadFeed()``` function has completed the request before we can test it. Per **_Jasmine_** documentation, the ```done``` parameter was used as a callback to signal the asynchronous load has been completed. To test if more than one entry has been loaded in the ```expect()``` function, I used the ```$('.feed .entry').length``` method and the ```toBeGreaterThan(0)``` matcher to query the Dom.

#### New Feed Selection
This suite tests if the current feed  is different from the previous selected one. For this test I implemented two Asynchronous functions. After the first async ```beforeEach()``` function completes the load, it will signal the ```it()``` function to start the second async request. This operation enables to compare and test between the two feeds with the ```.not.toEqual``` matcher.

### How to Run the Web Site on your Local Computer
1. Clone the folder by copying the link on the top right corner (green button) and paste it in your terminal using Git. Instructions about how to use Git and how to clone a repository are found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).
2. Navigate to the folder location using ```$ cd /path/to/your-project-folder```
3. To test the functionality using a local server run **python server** by typing ```python -m SimpleHTTPServer 8080```

### Project Components and Vendor Libraries
* jasmine-2.1.2

