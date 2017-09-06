const debug = process.env.DEBUG === "1" ?
      console.log :
      function() {};

debug("Visible only if environment variable DEBUG is set!");
