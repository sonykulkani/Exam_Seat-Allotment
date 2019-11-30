const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
   
    usn: {
        type: String
    },
    semester: {
        type: String
    },
    year:{
        type:String

    },
    bench:{
        type:String

    }
   
});

// Custom validation for email


mongoose.model('Employee', employeeSchema);