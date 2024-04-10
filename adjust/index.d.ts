import { IonicNativePlugin } from '@ionic-native/core';
export declare class AdjustEvent {
    private eventToken;
    private revenue;
    private currency;
    private transactionId;
    private callbackId;
    private callbackParameters;
    private partnerParameters;
    constructor(eventToken: string);
    setRevenue(revenue: number, currency: string): void;
    addCallbackParameter(key: string, value: string): void;
    addPartnerParameter(key: string, value: string): void;
    setTransactionId(transactionId: string): void;
    setCallbackId(callbackId: string): void;
}
export declare class AdjustConfig {
    private appToken;
    private environment;
    private sdkPrefix;
    private delayStart;
    private logLevel;
    private defaultTracker;
    private sendInBackground;
    private shouldLaunchDeeplink;
    private eventBufferingEnabled;
    private userAgent;
    private isDeviceKnown;
    private secretId;
    private info1;
    private info2;
    private info3;
    private info4;
    private processName;
    private attributionCallback;
    private eventTrackingSucceededCallback;
    private eventTrackingFailedCallback;
    private sessionTrackingSucceededCallback;
    private sessionTrackingFailedCallback;
    private deferredDeeplinkCallback;
    constructor(appToken: string, environment: AdjustEnvironment);
    setAppSecret(secretId: number, info1: number, info2: number, info3: number, info4: number): void;
    setDelayStart(delayStart: number): void;
    setLogLevel(logLevel: AdjustLogLevel): void;
    setDefaultTracker(defaultTracker: string): void;
    setSendInBackground(sendInBackground: boolean): void;
    setShouldLaunchDeeplink(shouldLaunchDeeplink: boolean): void;
    setEventBufferingEnabled(eventBufferingEnabled: boolean): void;
    setUserAgent(userAgent: string): void;
    setDeviceKnown(isDeviceKnown: boolean): void;
    setProcessName(processName: string): void;
    setAttributionCallbackListener(attributionCallback: (attribution: AdjustAttribution) => void): void;
    setEventTrackingSucceededCallbackListener(eventTrackingSucceededCallback: (event: AdjustEventSuccess) => void): void;
    setEventTrackingFailedCallbackListener(eventTrackingFailedCallback: (event: AdjustEventFailure) => void): void;
    setSessionTrackingSucceededCallbackListener(sessionTrackingSucceededCallback: (session: AdjustSessionSuccess) => void): void;
    setSessionTrackingFailedCallbackListener(sessionTrackingFailedCallback: (session: AdjustSessionFailure) => void): void;
    setDeferredDeeplinkCallbackListener(deferredDeeplinkCallback: (uri: string) => void): void;
    private getAttributionCallback();
    private getEventTrackingSucceededCallback();
    private getEventTrackingFailedCallback();
    private getSessionTrackingSucceededCallback();
    private getSessionTrackingFailedCallback();
    private getDeferredDeeplinkCallback();
    private hasAttributionListener();
    private hasEventTrackingSucceededListener();
    private hasEventTrackingFailedListener();
    private hasSessionTrackingSucceededListener();
    private hasSessionTrackingFailedListener();
    private hasDeferredDeeplinkCallbackListener();
}
export interface AdjustAttribution {
    trackerToken: string;
    trackerName: string;
    network: string;
    campaign: string;
    adgroup: string;
    creative: string;
    clickLabel: string;
    adid: string;
}
export interface AdjustSessionSuccess {
    message: string;
    timestamp: string;
    adid: string;
    jsonResponse: string;
}
export interface AdjustSessionFailure {
    message: string;
    timestamp: string;
    adid: string;
    willRetry: boolean;
    jsonResponse: string;
}
export interface AdjustEventSuccess {
    message: string;
    timestamp: string;
    adid: string;
    eventToken: string;
    callbackId: string;
    jsonResponse: string;
}
export interface AdjustEventFailure {
    message: string;
    timestamp: string;
    adid: string;
    eventToken: string;
    willRetry: boolean;
    callbackId: string;
    jsonResponse: string;
}
export declare enum AdjustEnvironment {
    Sandbox = "sandbox",
    Production = "production",
}
export declare enum AdjustLogLevel {
    Verbose = "VERBOSE",
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Assert = "ASSERT",
    Suppress = "SUPPRESS",
}
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
export declare class Adjust extends IonicNativePlugin {
    /**
     * This method initializes Adjust SDK
     * @param {AdjustConig} config Adjust config object used as starting options
     */
    create(config: AdjustConfig): void;
    /**
     * This method tracks an event
     * @param {AdjustEvent} event Adjust event object to be tracked
     */
    trackEvent(event: AdjustEvent): void;
    /**
     * This method sets offline mode on or off
     * @param {boolean} enabled set to true for offline mode on
     */
    setOfflineMode(enabled: boolean): void;
    /**
     * By making this call, the Adjust SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Adjust backend.
     * @param {string} url URL of the deeplink
     */
    appWillOpenUrl(url: string): void;
    /**
     * You can disable/enable the Adjust SDK from tracking by invoking this method
     * @param {boolean} enabled set to false to disable SDK
     */
    setEnabled(enabled: boolean): void;
    /**
     * To send us the push notification token, add the following call to Adjust whenever you get your token in the app or when it gets updated.
     * Push tokens are used for Audience Builder and client callbacks, and they are required for the upcoming uninstall tracking feature.
     * @param {string} pushToken push token value
     */
    setPushToken(pushToken: string): void;
    /**
     * Check if the Adjust SDK is currently enabled by calling this function
     * @returns {Promise<boolean>}
     */
    isEnabled(): Promise<boolean>;
    /**
     * In accordance with article 17 of the EU's General Data Protection Regulation (GDPR), you can notify Adjust when a user has exercised their right to be forgotten.
     * Calling the following method will instruct the Adjust SDK to communicate the user's choice to be forgotten to the Adjust backend
     */
    gdprForgetMe(): void;
    /**
     * Function used to get Google AdId
     * @return {Promise<string>} Returns a promise with google AdId value
     */
    getGoogleAdId(): Promise<string>;
    /**
     * If you need to obtain the Amazon Advertising ID, you can make a call to this function.
     * @return {Promise<string>} Returns a promise with anazib adv. ID
     */
    getAmazonAdId(): Promise<string>;
    /**
     * To obtain the IDFA, call this function
     * @return {Promise<string>} Returns a promise with IDFA string value
     */
    getIdfa(): Promise<string>;
    /**
     * For every device with your app installed on it, the Adjust backend generates a unique Adjust device identifier (adid).
     * In order to obtain this identifier, call this function
     * @return {Promise<string>} Returns a promise with adid value
     */
    getAdid(): Promise<string>;
    /**
     * If you want to access information about a user's current attribution whenever you need it, you can make a call to this function
     * @return {Promise<AdjustAttribution>} Returns a promise with AdjustAttribution object
     */
    getAttribution(): Promise<AdjustAttribution>;
    /**
     * Get the information about version of the SDK used
     * @return {Promise<string>} Returns a promise with sdk version information
     */
    getSdkVersion(): Promise<string>;
    /**
     * Method used to add session callback parameters
     * @param key key
     * @param value value
     */
    addSessionCallbackParameter(key: string, value: string): void;
    /**
     * Remove a specific session callback parameter by passing the desiring key to this method
     * @param key key
     */
    removeSessionCallbackParameter(key: string): void;
    /**
     * If all keys and values from the session callback parameters have to be removed, call this method
     */
    resetSessionCallbackParameters(): void;
    /**
     * Method used to add session partner parameters
     * @param key key
     * @param value value
     */
    addSessionPartnerParameter(key: string, value: string): void;
    /**
     * Remove a specific session partner parameter by passing the desiring key to this method
     * @param key key
     */
    removeSessionPartnerParameter(key: string): void;
    /**
     * If all keys and values from the session partner parameters have to be removed, call this method
     */
    resetSessionPartnerParameters(): void;
    /**
     * This method call will make the Adjust SDK send the initial install session and any events created, if they were not sent after delay start was set and it's delay expired.
     */
    sendFirstPackages(): void;

    /**
     * Request Adjust SDK to show pop up dialog for asking user's consent to be tracked.
     * In order to do this, call this function
     * @return {Promise<number>} Returns a promise with user's consent value
     */
    requestTrackingAuthorizationWithCompletionHandler(): Promise<number>
}
