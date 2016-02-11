/*global angular */

(function () {
    'use strict';

    function DateRangePickerDemoController($scope, bbDateRangePicker) {
        var self = this;

        self.options = {};

        self.bbDateRangePicker = bbDateRangePicker;
        self.dateRangePickerValue = {
            dateRangeType: bbDateRangePicker.dateRangeTypes.TOMORROW
        };

        self.dateRangePickerOptions = {};

        self.selectToday = function () {
            self.dateRangePickerValue = {
                dateRangeType: bbDateRangePicker.dateRangeTypes.TODAY
            };
        };

        self.reset = function () {
            self.dateRangePickerValue = {};
        };

        $scope.$watch(function () {
            return self.options.pastOnly;
        }, function (newVal) {
            if (newVal === true) {
                self.dateRangePickerOptions.availableDateRangeTypes = bbDateRangePicker.pastDateRangeOptions;
            } else {
                self.dateRangePickerOptions.availableDateRangeTypes = bbDateRangePicker.defaultDateRangeOptions;
            }
        });
    }

    DateRangePickerDemoController.$inject = ['$scope', 'bbDateRangePicker'];

    function SpecificDateRangePickerDemoController(bbDateRangePicker) {
        var self = this;

        self.options = {};

        self.bbDateRangePicker = bbDateRangePicker;
        self.dateRangePickerValue = {
            dateRangeType: bbDateRangePicker.dateRangeTypes.SPECIFIC_RANGE
        };

        self.dateRangePickerOptions = {};

        self.dateRangePickerOptions.availableDateRangeTypes = bbDateRangePicker.specificDateRangeOptions;

    }

    SpecificDateRangePickerDemoController.$inject = ['bbDateRangePicker'];

    function CustomDateRangePickerDemoController(bbDateRangePicker) {
        var self = this,
            customDateRangeOptions,
            oneOffType = 'bb_one_off_type';

        self.options = {};

        self.bbDateRangePicker = bbDateRangePicker;
        self.dateRangePickerValue = {
            dateRangeType: bbDateRangePicker.dateRangeTypes.CUSTOM_TYPE
        };

        customDateRangeOptions = bbDateRangePicker.allDateRangeOptions;
        customDateRangeOptions.push(oneOffType);

        self.dateRangePickerOptions = {
            availableDateRangeTypes: customDateRangeOptions,
            getCaptionFromType: function (type) {
                if (type === oneOffType) {
                    return 'Custom one off range';
                }
                return '';
            }
        };
    }

    /*
        In the config, you can add global custom date range types and entries to
        bbDateRangePickerMap that associates those types to captions and filter
        descriptions.
    */
    function CustomDateRangeConfig(bbDateRangeTypes, bbDateRangePickerMap) {
        angular.extend(
            bbDateRangeTypes,
            {
                CUSTOM_TYPE: 'bb_custom_type_0'
            });

        bbDateRangePickerMap[bbDateRangeTypes.CUSTOM_TYPE] = {
            caption: 'Custom range',
            description: '{0} for custom range'
        };
    }
    CustomDateRangeConfig.$inject = ['bbDateRangeTypes', 'bbDateRangePickerMap'];

    angular.module('stache')
        .controller('DateRangePickerDemoController', DateRangePickerDemoController)
        .controller('SpecificDateRangePickerDemoController', SpecificDateRangePickerDemoController)
        .controller('CustomDateRangePickerDemoController', CustomDateRangePickerDemoController)
        .config(CustomDateRangeConfig);
}());
