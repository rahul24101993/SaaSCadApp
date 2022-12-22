/**
 * @module js/helloAuthenticatorService
 */

/**
 * @return {Object} authenticator
 */
export function getAuthenticator() {
    var exports = {};

    /**
     * This function determines if authentication is required. If already authenticated, none is required.
     *
     * @return {Promise} if promise is resolved, then no authentication is required. if promise fails, then the authenticate function will be called.
     */
    exports.checkIfSessionAuthenticated = function() {
        return Promise.resolve();
    };

    /**
     * authenticator specific function to carry out authentication. In the interactive case, we just resolve
     * directly to continue the pipeline.
     *
     * @return {Promise} promise
     */
    exports.authenticate = function() {
        return Promise.resolve();
    };

    /**
     * this is called during the authentication process. It gets invoked after the authentication is
     * completed/ready. It is a spot to do any session level initialization.
     *
     * @return {Promise} promise to be resolved after the authenticator does self initialization
     */
    exports.postAuthInitialization = function() {
        return Promise.resolve();
    };

    /**
     * triggers the authenticator sign out logic. Returns a promise invoked upon completion
     *
     * @return {Promise} promise to be invoked upon completion of the signout tasks
     */
    exports.signOut = function() {
        return Promise.resolve();
    };

    return exports;
}
