(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/play/play"],{

/***/ 54:
/*!********************************************!*\
  !*** E:/my-music/components/play/play.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _play_vue_vue_type_template_id_f378b1f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.vue?vue&type=template&id=f378b1f8& */ 55);
/* harmony import */ var _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.vue?vue&type=script&lang=js& */ 57);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.vue?vue&type=style&index=0&lang=css& */ 62);
/* harmony import */ var _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _play_vue_vue_type_template_id_f378b1f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _play_vue_vue_type_template_id_f378b1f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _play_vue_vue_type_template_id_f378b1f8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/play/play.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/*!***************************************************************************!*\
  !*** E:/my-music/components/play/play.vue?vue&type=template&id=f378b1f8& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_f378b1f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play.vue?vue&type=template&id=f378b1f8& */ 56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_f378b1f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_f378b1f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_f378b1f8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_f378b1f8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 56:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/my-music/components/play/play.vue?vue&type=template&id=f378b1f8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  popupLayer: function() {
    return __webpack_require__.e(/*! import() | components/popup-layer/popup-layer */ "components/popup-layer/popup-layer").then(__webpack_require__.bind(null, /*! @/components/popup-layer/popup-layer.vue */ 78))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 57:
/*!*********************************************************************!*\
  !*** E:/my-music/components/play/play.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play.vue?vue&type=script&lang=js& */ 58);
/* harmony import */ var _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 58:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/my-music/components/play/play.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var popupLayer = function popupLayer() {__webpack_require__.e(/*! require.ensure | components/popup-layer/popup-layer */ "components/popup-layer/popup-layer").then((function () {return resolve(__webpack_require__(/*! ../popup-layer/popup-layer.vue */ 78));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =





































































{
  data: function data() {
    return {
      audioContext: uni.createInnerAudioContext(),
      currentImg: '',
      playType: 0,
      audioData: [],
      duration: '100',
      currentTime: '0',
      audioDuration: ['0', '00'],
      audioCurTime: ['0', '00'],
      longth: '',
      isPlay: false,
      timer: null,
      system: '',
      styleObj: {
        borderRadius: '50%',
        height: '80rpx',
        width: '80rpx',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50% )',
        transformOrigin: 'center' },

      rotateTimer: null,
      rotateDeg: 0,
      currentName: '',
      currentIndex: 0,
      currentSonger: '',
      playList: [],
      changeImg: {
        0: __webpack_require__(/*! ../../static/cycle.png */ 59),
        1: __webpack_require__(/*! ../../static/random.png */ 60),
        2: __webpack_require__(/*! ../../static/single.png */ 61) } };


  },
  components: {
    popupLayer: popupLayer },

  created: function created() {var _this = this;
    this.$EventBus.$on('getSong', function (obj) {
      if (_this.audioData.length === 0) {
        _this.audioData.push(obj);
        _this.audioContext.autoplay = false;
        _this.audioContext.src = _this.audioData[0].file;
        _this.longth = _this.audioData[0].longth;
        _this.system = uni.getSystemInfoSync().platform;
        _this.audioContext.onEnded(function (e) {
          clearInterval(_this.timer);
          clearInterval(_this.rotateTimer);
          _this.timer = null;
          _this.rotateTimer = null;
          _this.isPlay = false;
          _this.audioContext.seek(0);
          _this.audioCurTime = ['0', '00'];
          _this.currentTime = '0';
        });
        _this.currentName = _this.audioData[0].name;
        _this.currentSonger = _this.audioData[0].singer;
        _this.currentImg = _this.audioData[0].view_image;
        setTimeout(function () {
          var minutes = parseInt(_this.audioContext.duration / 60, 10);
          var seconds = parseInt(_this.audioContext.duration % 60);
          _this.longth = minutes + ":" + seconds;
        }, 500);
        _this.playMusic();
      } else {
        _this.audioData.push(obj);
      }
    });
    if (this.audioData.length > 0) {
      this.audioContext.autoplay = false;
      this.audioContext.src = this.audioData[0].file;
      this.longth = this.audioData[0].longth;
      this.system = uni.getSystemInfoSync().platform;
      this.audioContext.onEnded(function (e) {
        clearInterval(_this.timer);
        clearInterval(_this.rotateTimer);
        _this.timer = null;
        _this.rotateTimer = null;
        _this.isPlay = false;
        _this.audioContext.seek(0);
        _this.audioCurTime = ['0', '00'];
        _this.currentTime = '0';
      });
      this.currentName = this.audioData[0].name;
      this.currentSonger = this.audioData[0].singer;
      this.currentImg = this.audioData[0].view_image;
      setTimeout(function () {
        var minutes = parseInt(_this.audioContext.duration / 60, 10);
        var seconds = parseInt(_this.audioContext.duration % 60);
        _this.longth = minutes + ":" + seconds;
      }, 500);
    }
  },
  methods: {
    closeItem: function closeItem(id) {
      this.audioData = this.audioData.filter(function (v) {return v.id !== id;});
    },
    playItem: function playItem() {
      console.log("点击歌曲");
    },
    viewPlayList: function viewPlayList() {
      this.$refs.popupRef.show();
    },
    close: function close() {
      this.$refs.popupRef.close(); // 或者 boolShow = false
    },
    changeType: function changeType() {
      if (this.playType === 2) {
        this.playType = 0;
      } else {
        this.playType = this.playType + 1;
      }
    },
    changeAudio: function changeAudio(info) {
      this.currentTime = '0';
      this.isPlay = false;
      clearInterval(this.timer);
      this.timer = null;
      clearInterval(this.rotateTimer);
      this.rotateTimer = null;
      this.longth = info.longth;
      this.audioCurTime = ['0', '00'];
      this.duration = info.longth.slice(0, 2) * 60 + parseInt(info.longth.slice(3, 6));
      this.audioContext.seek(0);
      this.currentName = info.name;
    },
    next: function next() {var _this2 = this;
      // next song function, the main thought of next song function is that we should find out the index of song which is playing. 
      // first of all , clear the timer and stop rotating cover, and then find out the index 
      clearInterval(this.rotateTimer);
      this.rotateTimer = null;
      var src = this.audioContext.src;
      //tips: (complex array may cause performance issues)
      this.audioData.filter(function (currentValue, index, arr) {
        if (currentValue.file == src) {
          if (index + 1 >= arr.length) {
            _this2.currentIndex = 0;
            clearInterval(_this2.timer);
            var timer = null;
            _this2.isPlay = false;
            // once click next button , pause and reset playingtime 
            _this2.audioContext.seek(0);
            _this2.currentTime = '0';
            _this2.audioCurTime = ['0', '00'];
            _this2.audioContext.src = _this2.audioData[0].file;
            _this2.longth = _this2.audioData[0].longth;
            _this2.currentName = _this2.audioData[0].name;
            _this2.currentSonger = _this2.audioData[0].singer;
            _this2.currentImg = _this2.audioData[0].view_image;
          } else {
            _this2.currentIndex = index + 1;
            clearInterval(_this2.timer);
            var _timer = null;
            _this2.isPlay = false;
            _this2.audioContext.seek(0);
            _this2.currentTime = '0';
            _this2.audioCurTime = ['0', '00'];
            _this2.audioContext.src = _this2.audioData[index + 1].file;
            _this2.longth = _this2.audioData[index + 1].longth;
            _this2.currentName = _this2.audioData[index + 1].name;
            _this2.currentSonger = _this2.audioData[index + 1].singer;
            _this2.currentImg = _this2.audioData[index + 1].view_image;
          }
          _this2.playMusic();
        } else {}
      });
    },
    pre: function pre() {var _this3 = this;
      clearInterval(this.rotateTimer);
      this.rotateTimer = null;
      var src = this.audioContext.src;
      this.audioData.filter(function (currentValue, index, arr) {
        if (currentValue.file == src) {
          if (index == 0) {
            clearInterval(_this3.timer);
            var timer = null;
            _this3.isPlay = false;
            _this3.audioContext.seek(0);
            _this3.currentTime = '0';
            _this3.audioCurTime = ['0', '00'];
            _this3.audioContext.src = _this3.audioData[arr.length - 1].file;
            _this3.longth = _this3.audioData[arr.length - 1].longth;
            _this3.currentName = _this3.audioData[arr.length - 1].name;
            _this3.currentSonger = _this3.audioData[arr.length - 1].singer;
            _this3.currentImg = _this3.audioData[arr.length - 1].view_image;
          } else {
            clearInterval(_this3.timer);
            var _timer2 = null;
            _this3.isPlay = false;
            _this3.audioContext.seek(0);
            _this3.currentTime = '0';
            _this3.audioCurTime = ['0', '00'];
            _this3.audioContext.src = _this3.audioData[index - 1].file;
            _this3.longth = _this3.audioData[index - 1].longth;
            _this3.currentName = _this3.audioData[index - 1].name;
            _this3.currentSonger = _this3.audioData[index - 1].singer;
            _this3.currentImg = _this3.audioData[index - 1].view_image;
          }
          _this3.playMusic();
        } else {}
      });
    },
    playMusic: function playMusic() {var _this4 = this;
      // reset duration time by clicking midbutton only
      var duration = this.audioContext.duration;
      var currentTime = this.audioContext.currentTime;
      this.duration = duration;
      this.currentTime = currentTime;
      this.audioCurTime[0] = Math.floor(Math.floor(currentTime) / 60);
      this.audioCurTime[1] = Math.floor(currentTime) % 60;
      if (this.isPlay) {
        this.isPlay = false;
        clearInterval(this.timer);
        clearInterval(this.rotateTimer);
        this.timer = null;
        this.rotateTimer = null;
        this.audioContext.pause();
      } else {
        this.isPlay = true;
        this.rotateTimer = setInterval(function () {
          _this4.rotateDeg++;
          _this4.styleObj.transform = "translate(-50%,-50%) rotate(".concat(_this4.rotateDeg, "deg)");
        }, 50);
        this.audioContext.play();
        this.timer = setInterval(function () {
          _this4.currentTime++;
          if (_this4.audioCurTime[1] > 58) {
            _this4.audioCurTime[0]++;
            _this4.audioCurTime[1] = 0;
            _this4.audioCurTime[1]++;
          } else {
            _this4.audioCurTime[1]++;
          }
        }, 1000);
      }
      setTimeout(function () {
        var minutes = parseInt(_this4.audioContext.duration / 60, 10);
        var seconds = parseInt(_this4.audioContext.duration % 60);
        _this4.longth = minutes + ":" + seconds;
      }, 500);
    },
    changeProgress: function changeProgress(e) {
      // ios 拖动slider 会出现漂移，定位不准，苹果暂时用拖动时暂停播放来规避
      // ios pause music when dragging , Android could still play
      this.audioContext.seek(e.detail.value);
      // pause music when dragging , in order to load timer repeatly
      if (this.system == 'ios') {
        this.audioCurTime[0] = Math.floor(Math.floor(e.detail.value) / 60);
        this.audioCurTime[1] = Math.floor(e.detail.value) % 60;
        clearInterval(this.timer);
        clearInterval(this.rotateTimer);
        this.timer = null;
        this.rotateTimer = null;
        this.isPlay = false;
        this.audioContext.pause();
      } else {
        clearInterval(this.timer);
        clearInterval(this.rotateTimer);
        this.timer = null;
        this.rotateTimer = null;
        this.isPlay = false;
        this.playMusic();
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 62:
/*!*****************************************************************************!*\
  !*** E:/my-music/components/play/play.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play.vue?vue&type=style&index=0&lang=css& */ 63);
/* harmony import */ var _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/my-music/components/play/play.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/play/play.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/play/play-create-component',
    {
        'components/play/play-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(54))
        })
    },
    [['components/play/play-create-component']]
]);
