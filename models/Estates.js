"use strict";module.exports=(e,l)=>{return e.define("Estates",{id:{type:l.INTEGER,primaryKey:!0},Address:{type:l.STRING,allowNull:!1,validate:{len:[5,20],msg:"Please enter a valid address."}},City:{type:l.STRING,allowNull:!1,validate:{len:[5,20],msg:"Please enter a valid city."}},Zip:{type:l.STRING,allowNull:!1,validate:{len:[5,7],msg:"Please enter a valid zip code."}},Price:{type:l.INTEGER,allowNull:!1,validate:{len:[1,9],isNumeric:!0,msg:"Please enter a valid price."}}})};
