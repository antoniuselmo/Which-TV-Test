var Page = require('./page');

var HomePage = Object.create(Page, {
  which_logo: {
      get: function () {
          return browser.element('.gn-logo__icon');
      }
  },

  which_global_header: {
      get: function () {
          return browser.element('[data-which-id="global-navigation"]');
      }
  },

  which_filter_options: {
        get: function () {
            return browser.element('[data-which-id="sticky-facets-container"]');
        }
  },
  which_tv_recommendations_main_button: {
      get: function () {
          return browser.element('[data-which-button="which_recommendations-filter"]');
      }
  },
  which_tv_screen_size_main_button: {
      get: function () {
          return browser.element('[data-which-button="screen_size-filter"]');
      }
  },


  which_tv_screentype_main_button: {
      get: function () {
          return browser.element('[data-which-button="screen_type-filter"]');
      }
  },

  which_tv_more_filters_main_button: {
      get: function () {
          return browser.element('[data-which-button="more_filters-filter"]');
      }
  },

  which_tv_screentype_filter_string: {
      get: function () {
          return ('[for="screen_type_z"] ._375WL ._2SC9L');
      }
  },

  which_tv_clear_filter_button: {
      get: function () {
          return browser.element('[data-test-element="clear-all"] button');
      }
  },
  which_tv_screentype_summary_done_button: {
      get: function () {
          return browser.element('[data-which-id="screen_type-filter-summary"] [data-which-id="done-button"]');
      }
  },

    which_product_listing_sorter: {
        get: function () {
            return browser.element('[data-which-id="sticky-facets-container"]');
        }
    },
    which_all_televisions_link: {
        get: function () {
            return browser.element('a[href="/reviews/televisions"]');
        }
    },
    which_all_best_buys_link: {
        get: function () {
            return browser.element('a[href="/reviews/televisions/article/recommendations/which-best-buy-televisions"]');
        }
    },

    which_all_dont_buys_link: {
        get: function () {
            return browser.element('a[href="/reviews/televisions/article/recommendations/which-dont-buy-televisions""]');
        }
    },

    which_all_advice_guides_link: {
        get: function () {
            return browser.element('a[href="/reviews/televisions/article/guides"]');
        }
    },

    which_tv_main_description: {
        get: function () {
            return browser.element('[data-test-element="description"]');
        }
    },

});

module.exports = HomePage;
