/*jshint browser: true */
/*global angular */

(function () {
    'use strict';

    var bbDateRangePickerMap = {

    }, bbDateRangeTypes = {
        AT_ANY_TIME: 0,
        NEXT_WEEK: 1,
        THIS_MONTH: 2,
        NEXT_MONTH: 3,
        THIS_QUARTER: 4,
        NEXT_QUARTER: 5,
        THIS_FISCAL_YEAR: 6,
        NEXT_FISCAL_YEAR: 7,
        THIS_CALENDAR_YEAR: 8,
        NEXT_CALENDAR_YEAR: 9,
        LAST_WEEK: 10,
        LAST_MONTH: 11,
        LAST_QUARTER: 12,
        LAST_FISCAL_YEAR: 13,
        LAST_CALENDAR_YEAR: 14,
        TODAY: 15,
        YESTERDAY: 16,
        TOMORROW: 17,
        THIS_WEEK: 18,
        SPECIFIC_RANGE: 19
    };

    function bbDateRangePickerMapConfig(bbResources, bbDateRangeTypes, bbDateRangePickerMap) {
        bbDateRangePickerMap[bbDateRangeTypes.AT_ANY_TIME] = {
            caption: bbResources.date_range_picker_at_any_time,
            description: bbResources.date_range_picker_filter_description_at_any_time
        };
        bbDateRangePickerMap[bbDateRangeTypes.YESTERDAY] = {
            caption: bbResources.date_range_picker_yesterday,
            description: bbResources.date_range_picker_filter_description_yesterday
        };
        bbDateRangePickerMap[bbDateRangeTypes.TODAY] = {
            caption: bbResources.date_range_picker_today,
            description: bbResources.date_range_picker_filter_description_today
        };
        bbDateRangePickerMap[bbDateRangeTypes.TOMORROW] = {
            caption: bbResources.date_range_picker_tomorrow,
            description: bbResources.date_range_picker_filter_description_tomorrow
        };
        bbDateRangePickerMap[bbDateRangeTypes.LAST_WEEK] = {
            caption: bbResources.date_range_picker_last_week,
            description: bbResources.date_range_picker_filter_description_last_week
        };
        bbDateRangePickerMap[bbDateRangeTypes.THIS_WEEK] = {
            caption: bbResources.date_range_picker_this_week,
            description: bbResources.date_range_picker_filter_description_this_week
        };
        bbDateRangePickerMap[bbDateRangeTypes.NEXT_WEEK] = {
            caption: bbResources.date_range_picker_next_week,
            description: bbResources.date_range_picker_filter_description_next_week
        };
        bbDateRangePickerMap[bbDateRangeTypes.LAST_QUARTER] = {
            caption: bbResources.date_range_picker_last_quarter,
            description: bbResources.date_range_picker_filter_description_last_quarter
        };
        bbDateRangePickerMap[bbDateRangeTypes.THIS_QUARTER] = {
            caption: bbResources.date_range_picker_this_quarter,
            description: bbResources.date_range_picker_filter_description_this_quarter
        };
        bbDateRangePickerMap[bbDateRangeTypes.NEXT_QUARTER] = {
            caption: bbResources.date_range_picker_next_quarter,
            description: bbResources.date_range_picker_filter_description_next_quarter
        };
        bbDateRangePickerMap[bbDateRangeTypes.LAST_CALENDAR_YEAR] = {
            caption: bbResources.date_range_picker_last_calendar_year,
            description: bbResources.date_range_picker_filter_description_last_calendar_year
        };
        bbDateRangePickerMap[bbDateRangeTypes.THIS_CALENDAR_YEAR] = {
            caption: bbResources.date_range_picker_this_calendar_year,
            description: bbResources.date_range_picker_filter_description_this_calendar_year
        };
        bbDateRangePickerMap[bbDateRangeTypes.NEXT_CALENDAR_YEAR] = {
            caption: bbResources.date_range_picker_next_calendar_year,
            description: bbResources.date_range_picker_filter_description_next_calendar_year
        };
        bbDateRangePickerMap[bbDateRangeTypes.LAST_FISCAL_YEAR] = {
            caption: bbResources.date_range_picker_last_fiscal_year,
            description: bbResources.date_range_picker_filter_description_last_fiscal_year
        };
        bbDateRangePickerMap[bbDateRangeTypes.THIS_FISCAL_YEAR] = {
            caption: bbResources.date_range_picker_this_fiscal_year,
            description: bbResources.date_range_picker_filter_description_this_fiscal_year
        };
        bbDateRangePickerMap[bbDateRangeTypes.NEXT_FISCAL_YEAR] = {
            caption: bbResources.date_range_picker_next_fiscal_year,
            description: bbResources.date_range_picker_filter_description_next_fiscal_year
        };
        bbDateRangePickerMap[bbDateRangeTypes.THIS_MONTH] = {
            caption: bbResources.date_range_picker_this_month,
            description: bbResources.date_range_picker_filter_description_this_month
        };
        bbDateRangePickerMap[bbDateRangeTypes.NEXT_MONTH] = {
            caption: bbResources.date_range_picker_next_month,
            description: bbResources.date_range_picker_filter_description_next_month
        };
        bbDateRangePickerMap[bbDateRangeTypes.LAST_MONTH] = {
            caption: bbResources.date_range_picker_last_month,
            description: bbResources.date_range_picker_filter_description_last_month
        };
        bbDateRangePickerMap[bbDateRangeTypes.SPECIFIC_RANGE] = {
            caption: bbResources.date_range_picker_specific_range,
            description: bbResources.date_range_picker_filter_description_specific_range
        };
    }
    bbDateRangePickerMapConfig.$inject = ['bbResources', 'bbDateRangeTypes', 'bbDateRangePickerMap'];

    function bbDateRangePickerFactory(bbResources, bbDateRangeTypes, bbDateRangePickerMap) {
        var defaultDateRangeOptions,
            specificDateRangeOptions,
            pastDateRangeOptions,
            allDateRangeOptions,
            type;

        allDateRangeOptions = [];

        for (type in bbDateRangeTypes) {
            if (bbDateRangeTypes.hasOwnProperty(type)) {
                if (allDateRangeOptions.length === 0) {
                    allDateRangeOptions[0] = type;
                } else {
                    allDateRangeOptions.push(type);
                }
            }
        }

        defaultDateRangeOptions = [
            bbDateRangeTypes.AT_ANY_TIME,
            bbDateRangeTypes.YESTERDAY,
            bbDateRangeTypes.TODAY,
            bbDateRangeTypes.TOMORROW,
            bbDateRangeTypes.LAST_WEEK,
            bbDateRangeTypes.THIS_WEEK,
            bbDateRangeTypes.NEXT_WEEK,
            bbDateRangeTypes.LAST_MONTH,
            bbDateRangeTypes.THIS_MONTH,
            bbDateRangeTypes.NEXT_MONTH,
            bbDateRangeTypes.LAST_QUARTER,
            bbDateRangeTypes.THIS_QUARTER,
            bbDateRangeTypes.NEXT_QUARTER,
            bbDateRangeTypes.LAST_CALENDAR_YEAR,
            bbDateRangeTypes.THIS_CALENDAR_YEAR,
            bbDateRangeTypes.NEXT_CALENDAR_YEAR,
            bbDateRangeTypes.LAST_FISCAL_YEAR,
            bbDateRangeTypes.THIS_FISCAL_YEAR,
            bbDateRangeTypes.NEXT_FISCAL_YEAR
        ];

        specificDateRangeOptions = defaultDateRangeOptions.push(bbDateRangeTypes.SPECIFIC_RANGE);

        pastDateRangeOptions = [
            bbDateRangeTypes.AT_ANY_TIME,
            bbDateRangeTypes.YESTERDAY,
            bbDateRangeTypes.TODAY,
            bbDateRangeTypes.LAST_WEEK,
            bbDateRangeTypes.THIS_WEEK,
            bbDateRangeTypes.LAST_MONTH,
            bbDateRangeTypes.THIS_MONTH,
            bbDateRangeTypes.LAST_QUARTER,
            bbDateRangeTypes.THIS_QUARTER,
            bbDateRangeTypes.LAST_CALENDAR_YEAR,
            bbDateRangeTypes.THIS_CALENDAR_YEAR,
            bbDateRangeTypes.LAST_FISCAL_YEAR,
            bbDateRangeTypes.THIS_FISCAL_YEAR
        ];

        function getDateRangeTypeCaption(dateRangePickerValue) {
            if (angular.isNumber(dateRangePickerValue) || angular.isString(dateRangePickerValue)) {
                // If the input is the enum value itself, then map it to the object structure we expect before proceeding.
                dateRangePickerValue = { dateRangeType: dateRangePickerValue };
            } else {
                // If the value is undefiend, then map it to a null object.
                dateRangePickerValue = dateRangePickerValue || {};
            }

            if (!angular.isDefined(dateRangePickerValue.dateRangeType)) {
                // If the enum value is undefined, then it represents any time.
                dateRangePickerValue.dateRangeType = bbDateRangeTypes.AT_ANY_TIME;
            }
            if (angular.isDefined(bbDateRangePickerMap[dateRangePickerValue.dateRangeType])) {
                return bbDateRangePickerMap[dateRangePickerValue.dateRangeType].caption;
            } else {
                return '';
            }

        }

        function getDateRangeFilterDescription(dateRangePickerValue) {
            // If the value is undefiend, then map it to a null object.
            dateRangePickerValue = dateRangePickerValue || {};

            if (!angular.isDefined(dateRangePickerValue.dateRangeType)) {
                // If the enum value is undefined, then it represents any time.
                dateRangePickerValue.dateRangeType = bbDateRangeTypes.AT_ANY_TIME;
            }
            if (angular.isDefined(bbDateRangePickerMap[dateRangePickerValue.dateRangeType])) {
                return bbDateRangePickerMap[dateRangePickerValue.dateRangeType].description;
            } else {
                return '';
            }
        }

        return {
            allDateRangeOptions: allDateRangeOptions,
            dateRangeTypes: bbDateRangeTypes,
            defaultDateRangeOptions: defaultDateRangeOptions,
            pastDateRangeOptions: pastDateRangeOptions,
            specifcDateRangeOptions: specificDateRangeOptions,
            getDateRangeTypeCaption: getDateRangeTypeCaption,
            getDateRangeFilterDescription: getDateRangeFilterDescription
        };
    }

    bbDateRangePickerFactory.$inject = ['bbResources', 'bbDateRangeTypes', 'bbDateRangePickerMap'];

    function bbDateRangePickerDirective(bbDateRangePicker, bbResources) {
        /// <summary>
        /// This directive provides a date range filter control
        /// </summary>

        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'sky/templates/daterangepicker/daterangepicker.html',
            scope: {},
            controllerAs: 'bbDateRangePickerCtrl',
            bindToController: {
                bbDateRangePickerValue: "=",
                bbDateRangePickerAutomationId: "=",
                bbDateRangePickerOptions: '=?',
                fromDate: '=?bbDateRangePickerFromDate',
                toDate: '=?bbDateRangePickerToDate',
                pickerLabel: '=?bbDateRangePickerLabel',
                isValid: '=?bbDateRangePickerValid'
            },
            controller: ['$scope', function ($scope) {
                var vm = this;

                vm.bbDateRangePicker = bbDateRangePicker;
                vm.resources = bbResources;

                vm.getDateRangeTypeCaption = function (rangeType) {
                    var caption;
                    caption = bbDateRangePicker.getDateRangeTypeCaption(rangeType);
                    if (!caption && angular.isFunction(vm.bbDateRangePickerOptions.getCaptionFromType)) {
                        caption = vm.bbDateRangePickerOptions.getCaptionFromType(rangeType);
                    }
                    return caption;
                };

                $scope.$watch(
                    function () {
                        return vm.dateRangeForm.$valid;
                    }, function (newVal) {
                        vm.isValid = newVal;
                    }
                );

                $scope.$watch(
                    function () {
                        return vm.fromDate;
                    }, function (newVal) {
                        /* This prevents minDate from having a reference
                           to fromDate and changing it */
                        vm.minDate = angular.copy(newVal);
                    }
                );

                $scope.$watch(
                    function () {
                        return vm.toDate;
                    }, function (newVal) {
                        /* This prevents maxDate from having a reference
                           to toDate and changing it */
                        vm.maxDate = angular.copy(newVal);
                    }
                );

                $scope.$watch(
                    function () {
                        return vm.bbDateRangePickerValue;
                    }, function (newVal) {
                    if (!newVal) {
                        vm.bbDateRangePickerValue = {
                            dateRangeType: bbDateRangePicker.dateRangeTypes.AT_ANY_TIME
                        };
                        return;
                    }
                    vm.specificRangeIsVisible = vm.bbDateRangePickerValue.dateRangeType === bbDateRangePicker.dateRangeTypes.SPECIFIC_RANGE;
                    newVal.dateRangeType = newVal.dateRangeType || bbDateRangePicker.dateRangeTypes.AT_ANY_TIME;
                }, true);
            }],
            link: function ($scope, el, attr, vm) {
                vm.noLabels = attr.bbDateRangePickerNoLabels;
                if (vm.noLabels) {
                    vm.toPlaceholder = bbResources.date_range_picker_to_date;
                    vm.fromPlaceholder = bbResources.date_range_picker_from_date;
                } else {
                    vm.toPlaceholder = '';
                    vm.fromPlaceholder = '';
                }
            }
        };
    }

    bbDateRangePickerDirective.$inject = ['bbDateRangePicker', 'bbResources'];

    angular.module('sky.daterangepicker', ['sky.resources', 'sky.datepicker'])
        .constant('bbDateRangePickerMap', bbDateRangePickerMap)
        .constant('bbDateRangeTypes', bbDateRangeTypes)
        .run(bbDateRangePickerMapConfig)
        .factory('bbDateRangePicker', bbDateRangePickerFactory)
        .directive('bbDateRangePicker', bbDateRangePickerDirective);
}());
