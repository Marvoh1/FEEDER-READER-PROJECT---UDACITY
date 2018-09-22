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
         describe('The menu', function() {
         	it('menu is hidden by default', function() {

         		expect(body.hasClass('menu-hidden')).toBe(true);
         	})

         /* This tests if the menu changes
          * visibility when the menu icon is clicked. 
          */
          
          it('visibility changes when clicked', function() {
          		//show menu
          	$('a.menu-icon-link').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBe(false);
            	//hide menu
            $('a.menu-icon-link').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBe(true);
         	
         	});

         })

        /* Initial Entries suite test to ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         describe('Initial Entries', function() {
         	beforeEach(function(done) {
         		loadFeed(0, done);
         	});

          it(' atleast .entry element within the .feed container. is present', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

     });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* The New Feed Selection suite tests to ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         let loadOne;
        
         describe('New Feed Selection', function() {

         	beforeEach(function(done) {
            	loadFeed(0, function() {
                	loadOne = $('.feed').innerHTML;
                	// load new feed
                	loadFeed(1, done);
            });
        });
  
         it('ensures content changes when a new feed is loaded', function() {
         	let loadTwo = $('.feed').innerHTML;
            expect($(loadOne)).not.toBe(loadTwo);
        });
    });   

}());
