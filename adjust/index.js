var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
var AdjustEvent = (function () {
    function AdjustEvent(eventToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.eventToken = eventToken;
    }
    AdjustEvent.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustEvent.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustEvent.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustEvent.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
    };
    AdjustEvent.prototype.setCallbackId = function (callbackId) {
        this.callbackId = callbackId;
    };
    return AdjustEvent;
}());
export { AdjustEvent };
var AdjustConfig = (function () {
    function AdjustConfig(appToken, environment) {
        this.delayStart = 0.0;
        this.logLevel = null;
        this.defaultTracker = null;
        this.sendInBackground = null;
        this.shouldLaunchDeeplink = null;
        this.eventBufferingEnabled = null;
        this.userAgent = null;
        this.isDeviceKnown = null;
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.processName = null;
        this.attributionCallback = null;
        this.eventTrackingSucceededCallback = null;
        this.eventTrackingFailedCallback = null;
        this.sessionTrackingSucceededCallback = null;
        this.sessionTrackingFailedCallback = null;
        this.deferredDeeplinkCallback = null;
        this.appToken = appToken;
        this.environment = environment;
    }
    AdjustConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    AdjustConfig.prototype.setDelayStart = function (delayStart) {
        this.delayStart = delayStart;
    };
    AdjustConfig.prototype.setLogLevel = function (logLevel) {
        this.logLevel = logLevel;
    };
    AdjustConfig.prototype.setDefaultTracker = function (defaultTracker) {
        this.defaultTracker = defaultTracker;
    };
    AdjustConfig.prototype.setSendInBackground = function (sendInBackground) {
        this.sendInBackground = sendInBackground;
    };
    AdjustConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    AdjustConfig.prototype.setEventBufferingEnabled = function (eventBufferingEnabled) {
        this.eventBufferingEnabled = eventBufferingEnabled;
    };
    AdjustConfig.prototype.setUserAgent = function (userAgent) {
        this.userAgent = userAgent;
    };
    AdjustConfig.prototype.setDeviceKnown = function (isDeviceKnown) {
        this.isDeviceKnown = isDeviceKnown;
    };
    AdjustConfig.prototype.setProcessName = function (processName) {
        this.processName = processName;
    };
    AdjustConfig.prototype.setAttributionCallbackListener = function (attributionCallback) {
        this.attributionCallback = attributionCallback;
    };
    AdjustConfig.prototype.setEventTrackingSucceededCallbackListener = function (eventTrackingSucceededCallback) {
        this.eventTrackingSucceededCallback = eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setEventTrackingFailedCallbackListener = function (eventTrackingFailedCallback) {
        this.eventTrackingFailedCallback = eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.setSessionTrackingSucceededCallbackListener = function (sessionTrackingSucceededCallback) {
        this.sessionTrackingSucceededCallback = sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setSessionTrackingFailedCallbackListener = function (sessionTrackingFailedCallback) {
        this.sessionTrackingFailedCallback = sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.setDeferredDeeplinkCallbackListener = function (deferredDeeplinkCallback) {
        this.deferredDeeplinkCallback = deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.getAttributionCallback = function () {
        return this.attributionCallback;
    };
    AdjustConfig.prototype.getEventTrackingSucceededCallback = function () {
        return this.eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getEventTrackingFailedCallback = function () {
        return this.eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.getSessionTrackingSucceededCallback = function () {
        return this.sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getSessionTrackingFailedCallback = function () {
        return this.sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.getDeferredDeeplinkCallback = function () {
        return this.deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.hasAttributionListener = function () {
        return this.attributionCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingSucceededListener = function () {
        return this.eventTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingFailedListener = function () {
        return this.eventTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingSucceededListener = function () {
        return this.sessionTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingFailedListener = function () {
        return this.sessionTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasDeferredDeeplinkCallbackListener = function () {
        return this.deferredDeeplinkCallback !== null;
    };
    return AdjustConfig;
}());
export { AdjustConfig };
export var AdjustEnvironment;
(function (AdjustEnvironment) {
    AdjustEnvironment["Sandbox"] = "sandbox";
    AdjustEnvironment["Production"] = "production";
})(AdjustEnvironment || (AdjustEnvironment = {}));
export var AdjustLogLevel;
(function (AdjustLogLevel) {
    AdjustLogLevel["Verbose"] = "VERBOSE";
    AdjustLogLevel["Debug"] = "DEBUG";
    AdjustLogLevel["Info"] = "INFO";
    AdjustLogLevel["Warn"] = "WARN";
    AdjustLogLevel["Error"] = "ERROR";
    AdjustLogLevel["Assert"] = "ASSERT";
    AdjustLogLevel["Suppress"] = "SUPPRESS";
})(AdjustLogLevel || (AdjustLogLevel = {}));
/**
 * @name Adjust
 * @description
 * This is the Ionic Cordova SDK of Adjust™. You can read more about Adjust™ at adjust.com.
 *
 * Requires Cordova plugin: `com.adjust.sdk`. For more info, please see the [Adjust Cordova SDK](https://github.com/adjust/cordova_sdk)
 *
 * @usage
 * ```typescript
 *  import { Adjust, AdjustConfig, AdjustEnvironment } from '@ionic-native/adjust';
 *
 *  constructor(private adjust: Adjust) { }
 *
 *  ...
 *
 *  const config = new AdjustConfig('APP-TOKEN-HERE', AdjustEnvironment.Sandbox);
 *  config.logLevel = AdjustLogLevel.Verbose;
 *  // Set other config properties.
 *  adjust.create(config);
 *
 * ```
 * @interfaces
 * AdjustAttribution
 * AdjustSessionSuccess
 * AdjustSessionFailure
 * AdjustEventSuccess
 * AdjustEventFailure
 * @classes
 * AdjustEvent
 * AdjustConfig
 * @enums
 * AdjustEnvironment
 * AdjustLogLevel
 */
var Adjust = (function (_super) {
    __extends(Adjust, _super);
    function Adjust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method initializes Adjust SDK
     * @param {AdjustConig} config Adjust config object used as starting options
     */
    /**
       * This method initializes Adjust SDK
       * @param {AdjustConig} config Adjust config object used as starting options
       */
    Adjust.prototype.create = /**
       * This method initializes Adjust SDK
       * @param {AdjustConig} config Adjust config object used as starting options
       */
    function (config) { };
    /**
     * This method tracks an event
     * @param {AdjustEvent} event Adjust event object to be tracked
     */
    /**
       * This method tracks an event
       * @param {AdjustEvent} event Adjust event object to be tracked
       */
    Adjust.prototype.trackEvent = /**
       * This method tracks an event
       * @param {AdjustEvent} event Adjust event object to be tracked
       */
    function (event) { };
    /**
     * This method sets offline mode on or off
     * @param {boolean} enabled set to true for offline mode on
     */
    /**
       * This method sets offline mode on or off
       * @param {boolean} enabled set to true for offline mode on
       */
    Adjust.prototype.setOfflineMode = /**
       * This method sets offline mode on or off
       * @param {boolean} enabled set to true for offline mode on
       */
    function (enabled) { };
    /**
     * By making this call, the Adjust SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Adjust backend.
     * @param {string} url URL of the deeplink
     */
    /**
       * By making this call, the Adjust SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Adjust backend.
       * @param {string} url URL of the deeplink
       */
    Adjust.prototype.appWillOpenUrl = /**
       * By making this call, the Adjust SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Adjust backend.
       * @param {string} url URL of the deeplink
       */
    function (url) { };
    /**
     * You can disable/enable the Adjust SDK from tracking by invoking this method
     * @param {boolean} enabled set to false to disable SDK
     */
    /**
       * You can disable/enable the Adjust SDK from tracking by invoking this method
       * @param {boolean} enabled set to false to disable SDK
       */
    Adjust.prototype.setEnabled = /**
       * You can disable/enable the Adjust SDK from tracking by invoking this method
       * @param {boolean} enabled set to false to disable SDK
       */
    function (enabled) { };
    /**
     * To send us the push notification token, add the following call to Adjust whenever you get your token in the app or when it gets updated.
     * Push tokens are used for Audience Builder and client callbacks, and they are required for the upcoming uninstall tracking feature.
     * @param {string} pushToken push token value
     */
    /**
       * To send us the push notification token, add the following call to Adjust whenever you get your token in the app or when it gets updated.
       * Push tokens are used for Audience Builder and client callbacks, and they are required for the upcoming uninstall tracking feature.
       * @param {string} pushToken push token value
       */
    Adjust.prototype.setPushToken = /**
       * To send us the push notification token, add the following call to Adjust whenever you get your token in the app or when it gets updated.
       * Push tokens are used for Audience Builder and client callbacks, and they are required for the upcoming uninstall tracking feature.
       * @param {string} pushToken push token value
       */
    function (pushToken) { };
    /**
     * Check if the Adjust SDK is currently enabled by calling this function
     * @returns {Promise<boolean>}
     */
    /**
       * Check if the Adjust SDK is currently enabled by calling this function
       * @returns {Promise<boolean>}
       */
    Adjust.prototype.isEnabled = /**
       * Check if the Adjust SDK is currently enabled by calling this function
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * In accordance with article 17 of the EU's General Data Protection Regulation (GDPR), you can notify Adjust when a user has exercised their right to be forgotten.
     * Calling the following method will instruct the Adjust SDK to communicate the user's choice to be forgotten to the Adjust backend
     */
    /**
       * In accordance with article 17 of the EU's General Data Protection Regulation (GDPR), you can notify Adjust when a user has exercised their right to be forgotten.
       * Calling the following method will instruct the Adjust SDK to communicate the user's choice to be forgotten to the Adjust backend
       */
    Adjust.prototype.gdprForgetMe = /**
       * In accordance with article 17 of the EU's General Data Protection Regulation (GDPR), you can notify Adjust when a user has exercised their right to be forgotten.
       * Calling the following method will instruct the Adjust SDK to communicate the user's choice to be forgotten to the Adjust backend
       */
    function () { };
    /**
     * Function used to get Google AdId
     * @return {Promise<string>} Returns a promise with google AdId value
     */
    /**
       * Function used to get Google AdId
       * @return {Promise<string>} Returns a promise with google AdId value
       */
    Adjust.prototype.getGoogleAdId = /**
       * Function used to get Google AdId
       * @return {Promise<string>} Returns a promise with google AdId value
       */
    function () {
        return;
    };
    /**
     * If you need to obtain the Amazon Advertising ID, you can make a call to this function.
     * @return {Promise<string>} Returns a promise with anazib adv. ID
     */
    /**
       * If you need to obtain the Amazon Advertising ID, you can make a call to this function.
       * @return {Promise<string>} Returns a promise with anazib adv. ID
       */
    Adjust.prototype.getAmazonAdId = /**
       * If you need to obtain the Amazon Advertising ID, you can make a call to this function.
       * @return {Promise<string>} Returns a promise with anazib adv. ID
       */
    function () {
        return;
    };
    /**
     * To obtain the IDFA, call this function
     * @return {Promise<string>} Returns a promise with IDFA string value
     */
    /**
       * To obtain the IDFA, call this function
       * @return {Promise<string>} Returns a promise with IDFA string value
       */
    Adjust.prototype.getIdfa = /**
       * To obtain the IDFA, call this function
       * @return {Promise<string>} Returns a promise with IDFA string value
       */
    function () {
        return;
    };
    /**
     * For every device with your app installed on it, the Adjust backend generates a unique Adjust device identifier (adid).
     * In order to obtain this identifier, call this function
     * @return {Promise<string>} Returns a promise with adid value
     */
    /**
       * For every device with your app installed on it, the Adjust backend generates a unique Adjust device identifier (adid).
       * In order to obtain this identifier, call this function
       * @return {Promise<string>} Returns a promise with adid value
       */
    Adjust.prototype.getAdid = /**
       * For every device with your app installed on it, the Adjust backend generates a unique Adjust device identifier (adid).
       * In order to obtain this identifier, call this function
       * @return {Promise<string>} Returns a promise with adid value
       */
    function () {
        return;
    };
    /**
     * If you want to access information about a user's current attribution whenever you need it, you can make a call to this function
     * @return {Promise<AdjustAttribution>} Returns a promise with AdjustAttribution object
     */
    /**
       * If you want to access information about a user's current attribution whenever you need it, you can make a call to this function
       * @return {Promise<AdjustAttribution>} Returns a promise with AdjustAttribution object
       */
    Adjust.prototype.getAttribution = /**
       * If you want to access information about a user's current attribution whenever you need it, you can make a call to this function
       * @return {Promise<AdjustAttribution>} Returns a promise with AdjustAttribution object
       */
    function () {
        return;
    };
    /**
     * Get the information about version of the SDK used
     * @return {Promise<string>} Returns a promise with sdk version information
     */
    /**
       * Get the information about version of the SDK used
       * @return {Promise<string>} Returns a promise with sdk version information
       */
    Adjust.prototype.getSdkVersion = /**
       * Get the information about version of the SDK used
       * @return {Promise<string>} Returns a promise with sdk version information
       */
    function () {
        return;
    };
    /**
     * Method used to add session callback parameters
     * @param key key
     * @param value value
     */
    /**
       * Method used to add session callback parameters
       * @param key key
       * @param value value
       */
    Adjust.prototype.addSessionCallbackParameter = /**
       * Method used to add session callback parameters
       * @param key key
       * @param value value
       */
    function (key, value) { };
    /**
     * Remove a specific session callback parameter by passing the desiring key to this method
     * @param key key
     */
    /**
       * Remove a specific session callback parameter by passing the desiring key to this method
       * @param key key
       */
    Adjust.prototype.removeSessionCallbackParameter = /**
       * Remove a specific session callback parameter by passing the desiring key to this method
       * @param key key
       */
    function (key) { };
    /**
     * If all keys and values from the session callback parameters have to be removed, call this method
     */
    /**
       * If all keys and values from the session callback parameters have to be removed, call this method
       */
    Adjust.prototype.resetSessionCallbackParameters = /**
       * If all keys and values from the session callback parameters have to be removed, call this method
       */
    function () { };
    /**
     * Method used to add session partner parameters
     * @param key key
     * @param value value
     */
    /**
       * Method used to add session partner parameters
       * @param key key
       * @param value value
       */
    Adjust.prototype.addSessionPartnerParameter = /**
       * Method used to add session partner parameters
       * @param key key
       * @param value value
       */
    function (key, value) { };
    /**
     * Remove a specific session partner parameter by passing the desiring key to this method
     * @param key key
     */
    /**
       * Remove a specific session partner parameter by passing the desiring key to this method
       * @param key key
       */
    Adjust.prototype.removeSessionPartnerParameter = /**
       * Remove a specific session partner parameter by passing the desiring key to this method
       * @param key key
       */
    function (key) { };
    /**
     * If all keys and values from the session partner parameters have to be removed, call this method
     */
    /**
       * If all keys and values from the session partner parameters have to be removed, call this method
       */
    Adjust.prototype.resetSessionPartnerParameters = /**
       * If all keys and values from the session partner parameters have to be removed, call this method
       */
    function () { };
    /**
     * This method call will make the Adjust SDK send the initial install session and any events created, if they were not sent after delay start was set and it's delay expired.
     */
    /**
       * This method call will make the Adjust SDK send the initial install session and any events created, if they were not sent after delay start was set and it's delay expired.
       */
    Adjust.prototype.sendFirstPackages = /**
       * This method call will make the Adjust SDK send the initial install session and any events created, if they were not sent after delay start was set and it's delay expired.
       */
    function () { };
    /**
     * Request Adjust SDK to show pop up dialog for asking user's consent to be tracked.
     * In order to do this, call this function
     * @return {Promise<number>} Returns a promise with user's consent value
     */
    Adjust.prototype.requestTrackingAuthorizationWithCompletionHandler = /**
    * Request Adjust SDK to show pop up dialog for asking user's consent to be tracked.
    * @return {Promise<number>} Returns a promise with sdk version information
    */
    function () { 
        return;
    };

    Adjust.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [AdjustConfig]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "create", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [AdjustEvent]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "trackEvent", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "setOfflineMode", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "appWillOpenUrl", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "setEnabled", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "setPushToken", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Adjust.prototype, "isEnabled", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "gdprForgetMe", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Adjust.prototype, "getGoogleAdId", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Adjust.prototype, "getAmazonAdId", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Adjust.prototype, "getIdfa", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Adjust.prototype, "getAdid", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Adjust.prototype, "getAttribution", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Adjust.prototype, "getSdkVersion", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "addSessionCallbackParameter", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "removeSessionCallbackParameter", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "resetSessionCallbackParameters", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "addSessionPartnerParameter", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "removeSessionPartnerParameter", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "resetSessionPartnerParameters", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Adjust.prototype, "sendFirstPackages", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Adjust.prototype, "requestTrackingAuthorizationWithCompletionHandler", null);
    /**
     * @name Adjust
     * @description
     * This is the Ionic Cordova SDK of Adjust™. You can read more about Adjust™ at adjust.com.
     *
     * Requires Cordova plugin: `com.adjust.sdk`. For more info, please see the [Adjust Cordova SDK](https://github.com/adjust/cordova_sdk)
     *
     * @usage
     * ```typescript
     *  import { Adjust, AdjustConfig, AdjustEnvironment } from '@ionic-native/adjust';
     *
     *  constructor(private adjust: Adjust) { }
     *
     *  ...
     *
     *  const config = new AdjustConfig('APP-TOKEN-HERE', AdjustEnvironment.Sandbox);
     *  config.logLevel = AdjustLogLevel.Verbose;
     *  // Set other config properties.
     *  adjust.create(config);
     *
     * ```
     * @interfaces
     * AdjustAttribution
     * AdjustSessionSuccess
     * AdjustSessionFailure
     * AdjustEventSuccess
     * AdjustEventFailure
     * @classes
     * AdjustEvent
     * AdjustConfig
     * @enums
     * AdjustEnvironment
     * AdjustLogLevel
     */
    Adjust = __decorate([
        Plugin({
            pluginName: 'Adjust',
            plugin: 'com.adjust.sdk',
            pluginRef: 'Adjust',
            repo: 'https://github.com/adjust/cordova_sdk',
            platforms: ['Android', 'iOS']
        })
    ], Adjust);
    return Adjust;
}(IonicNativePlugin));
export { Adjust };
//# sourceMappingURL=index.js.map