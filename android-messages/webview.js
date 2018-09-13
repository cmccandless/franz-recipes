"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    const title = document.title;
    // console.info(title);
    if (title == "Messages for web") {
        Franz.setBadge(0);
    } else {
        const unread = parseInt(title.match(/\d+/)[0], 10);
        // console.info(unread);
        Franz.setBadge(unread);
    }
  };
  Franz.loop(getMessages);
};