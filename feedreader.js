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
        /* This tests is to make sure that
         * allFeeds variable have been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
          it('URL is defined and not empty', function(){
          	for(let feed of allFeeds) {
          		expect(feed.url).toBeDefined();
          		expect(feed.url).not.toBe("");
          	}
          })


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name are defined and not empty', function(){
         	for(let feed of allFeeds) {
         		expect(feed.name).toBeDefined();
         		expect(feed.name).not.toBe('');
         	}
         })
    });


  

        /* This test suite 'The menu' ensures the menu element is
         * hidden by default. 
         */
         const body = $('body');
         const watch = jasmine.createSpy('body', 'toggleClass');
         
         describe('The menu', function() {

         	it('menu is hidden by default', function() {

         		expect(body.hasClass('menu-hidden')).toBeTruthy();
         		expect(watch).not.toHaveBeenCalled();

         	})

         /* This tests if the menu changes
          * visibility when the menu icon is clicked. 
          */
          

          it('visibility changes when clicked', function() {
          	if (watch.calls.count() % 2 === 0) {
          		expect(body.hasClass('menu-hidden')).toBeTruthy();	
          	}
          	else {
          		expect(body.hasClass('menu-hidden')).toBeFalsy();
          	}
          		
          		
          })

         })


        /* Initial Entries suite test to ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         describe('Initial Entries', function() {
         	beforeEach(function(done) {
         		loadFeed(0);
         		done();
         	});

         it('contain atleast one entry element, feed container', function(done) {
         	
         	expect($('div.feed a.entry-link article.entry')).toBeDefined();
         	expect($('div.feed a.entry article.entry')).not.toBe("");
         	expect($('.feed')).not.toBe("");
         	done();
         })

     });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* The New Feed Selection suite tests to ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         let newLoadOne;
         let newLoadTwo;

         describe('New Feed Selection', function() {

         	beforeEach (function(done) {
         		loadFeed(0);
         		newLoadOne = $('h1.header-title')[0].innerText;
         		done();
         	});

         	afterEach (function(done) {
         		loadFeed(1);
         		newLoadTwo = $('h1.header-title')[0].innerText;
         		done();
         	});

         	it('ensures content changes when a new feed is loaded', function(){
         		expect('newLoadOne').not.toEqual('newLoadTwo');
         	});

         });      
}());
