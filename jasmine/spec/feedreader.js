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
            allFeeds.forEach(function(feed) {
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
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe ('The menu', function() {
        it ('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // refactored test into one expectation since we are
        // testing an element with a toggleClass method
        describe ('when clicked', function() {
            it ('should toggle visibility', function() {
                $('a.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);

                $('a.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('initial entry loaded', function () {

        // use beforeEach to make sure loadFeed async function runs before Jasmine test and signals
        // when it is done. LoadFeed takes a callback (done/cb) which it is called
        // after all entries have loaded.
        // https://discussions.udacity.com/t/step-13-help-initial-entries/14839
        beforeEach(function(done) {
            //setTimeout(function() {
            loadFeed(0, done);
            //}, 5000);
        });

        it('should have added entries', function(done) {
            var oneEntry = $('.feed').children().length;
            expect(oneEntry).toBeGreaterThan(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());

// console tests
// $('.feed').children()
// $('.feed').children().length
// test open menu
// $('a.menu-icon-link').click()
// test menu visibility (open - true)  and (closed- false)
// $('document.body').hasClass('.menu-hidden')
