const validateUser = (req, res, next) => {
    const { firstname, lastname, email, city, language } = req.body;
    const errors = [];

    const nameRegex = /^[a-zA-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
    if(firstname == null) {
        errors.push({ field:"firstname", message:"the field 'firstname' is required"})
    } else if(firstname.length >= 255) {        
        errors.push({ field: "firstname", message: "Should countain less 255 characters"})
    }else if(!nameRegex.test(firstname)) {
        errors.push({ field: "firstname", message: "the field 'firstname' only countains alphabetical characters"})
    }
    if(lastname == null) {
        errors.push({ field:"lastname", message:"the field 'lastname' is required"})
    } else if(lastname.length >= 255) {        
        errors.push({ field: "lastname", message: "Should countain less 255 characters"})
    }else if(!nameRegex.test(lastname)) {
        errors.push({ field: "lastname", message: "the field 'lastname' only countains alphabetical characters"})
    }
    if(email == null) {
        errors.push({ field:"email", message:"the field 'email' is required"})
    } else if(email.length >= 255) {
        errors.push({ field: "email", message: "Should countain less 255 characters"})
    } else if (!emailRegex.test(email)) {
        errors.push({ field: "email", message: "Invalid mail" })
    }
    if(city == null) {
        errors.push({ field:"city", message:"the field 'city' is required"})
    } else if(city.length >= 255) {        
        errors.push({ field: "city", message: "Should countain less 255 characters"})
    } else if(!nameRegex.test(city)) {
        errors.push({ field: "city", message: "the field 'city' only countains alphabetical characters"})
    }
    if(language == null) {
        errors.push({ field:"language", message:"the field 'language' is required"})
    } else if(language.length >= 255) {        
        errors.push({ field: "language", message: "Should countain less 255 characters"})
    }else if(!nameRegex.test(language)) {
        errors.push({ field: "language", message: "the field 'language' only countains alphabetical characters"})
    }
  
    if (errors.length) {
      res.status(422).json({ validationErrors: errors });
    } else {
      next();
    }
  };
    
  module.exports = {
    validateUser,
  };