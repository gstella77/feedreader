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

    /* "RSS Feeds" test suite */
    describe('RSS Feeds', function() {

        /* Tests to make sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed in the allFeeds object and ensures
         * it has a URL defined and that the URL is not empty.
         * Per reviewer requirement, propper access to the name and url strings lenght
         * has been implemented.
         */

         /* Per reviewer requirement, returned the lenght of the string property
          * of url and name objects */
        it('have a defined url', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Loops through each feed in the allFeeds object and ensures
         * it has a name defined and that the name is not empty.
         */

        it('have a defined name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /* "The menu" Test suite */
    describe ('The menu', function() {

        /* Ensures the menu element is hidden by default using the
         * the hasClass property.
         */

        it ('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Ensures the menu changes visibility when the menu icon
         * is clicked. This test has two expectations and it uses the
         * click() event function to trigger the toggle functionality.
         */

        it ('should toggle visibility', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* "Initial Entries" suite */
    describe('Initial Entries', function () {

        /* Ensures when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test uses Jasmine's beforeEach and
         * asynchronous done() function to signal the request is complete before we can test it.
         * https://discussions.udacity.com/t/step-13-help-initial-entries/14839
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* it() function gets executed after the asynch data has been loaded.
         * Jasmine docs suggest to use done() callback however it is no needed
         * Since there are not asynchronous events.
         * https://discussions.udacity.com/t/when-does-it-require-done/38785/2
         */
        it('should have added entries', function() {
            var oneEntry = $('.feed .entry').length;
            expect(oneEntry).toBeGreaterThan(0);
        });

    });

    /* "New Feed Selection" test suite */
    describe('New Feed Selection', function () {

        /* Ensures when a new feed is loaded by the loadFeed function that the
         * content actually changes. loadFeed() is asynchronous.
         */
        var oldFeed;

        /* Asynchronous function to load first feed
         * Per reviewer requirement, placed oldFeed assignment inside loadFeed()
         * call function to ensure assignment happens before calling done().
         */
        beforeEach(function(done) {
            loadFeed(1, function() {
                oldFeed = $('.feed').html();
                done();
            });
        });

        /* Load second feed asynchronously
         * Loaded 0-index so it is the default after comparison */
        it('should change the content', function(done) {
            loadFeed (0, function() {
                expect($('.feed').html()).not.toEqual(oldFeed);
                done();
            });
        });
    });
}());