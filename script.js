
function PopulateDropDownList() {
           //Build an array containing liker records.
            var likers = [
                { likerId: 1, Name: "John Hammond", Country: "United States" },
                { likerId: 2, Name: "Mudassar Khan", Country: "India" },
                { likerId: 3, Name: "Suzanne Mathews", Country: "France" },
                { likerId: 4, Name: "Robert Schidner", Country: "Russia" }
            ];
           
            var ddlLikers = document.getElementById("ddlLikers");
           
            //Add the Options to the DropDownList.
            for (var i = 0; i < likers.length; i++) {
                var option = document.createElement("OPTION");
 
                //Set Liker Name in Text part.
                option.innerHTML = likers[i].Name;
 
                //Set likerId in Value part.
                option.value = likers[i].likerId;
 
                //Add the Option element to DropDownList.
                ddlLikers.options.add(option);
            }
        }

