/**
 * module dependencies
 */

const user = require('../models/userschema');

const getUser = verificationToken => {
    tokenData = user.find({
        token:verificationToken}
        );
    if (token != null) {
        return token.getUser();
    }
    return null;
}

