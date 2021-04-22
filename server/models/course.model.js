const mongoose=require('mongoose');
const { timeStamp } = require('console');

var memdetails=new mongoose.Schema(
    {
        memid:{type:String, default:''},
        name:{type:String, requied:true},
        expire:{type:Date, default: Date.now}
    }
);
var comments=new mongoose.Schema(
    {
        words:{type:String, default:''},
        memid:{type:String, default:''}
    }
);
var coursedetails=new mongoose.Schema(
    {
        sectionName:[String],
        subcontents:[[String]],
        contents:{
            serialno:{type:Number, default:0},
            type:{type:String, default:''},
            link:{type:String, default:''},
            views:{type:Number, default:0},
            likes:{type:Number, default:0},
            feedback:[comments]
        }
    }
    );
const courseSchema=new mongoose.Schema(
    {
            pageId:String,
            name:{
                type:String,
                trim:true,
                default:''
            },
            descript:{
                type:String,
                trim:true,
                default:''
            },
            category:[String],
            duration:{type:Number, default:0},
            rating:{type:mongoose.Schema.Types.Decimal128, default:0.0},
            members:[memdetails],
            roadmap:[coursedetails]
    },
    {
        collection: 'course'
    },
    {
        timeStamp:true
    }
);
courseSchema.pre("save",function(next) {
    if ( !this.roadmap || this.roadmap.length == 0 ) {
      this.roadmap = [];
      this.roadmap.push({
        sectionName: ["Getting Started"],
        subcontents:[["Introduction"]],
      })
    }
      next();
    });
    
module.exports=mongoose.model('Course',courseSchema);