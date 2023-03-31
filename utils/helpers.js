// Define a Handlebars helper to format dates
module.exports = {
  formatDate: function (date, format) {
    return moment(date).format(format);
  },

  // Define a Handlebars helper to truncate text
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + ' ';
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(' '));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + '...';
    }
    return str;
  },

  // Define a Handlebars helper to create a select menu of categories
  select: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp('>' + selected + '</option>'),
        ' selected="selected"$&'
      );
  },

  // Define a Handlebars helper to check if a user is logged in
  ifUser: function (user, options) {
    if (user) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },
};


