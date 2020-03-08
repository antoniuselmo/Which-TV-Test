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
        // HomePage.which_filter_options.waitForVisible()
        // HomePage.which_tv_screentype_main_button.waitForVisible()
        // HomePage.which_tv_screentype_main_button.click()
        //browser.pause(1000)
        browser.element(screentypeSel).click()
        browser.element(screentypeSel).waitForVisible()
        browser.pause(1000)
        utils.closeScreenTypeFilterPanel()
        // HomePage.which_tv_clear_filter_button.waitForVisible()
        // HomePage.which_tv_clear_filter_button.waitForEnabled()
        // HomePage.which_tv_screentype_summary_done_button.waitForEnabled()
        // HomePage.which_tv_screentype_summary_done_button.click()
        // HomePage.which_tv_clear_filter_button.waitForEnabled()
        // browser.pause(2000)
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
