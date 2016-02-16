/*jshint browser: true */
/*global angular */

(function () {
    'use strict';

    var bbDateRangeTypes = {
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
    },
    bbDateRangeOptions = [];

    function setDateRangePickerOptions(bbResources, bbDateRangeTypes, bbDateRangeOptions) {

        function addOption(idPropName) {
            var idPropNameLower = idPropName.toLowerCase();

            bbDateRangeOptions.push({
                id: bbDateRangeTypes[idPropName],
                getCaption: function () {
                    return bbResources['date_range_picker_' + idPropNameLower];
                },
                getDescription: function () {
                    return bbResources['date_range_picker_filter_description_' + idPropNameLower];
                }
            });
        }

        addOption('AT_ANY_TIME');
        addOption('YESTERDAY');
        addOption('TODAY');
        addOption('TOMORROW');
        addOption('LAST_WEEK');
        addOption('THIS_WEEK');
        addOption('NEXT_WEEK');
        addOption('LAST_MONTH');
        addOption('THIS_MONTH');
        addOption('NEXT_MONTH');
        addOption('LAST_QUARTER');
        addOption('THIS_QUARTER');
        addOption('NEXT_QUARTER');
        addOption('LAST_CALENDAR_YEAR');
        addOption('THIS_CALENDAR_YEAR');
        addOption('NEXT_CALENDAR_YEAR');
        addOption('LAST_FISCAL_YEAR');
        addOption('NEXT_FISCAL_YEAR');
        addOption('SPECIFIC_RANGE');
    }

    setDateRangePickerOptions.$inject = ['bbResources', 'bbDateRangeTypes', 'bbDateRangeOptions'];

    function bbDateRangePickerFactory(bbResources, bbDateRangeTypes, bbDateRangeOptions, $filter) {
        var defaultDateRangeOptions,
            specificDateRangeOptions,
            pastDateRangeOptions;

        function getAllDateRangeOptions() {
            return angular.copy(bbDateRangeOptions);
        }

        function getDefaultDateRangeOptions() {
            return [
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
        }

        function getSpecificDateRangeOptions() {
            return defaultDateRangeOptions.concat([bbDateRangeTypes.SPECIFIC_RANGE]);
        }

        function getPastDateRangeOptions() {
            return [
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
        }

        function getOption(rangeType) {
            var option = $filter('filter')(bbDateRangeTypes, {id: rangeType}, true);
            if (option.length > 0) {
                return option[0];
            } else {
                return {};
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

        specificDateRangeOptions = defaultDateRangeOptions.concat([bbDateRangeTypes.SPECIFIC_RANGE]);

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
            var dateType;

            if (angular.isNumber(dateRangePickerValue)) {
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

            dateType = dateRangePickerValue.id || dateRangePickerValue.dateRangeType;

            return getOption(dateType);

        }

        function getDateRangeFilterDescription(dateRangePickerValue) {
            var dateType;
            // If the value is undefiend, then map it to a null object.
            dateRangePickerValue = dateRangePickerValue || {};

            if (!angular.isDefined(dateRangePickerValue.dateRangeType)) {
                // If the enum value is undefined, then it represents any time.
                dateRangePickerValue.dateRangeType = bbDateRangeTypes.AT_ANY_TIME;
            }
            dateType = dateRangePickerValue.id || dateRangePickerValue.dateRangeType;

            return getOption(dateType);
        }

        return {
            getAllDateRangeOptions: getAllDateRangeOptions,
            getDefaultDateRangeOptions: getDefaultDateRangeOptions,
            getSpecificDateRangeOptions: getSpecificDateRangeOptions,
            getPastDateRangeOptions: getPastDateRangeOptions,
            getOption: getOption,

            dateRangeTypes: bbDateRangeTypes,

            /*  The following three properties are deprecated because we should not
                be passing these references around */
            defaultDateRangeOptions: defaultDateRangeOptions,
            pastDateRangeOptions: pastDateRangeOptions,
            specificDateRangeOptions: specificDateRangeOptions,

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
        .constant('bbDateRangeTypes', bbDateRangeTypes)
        .constant('bbDateRangeOptions', bbDateRangeOptions)
        .config(setDateRangePickerOptions)
        .factory('bbDateRangePicker', bbDateRangePickerFactory)
        .directive('bbDateRangePicker', bbDateRangePickerDirective);
}());
