const chai = require('chai');
const expect = chai.expect;
var HomePage = require('../pages/home.page');

module.exports = {
  /*
   * method openScreenTypeFilterPanel ( )
   * open Screen Type filter panel and waits for animation
   *
   **/
    openScreenTypeFilterPanel : function () {
      HomePage.which_filter_options.waitForVisible()
      HomePage.which_tv_screentype_main_button.waitForVisible()
      HomePage.which_tv_screentype_main_button.click()
      browser.pause(1000)
    },
    /*
     * method closeScreenTypeFilterPanel ( )
     * closes Screen Type filter panel and waits for animation
     *
     **/
      closeScreenTypeFilterPanel : function () {
        HomePage.which_tv_clear_filter_button.waitForVisible()
        HomePage.which_tv_clear_filter_button.waitForEnabled()
        HomePage.which_tv_screentype_summary_done_button.waitForEnabled()
        HomePage.which_tv_screentype_summary_done_button.click()
        HomePage.which_tv_clear_filter_button.waitForEnabled()
        browser.pause(1000)
      }

}
