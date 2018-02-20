/**
 * All actions the user can perform on the data
 */
export const actions = {
    SET_NAME: "Sets the users name",
    NEW_MESSAGE: "A new message was sent to this user",
};

/**
 * Adds the new message 
 * @param {object} msg - Message that was sent to the user
 */
export const newMessage = message => {
    console.log("newMessage (ACTION)" + message);
    return {
        type: actions.NEW_MESSAGE,
        message
    };
};

/**
 * Set's the user's name
 * @param {string} name - user's name
 */
export const setName = name => {
    return {
        type: actions.SET_NAME,
        name
    };
}