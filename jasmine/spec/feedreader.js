 /* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have a defined url', function() {
            allFeeds.forEach(function(feedurl) {
                // Test non-existent property to fail the expectation
                // expect(feed.hoho).toBeDefined();
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        // forEach loop to iterate through each item
        it('have a defined name', function() {
            allFeeds.forEach(function(feedname) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe ('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it ('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        // refactored test into one expectation since we are
        // testing an element with a toggleClass method in the app.js
        it ('should toggle visibility', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */


        /* Used beforeEach and pass done callback to tell Jasmine
         * the request is complete before we can test it.
         * https://discussions.udacity.com/t/step-13-help-initial-entries/14839
         */

        // Test 0 index for intitial entry
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* The it() function gets executed after the asynch data has been loaded.
         * Since there are not asynchronous events the done() callback is not needed.
         * https://discussions.udacity.com/t/when-does-it-require-done/38785/2
         */
        it('should have added entries', function() {
            var oneEntry = $('.feed .entry').length;
            expect(oneEntry).toBeGreaterThan(0);
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var oldFeed;

        // Asynchronous function to load first feed
        beforeEach(function(done) {
            loadFeed(0, done);
            oldFeed = $('.header-title').html();
        });

        // Load second feed asynchronously
        it('should change the content', function(done) {
            //var beforeLength = $('.feed').children()
            loadFeed (1, function() {
                expect($('.header-title').html()).not.toEqual(oldFeed);
                done();
            });
        });
    });
}());