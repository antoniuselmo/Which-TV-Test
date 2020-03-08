const chai = require('chai');
const expect = chai.expect;
var HomePage = require('../pages/home.page');

module.exports = {
  /*
   * method checkLinks ( )
   * checks all links on YLD page
   *
   **/
    openScreenTypeFilterPanel : function () {
      HomePage.which_filter_options.waitForVisible()
      HomePage.which_tv_screentype_main_button.waitForVisible()
      HomePage.which_tv_screentype_main_button.click()
      browser.pause(1000)
    },
    /*
     * method checkLinks ( )
     * checks all links on YLD page
     *
     **/
      closeScreenTypeFilterPanel : function () {
        HomePage.which_tv_clear_filter_button.waitForVisible()
        HomePage.which_tv_clear_filter_button.waitForEnabled()
        HomePage.which_tv_screentype_summary_done_button.waitForEnabled()
        HomePage.which_tv_screentype_summary_done_button.click()
        HomePage.which_tv_clear_filter_button.waitForEnabled()
        browser.pause(2000)
      }

}
