/**
 * module dependencies
 */

var user = require('../models/userschema');

var getUser = verificationToken => {
    tokenData = user.find({
        token:verificationToken}
        );
    if (token != null) {
        return token.getUser();
    }
    return null;
}

var 