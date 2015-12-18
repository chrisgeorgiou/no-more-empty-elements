/*globals jQuery*/
/**
 * jquery-noMoreEmptyElements
 *
 * @copyright Copyright (c) 2015, Christos Georgiou
 * @author Christos Georgiou <christos.gewrgiou@gmail.com>
 */

/**
 * @param {Object} [options]
 * @return jQuery
 */
jQuery.fn.noMoreEmptyElements = function (options) {
    // Default settings
    var defaultOptions = {
        excludeElements: ["IMG"], // it's not empty no matter what you say
        sameAsEmpty: ["&nbsp;"], // treat it like your french girls (as empty)
        isEmpty: function (element) { //Custom isEmpty method decided by the two default variables
            // Search if the element doesn't need to be excluded
            if (jQuery.inArray(element.get(0).tagName, settings.excludeElements) > -1)
                return false;

            // Not in exclude list
            if (jQuery.trim(element.html()).length > 0) {
                // Check the nbsp or constant array for strings that we dont want to be there
                // same as Empty treat it like empty
                if (jQuery.inArray(jQuery.trim(element.html()), settings.sameAsEmpty) > -1) {
                    return true;
                }

                return false;
                }

            return true;
            }

        };

    // Override defaults by merge
    var settings = jQuery.extend(true, {}, defaultOptions, options);

    /**
     * @param element
     * @returns boolean
     *
     * Search Recursively for empty elements and remove them
     * The isEmpty is decided by the default functionality
     * returns boolean
     */
    function removeEmptyBranches(element){
        // take the parent of the element
        var parent = element.parent();
        // check the element if it is empty
        if(settings.isEmpty(element)){
            // remove it and continue with the parent
            element.remove();
            // recursive loop
            return removeEmptyBranches(parent);
        }
        // element is not empty don't remove anything just return
        return false;
    }

    /*
     * @param element {jQuery Object}
     * @returns {boolean}
     *
     */
    function findEmptyElements(element) {
        if(settings.isEmpty(element)){
            // remove the branch
            removeEmptyBranches(element);
            // return for that branch no need to go further
            // There is no further
            // There is no further
            return false;
        }else {
            // Return the children if not empty
            element.children().each(function (i,v){
                findEmptyElements(jQuery(this));
            });
        }

    }

    // Constructor
    /**
     * Init the functionality
     * Check for empty elements
     */
    this.each(function (i,v) {
        findEmptyElements(jQuery(this));
    });

    return this;
};
