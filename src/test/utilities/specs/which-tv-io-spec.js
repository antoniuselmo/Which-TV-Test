const chai = require('chai');
const expect = chai.expect;
var HomePage = require('../pages/home.page');
var utils = require('../utilities/common-utilities')
const screen_type_filters = [
  {
    filterText: 'oled',
    titleText: 'OLED',
  },
  {
    filterText: 'lcd',
    titleText: 'LCD',
  },
  {
    filterText: 'curved',
    titleText: 'Curved',
  },
  {
    filterText: 'qled',
    titleText: 'QLED',
  }
];


describe('Which Television Reviews Page Tests', function() {

    before( function() {
      browser.url('reviews/televisions/')
      //  wait for global logo and menu to be visible
      HomePage.which_global_header.waitForVisible()
      HomePage.which_logo.waitForEnabled()
      HomePage.which_logo.waitForVisible()
    });


    it ('should display the Which TV Reviews page correctly', function() {
          //assert presence of which which_logo
          //assert presence of which global nav
          // assert presence of filters
          // assert presence of banner
          // assert  presence of sorting
    });

    it ('should show description correctly for screen size on Which TV Review page', function() {
        //select each filter and assert page description corresponds
    });

     // test for individual screentype filters
    screen_type_filters.forEach(function (screen_type_filter) {
      let testName = screen_type_filter.filterText
      let expectedDes = ""
      testName += ` should show description correctly for screentype: ${screen_type_filter.filterText} `
      // update selector for screen type under test
      let screentypeSel = HomePage.which_tv_screentype_filter_string.replace('z', screen_type_filter.filterText)
      expectedDes += `${screen_type_filter.titleText} television reviews`
      it (testName, function () {
        utils.openScreenTypeFilterPanel()
        browser.element(screentypeSel).click()
        browser.element(screentypeSel).waitForVisible()
        //wait added for Loading animation
        browser.pause(1000)
        utils.closeScreenTypeFilterPanel()
        HomePage.which_tv_main_description.waitForVisible()
        expect(HomePage.which_tv_main_description.getText()).to.equal(expectedDes)
      })
   })

   afterEach(function() {
	 	   HomePage.which_tv_clear_filter_button.click()
       browser.pause(2000)
       HomePage.which_logo.waitForVisible()
	});



});
