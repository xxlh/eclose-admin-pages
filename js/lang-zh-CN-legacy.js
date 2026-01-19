(self["webpackChunkvue_antd_pro"] = self["webpackChunkvue_antd_pro"] || []).push([["lang-zh-CN"],{

/***/ "./node_modules/ant-design-vue/es/calendar/locale/zh_CN.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ant-design-vue/es/calendar/locale/zh_CN.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/zh_CN */ "./node_modules/ant-design-vue/es/date-picker/locale/zh_CN.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/ant-design-vue/es/date-picker/locale/zh_CN.js":
/*!********************************************************************!*\
  !*** ./node_modules/ant-design-vue/es/date-picker/locale/zh_CN.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var _vc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vc-calendar/src/locale/zh_CN */ "./node_modules/ant-design-vue/es/vc-calendar/src/locale/zh_CN.js");
/* harmony import */ var _time_picker_locale_zh_CN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/zh_CN */ "./node_modules/ant-design-vue/es/time-picker/locale/zh_CN.js");




var locale = {
  lang: (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    placeholder: '请选择日期',
    rangePlaceholder: ['开始日期', '结束日期']
  }, _vc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_1__["default"]),
  timePickerLocale: (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _time_picker_locale_zh_CN__WEBPACK_IMPORTED_MODULE_2__["default"])
};

// should add whitespace between char in Button
locale.lang.ok = '确 定';

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/ant-design-vue/es/locale-provider/zh_CN.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ant-design-vue/es/locale-provider/zh_CN.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/zh_CN */ "./node_modules/ant-design-vue/es/locale/zh_CN.js");


/* harmony default export */ __webpack_exports__["default"] = (_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/ant-design-vue/es/locale/zh_CN.js":
/*!********************************************************!*\
  !*** ./node_modules/ant-design-vue/es/locale/zh_CN.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vc_pagination_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vc-pagination/locale/zh_CN */ "./node_modules/ant-design-vue/es/vc-pagination/locale/zh_CN.js");
/* harmony import */ var _date_picker_locale_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/zh_CN */ "./node_modules/ant-design-vue/es/date-picker/locale/zh_CN.js");
/* harmony import */ var _time_picker_locale_zh_CN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/zh_CN */ "./node_modules/ant-design-vue/es/time-picker/locale/zh_CN.js");
/* harmony import */ var _calendar_locale_zh_CN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/zh_CN */ "./node_modules/ant-design-vue/es/calendar/locale/zh_CN.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  locale: 'zh-cn',
  Pagination: _vc_pagination_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__["default"],
  DatePicker: _date_picker_locale_zh_CN__WEBPACK_IMPORTED_MODULE_1__["default"],
  TimePicker: _time_picker_locale_zh_CN__WEBPACK_IMPORTED_MODULE_2__["default"],
  Calendar: _calendar_locale_zh_CN__WEBPACK_IMPORTED_MODULE_3__["default"],
  // locales for all comoponents
  global: {
    placeholder: '请选择'
  },
  Table: {
    filterTitle: '筛选',
    filterConfirm: '确定',
    filterReset: '重置',
    selectAll: '全选当页',
    selectInvert: '反选当页',
    sortTitle: '排序',
    expand: '展开行',
    collapse: '关闭行'
  },
  Modal: {
    okText: '确定',
    cancelText: '取消',
    justOkText: '知道了'
  },
  Popconfirm: {
    cancelText: '取消',
    okText: '确定'
  },
  Transfer: {
    searchPlaceholder: '请输入搜索内容',
    itemUnit: '项',
    itemsUnit: '项'
  },
  Upload: {
    uploading: '文件上传中',
    removeFile: '删除文件',
    uploadError: '上传错误',
    previewFile: '预览文件',
    downloadFile: '下载文件'
  },
  Empty: {
    description: '暂无数据'
  },
  Icon: {
    icon: '图标'
  },
  Text: {
    edit: '编辑',
    copy: '复制',
    copied: '复制成功',
    expand: '展开'
  },
  PageHeader: {
    back: '返回'
  }
});

/***/ }),

/***/ "./node_modules/ant-design-vue/es/time-picker/locale/zh_CN.js":
/*!********************************************************************!*\
  !*** ./node_modules/ant-design-vue/es/time-picker/locale/zh_CN.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  placeholder: '请选择时间'
};

/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/ant-design-vue/es/vc-calendar/src/locale/zh_CN.js":
/*!************************************************************************!*\
  !*** ./node_modules/ant-design-vue/es/vc-calendar/src/locale/zh_CN.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  today: '今天',
  now: '此刻',
  backToToday: '返回今天',
  ok: '确定',
  timeSelect: '选择时间',
  dateSelect: '选择日期',
  weekSelect: '选择周',
  clear: '清除',
  month: '月',
  year: '年',
  previousMonth: '上个月 (翻页上键)',
  nextMonth: '下个月 (翻页下键)',
  monthSelect: '选择月份',
  yearSelect: '选择年份',
  decadeSelect: '选择年代',
  yearFormat: 'YYYY年',
  dayFormat: 'D日',
  dateFormat: 'YYYY年M月D日',
  dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',
  previousYear: '上一年 (Control键加左方向键)',
  nextYear: '下一年 (Control键加右方向键)',
  previousDecade: '上一年代',
  nextDecade: '下一年代',
  previousCentury: '上一世纪',
  nextCentury: '下一世纪'
});

/***/ }),

/***/ "./src/locales/lang/zh-CN.js":
/*!***********************************!*\
  !*** ./src/locales/lang/zh-CN.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_esone_qiu_Sites_caitou_admin_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var ant_design_vue_es_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ant-design-vue/es/locale-provider/zh_CN */ "./node_modules/ant-design-vue/es/locale-provider/zh_CN.js");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/moment/locale/zh-cn.js");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1__);



var components = {
  antLocale: ant_design_vue_es_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_2__["default"],
  momentName: 'zh-cn',
  momentLocale: (moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1___default())
};
var locale = {
  'message': '-',
  'menu.home': '主页',
  'menu.dashboard': '仪表盘',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台'
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_esone_qiu_Sites_caitou_admin_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_Users_esone_qiu_Sites_caitou_admin_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, components), locale));

/***/ }),

/***/ "./node_modules/moment/locale/zh-cn.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/zh-cn.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
//! author : uu109 : https://github.com/uu109

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   0
}(this, (function (moment) { 'use strict';

    //! moment.js locale configuration

    var zhCn = moment.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
        ),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
            '_'
        ),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    return '[下]dddLT';
                } else {
                    return '[本]dddLT';
                }
            },
            lastDay: '[昨天]LT',
            lastWeek: function (now) {
                if (this.week() !== now.week()) {
                    return '[上]dddLT';
                } else {
                    return '[本]dddLT';
                }
            },
            sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                case 'M':
                    return number + '月';
                case 'w':
                case 'W':
                    return number + '周';
                default:
                    return number;
            }
        },
        relativeTime: {
            future: '%s后',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            w: '1 周',
            ww: '%d 周',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年',
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1, // Monday is the first day of the week.
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
    });

    return zhCn;

})));


/***/ })

}]);
//# sourceMappingURL=lang-zh-CN-legacy.js.map