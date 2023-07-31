const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;
  const errors =[];

  const nameRegex = /^[a-zA-z\s]+$/;
  const numberRegex = /^[0-9]+$/;

  if(title == null) {
      errors.push({ field:"title", message:"the field 'title' is required"})
  } else if(title.length >= 255) {        
      errors.push({ field: "title", message: "Should countain less 255 characters"})
  }

  if(director == null) {
      errors.push({ field:"director", message:"the field director is required"})
  } else if(director.length >= 255) {
      errors.push({ field: "director", message: "Should countain less 255 characters"})
  } else if(!nameRegex.test(director)) {
      errors.push({ field: "director", message: "the field 'director' only countains alphabetical characters"})
  }

  if(year == null) {
      errors.push({ field:"year", message:"the field 'year' is required"})
  } else if(year.length >= 5) {
      errors.push({ field: "year", message: "Sorry, wrong year"})
  } else if(!numberRegex.test(year)) {
      errors.push({ field: "year", message: "the field 'year' only countains numeric characters"})
  }

  if(color == null) {
      errors.push({ field:"color", message:"the field 'color' is required"})
  } else if(color.length >= 2) {
      errors.push({ field: "color", message: "Should countain less 2 characters"})
  } else if(!numberRegex.test(color)) {
      errors.push({ field: "color", message: "the field 'color' only countains numeric characters"})
  }
  
  if(duration == null) {
      errors.push({ field:"duration", message:"the field 'duration' is required"})
  } else if(duration >= 600) {
      errors.push({ field: "duration", message: "Your movie is too long"})
  } else if(!numberRegex.test(duration)) {
      errors.push({ field: "duration", message: "the field 'duration' only countains numeric characters"})
  }
      
  if(errors.length) {
      res.status(422).json({ validationErrors: errors});
  } else {
      next();
  }

}

  
  module.exports = {
    validateMovie,
  };