//Changes background Image on load of webpage
function randomNumber(min, max) { 
    let numb = Math.random() * (max - min) + min;
    return parseInt(numb);
} 

function RandomBackground(){
    const image = [];
    image[0] = "";
    image[1] = "url('Images/BackMain1.jpg')"
    image[2] = "url('Images/BackMain8.jpg')"
    let numb = randomNumber(1, 20);
    if(numb % 2 == 0){
        return image[2];
    }
    else{
        return image[1];
    }
    
}

document.body.style.backgroundImage = RandomBackground();
//Changes background Image on load of webpage

//Track--------------------------------------------------------------------------------------------------------
function displayTextSong(){
    var x = document.getElementById("TextInputSong").value;
    document.getElementById("TitleAlbum").innerHTML = "Search Above To Discover New Music"

    document.getElementById("TextInputArtist").value = "";
    document.getElementById("TextInputAlbum").value = "";

    document.getElementById("ArtistName6").style.marginRight = "0%";
    document.getElementById("ArtistName6").style.marginLeft = "0%";
    document.getElementById("ArtistName6").style.lineHeight = "0px";
    document.getElementById("ArtistName6").style.backgroundColor = "rgb(12, 15, 22)";
    document.getElementById("ArtistName6").style.paddingLeft = "0px";
    document.getElementById("ArtistName6").style.paddingTop = "0px";
    document.getElementById("ArtistName6").style.boxShadow = "0 0 0px rgb(64, 81, 120)";

    if (x == ""){
        document.getElementById("Name1").innerHTML = "";
        document.getElementById("Image1").src = "";
        document.getElementById("ArtistName1").innerHTML = "";

        document.getElementById("Name2").innerHTML = "";
        document.getElementById("Image2").src = "";
        document.getElementById("ArtistName2").innerHTML = "";

        document.getElementById("Name3").innerHTML = "";
        document.getElementById("Image3").src = "";
        document.getElementById("ArtistName3").innerHTML = "";

        document.getElementById("Name4").innerHTML = "";
        document.getElementById("Image4").src = "";
        document.getElementById("ArtistName4").innerHTML = "";

        document.getElementById("Name5").innerHTML = "";
        document.getElementById("Image5").src = "";
        document.getElementById("ArtistName5").innerHTML = "";

        document.getElementById("Name6").innerHTML = "";
        document.getElementById("Image6").src = "";
        document.getElementById("ArtistName6").innerHTML = "";
        

        document.getElementById("Image1").style.border = "0px solid white";
        document.getElementById("Image2").style.border = "0px solid white";
        document.getElementById("Image3").style.border = "0px solid white";
        document.getElementById("Image4").style.border = "0px solid white";
        document.getElementById("Image5").style.border = "0px solid white";
        document.getElementById("Image6").style.border = "0px solid white";

        //Border to seperate Divs/Albums
        document.getElementById("FirstResult").style.borderBottom = "0px solid white";
        document.getElementById("SecondResult").style.borderBottom = "0px solid white";
        document.getElementById("ThirdResult").style.borderBottom = "0px solid white";
        document.getElementById("FourthResult").style.borderBottom = "0px solid white";
        document.getElementById("FifthResult").style.borderBottom = "0px solid white";
        document.getElementById("SixthResult").style.borderBottom = "0px solid white";

        document.getElementById("Rank1").style.display = "none";
        document.getElementById("Rank2").style.display = "none";
        document.getElementById("Rank3").style.display = "none";
        document.getElementById("Rank4").style.display = "none";
        document.getElementById("Rank5").style.display = "none";
    }
    else{
        document.getElementById("TitleAlbum").innerHTML = "Related Tracks Located Below"

        let link = "https://ws.audioscrobbler.com/2.0/?method=track.search&track="+ x +"&api_key=9f6a7f9aa4eb0f8cd5fa175ce60fa2fe&format=json"
        let link2 = "https://ws.audioscrobbler.com/2.0/?method=album.search&album=" + x +"&api_key=9f6a7f9aa4eb0f8cd5fa175ce60fa2fe&format=json&limit=400";

        //Track 1-------------------------------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json())  //Get Artist Name
            .then((out) => {
                document.getElementById("Name1").innerHTML = ("Track Name: " + out.results.trackmatches.track[0].name);
        
        }).catch(document.getElementById("Name1").innerHTML = ("Track: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get Bio Summary
            .then((out) => {
            let Artist1 = [];
            Artist1.push(out.results.trackmatches.track[0].artist);
            fetch(link2)
                .then(res => res.json())  //Get Bio Summary
                .then((out) => {
                    for(let i = 0; i<=400; i++){
                        if((out.results.albummatches.album[i].artist) == Artist1[0]){
                            if(out.results.albummatches.album[i].image[3]["#text"] == ""){
                                document.getElementById("Image1").src = ("Images/NotFound.png");
                            }
                            else{
                            document.getElementById("Image1").src = (out.results.albummatches.album[i].image[3]["#text"]);
                            break;
                            }
                        }
                        else{
                            document.getElementById("Image1").src = ("Images/NotFound.png");
                        }
                    }             
            }).catch(document.getElementById("Image1").src = ("Images/NotFound.png"));


                document.getElementById("ArtistName1").innerHTML = ("Artist Name: " + out.results.trackmatches.track[0].artist);
        }).catch(document.getElementById("ArtistName1").innerHTML = ("Artist: Not Found"));
        //Track 1-------------------------------------------------------------------------------------------------------------------------------------------------------

        //Track 2-------------------------------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json())  //Get Artist Name
            .then((out) => {
                document.getElementById("Name2").innerHTML = ("Track Name: " + out.results.trackmatches.track[1].name);
        
        }).catch(document.getElementById("Name2").innerHTML = ("Track: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get Bio Summary
            .then((out) => {
            let Artist2 = [];
            Artist2.push(out.results.trackmatches.track[1].artist);
            fetch(link2)
                .then(res => res.json())  //Get Bio Summary
                .then((out) => {
                    for(let i = 0; i<=400; i++){
                        if((out.results.albummatches.album[i].artist) == Artist2[0]){
                            if(out.results.albummatches.album[i].image[3]["#text"] == ""){
                                document.getElementById("Image2").src = ("Images/NotFound.png");
                            }
                            else{
                            document.getElementById("Image2").src = (out.results.albummatches.album[i].image[3]["#text"]);
                            break;
                            }
                        }
                        else{
                            document.getElementById("Image2").src = ("Images/NotFound.png");
                        }
                    }             
            }).catch(document.getElementById("Image2").src = ("Images/NotFound.png"));


                document.getElementById("ArtistName2").innerHTML = ("Artist Name: " + out.results.trackmatches.track[1].artist);
        }).catch(document.getElementById("ArtistName2").innerHTML = ("Artist: Not Found"));
        //Track 2-------------------------------------------------------------------------------------------------------------------------------------------------------

        //Track 3-------------------------------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json())  //Get Artist Name
            .then((out) => {
                document.getElementById("Name3").innerHTML = ("Track Name: " + out.results.trackmatches.track[2].name);
        
        }).catch(document.getElementById("Name3").innerHTML = ("Track: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get Bio Summary
            .then((out) => {
            let Artist3 = [];
            Artist3.push(out.results.trackmatches.track[2].artist);
            fetch(link2)
                .then(res => res.json())  //Get Bio Summary
                .then((out) => {
                    for(let i = 0; i<=400; i++){
                        if((out.results.albummatches.album[i].artist) == Artist3[0]){
                            if(out.results.albummatches.album[i].image[3]["#text"] == ""){
                                document.getElementById("Image3").src = ("Images/NotFound.png");
                            }
                            else{
                            document.getElementById("Image3").src = (out.results.albummatches.album[i].image[3]["#text"]);
                            break;
                            }
                        }
                        else{
                            document.getElementById("Image3").src = ("Images/NotFound.png");
                        }
                    }             
            }).catch(document.getElementById("Image3").src = ("Images/NotFound.png"));


                document.getElementById("ArtistName3").innerHTML = ("Artist Name: " + out.results.trackmatches.track[2].artist);
        }).catch(document.getElementById("ArtistName3").innerHTML = ("Artist: Not Found"));
        //Track 3-------------------------------------------------------------------------------------------------------------------------------------------------------

        //Track 4-------------------------------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json())  //Get Artist Name
            .then((out) => {
                document.getElementById("Name4").innerHTML = ("Track Name: " + out.results.trackmatches.track[3].name);
        
        }).catch(document.getElementById("Name4").innerHTML = ("Track: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get Bio Summary
            .then((out) => {
            let Artist4 = [];
            Artist4.push(out.results.trackmatches.track[3].artist);
            fetch(link2)
                .then(res => res.json())  //Get Bio Summary
                .then((out) => {
                    for(let i = 0; i<=400; i++){
                        if((out.results.albummatches.album[i].artist) == Artist4[0]){
                            if(out.results.albummatches.album[i].image[3]["#text"] == ""){
                                document.getElementById("Image4").src = ("Images/NotFound.png");
                            }
                            else{
                            document.getElementById("Image4").src = (out.results.albummatches.album[i].image[3]["#text"]);
                            break;
                            }
                        }
                        else{
                            document.getElementById("Image4").src = ("Images/NotFound.png");
                        }
                    }             
            }).catch(document.getElementById("Image4").src = ("Images/NotFound.png"));


                document.getElementById("ArtistName4").innerHTML = ("Artist Name: " + out.results.trackmatches.track[3].artist);
        }).catch(document.getElementById("ArtistName4").innerHTML = ("Artist: Not Found"));
        //Track 4-------------------------------------------------------------------------------------------------------------------------------------------------------

        
        //Track 5-------------------------------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json())  //Get Artist Name
            .then((out) => {
                document.getElementById("Name5").innerHTML = ("Track Name: " + out.results.trackmatches.track[4].name);
        
        }).catch(document.getElementById("Name5").innerHTML = ("Track: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get Bio Summary
            .then((out) => {
            let Artist5 = [];
            Artist5.push(out.results.trackmatches.track[4].artist);
            fetch(link2)
                .then(res => res.json())  //Get Bio Summary
                .then((out) => {
                    for(let i = 0; i<=400; i++){
                        if((out.results.albummatches.album[i].artist) == Artist5[0]){
                            if(out.results.albummatches.album[i].image[3]["#text"] == ""){
                                document.getElementById("test").src = ("Images/NotFound.png");
                            }
                            else{
                            document.getElementById("Image5").src = (out.results.albummatches.album[i].image[3]["#text"]);
                            break;
                            }
                        }
                        else{
                            document.getElementById("Image5").src = ("Images/NotFound.png");
                        }
                    }             
            }).catch(document.getElementById("Image5").src = ("Images/NotFound.png"));


                document.getElementById("ArtistName5").innerHTML = ("Artist Name: " + out.results.trackmatches.track[4].artist);
        }).catch(document.getElementById("ArtistName5").innerHTML = ("Artist: Not Found"));
        //Track 5-------------------------------------------------------------------------------------------------------------------------------------------------------

        //Track 6-------------------------------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json())  //Get Artist Name
            .then((out) => {
                document.getElementById("Name6").innerHTML = ("Track Name: " + out.results.trackmatches.track[5].name);
        
        }).catch(document.getElementById("Name6").innerHTML = ("Track: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get Bio Summary
            .then((out) => {
            let Artist6 = [];
            Artist6.push(out.results.trackmatches.track[5].artist);
            fetch(link2)
                .then(res => res.json())  //Get Bio Summary
                .then((out) => {
                    for(let i = 0; i<=400; i++){
                        if((out.results.albummatches.album[i].artist) == Artist6[0]){
                            if(out.results.albummatches.album[i].image[3]["#text"] == ""){
                                document.getElementById("Image6").src = ("Images/NotFound.png");
                            }
                            else{
                            document.getElementById("Image6").src = (out.results.albummatches.album[i].image[3]["#text"]);
                            break;
                            }
                        }
                        else{
                            document.getElementById("Image6").src = ("Images/NotFound.png");
                        }
                    }             
            }).catch(document.getElementById("Image6").src = ("Images/NotFound.png"));


                document.getElementById("ArtistName6").innerHTML = ("Artist Name: " + out.results.trackmatches.track[5].artist);
        }).catch(document.getElementById("ArtistName6").innerHTML = ("Artist: Not Found"));
        //Track 6-------------------------------------------------------------------------------------------------------------------------------------------------------

        document.getElementById("Image1").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image2").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image3").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image4").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image5").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        

        //Border to seperate Divs/Albums
        document.getElementById("FirstResult").style.borderBottom = "2px solid white";
        document.getElementById("SecondResult").style.borderBottom = "2px solid white";
        document.getElementById("ThirdResult").style.borderBottom = "2px solid white";
        document.getElementById("FourthResult").style.borderBottom = "2px solid white";
        document.getElementById("FifthResult").style.borderBottom = "2px solid white";
        
        
        //Padding for borders added to Divs/Albums
        document.getElementById("FirstResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("SecondResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("ThirdResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("FourthResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("FifthResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("SixthResult").style.padding = "2% 0% 0% 0%";

        document.getElementById("Rank1").style.display = "none";
        document.getElementById("Rank2").style.display = "none";
        document.getElementById("Rank3").style.display = "none";
        document.getElementById("Rank4").style.display = "none";
        document.getElementById("Rank5").style.display = "none";

    }
}
//Song--------------------------------------------------------------------------------------------------------




//Artist--------------------------------------------------------------------------------------------------------
function displayTextArtist(){
    var x = document.getElementById("TextInputArtist").value;
    document.getElementById("TitleAlbum").innerHTML = "Search Above To Discover New Music"

    document.getElementById("TextInputSong").value = "";
    document.getElementById("TextInputAlbum").value = "";

    document.getElementById("ArtistName6").style.marginRight = "0%";
    document.getElementById("ArtistName6").style.marginLeft = "0%";
    document.getElementById("ArtistName6").style.lineHeight = "0px";
    document.getElementById("ArtistName6").style.backgroundColor = "rgb(12, 15, 22)";
    document.getElementById("ArtistName6").style.paddingLeft = "0px";
    document.getElementById("ArtistName6").style.paddingTop = "0px";
    document.getElementById("ArtistName6").style.boxShadow = "0 0 0px rgb(64, 81, 120)";

    if (x == ""){
        document.getElementById("Name1").innerHTML = "";
        document.getElementById("Image1").src = "";
        document.getElementById("ArtistName1").innerHTML = "";

        document.getElementById("Name2").innerHTML = "";
        document.getElementById("Image2").src = "";
        document.getElementById("ArtistName2").innerHTML = "";

        document.getElementById("Name3").innerHTML = "";
        document.getElementById("Image3").src = "";
        document.getElementById("ArtistName3").innerHTML = "";

        document.getElementById("Name4").innerHTML = "";
        document.getElementById("Image4").src = "";
        document.getElementById("ArtistName4").innerHTML = "";

        document.getElementById("Name5").innerHTML = "";
        document.getElementById("Image5").src = "";
        document.getElementById("ArtistName5").innerHTML = "";

        document.getElementById("Name6").innerHTML = "";
        document.getElementById("Image6").src = "";
        document.getElementById("ArtistName6").innerHTML = "";

        document.getElementById("Image1").style.border = "0px solid white";
        document.getElementById("Image2").style.border = "0px solid white";
        document.getElementById("Image3").style.border = "0px solid white";
        document.getElementById("Image4").style.border = "0px solid white";
        document.getElementById("Image5").style.border = "0px solid white";
        document.getElementById("Image6").style.border = "0px solid white";

        //Border to seperate Divs/Albums
        document.getElementById("FirstResult").style.borderBottom = "0px solid white";
        document.getElementById("SecondResult").style.borderBottom = "0px solid white";
        document.getElementById("ThirdResult").style.borderBottom = "0px solid white";
        document.getElementById("FourthResult").style.borderBottom = "0px solid white";
        document.getElementById("FifthResult").style.borderBottom = "0px solid white";
        document.getElementById("SixthResult").style.borderBottom = "0px solid white";

        document.getElementById("Rank1").style.display = "none";
        document.getElementById("Rank2").style.display = "none";
        document.getElementById("Rank3").style.display = "none";
        document.getElementById("Rank4").style.display = "none";
        document.getElementById("Rank5").style.display = "none";

    }
    else{
        document.getElementById("TitleAlbum").innerHTML = "Top Albums and Artist Info Located Below"

        let link = "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+ x +"&api_key=9f6a7f9aa4eb0f8cd5fa175ce60fa2fe&format=json";

        //Album 1-------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json()) //Get Album Name
            .then((out) => {
                document.getElementById("Name1").innerHTML = ("Album Name: " + out.topalbums.album[0].name);
                
        }).catch(document.getElementById("Name1").innerHTML = ("Album Name: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get PlayCount
            .then((out) => {
                document.getElementById("ArtistName1").innerHTML = "Playcount: " + (out.topalbums.album[0].playcount).toLocaleString();
                
        }).catch(document.getElementById("ArtistName1").innerHTML = ("Play Count: N/A"));

        fetch(link)
            .then(res => res.json()) //Get Album Cover
            .then((out) => {
                if(out.topalbums.album[0].image[3]["#text"] == ""){
                    document.getElementById("Image1").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image1").src = (out.topalbums.album[0].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image1").src = ("Images/NotFound.png"));
        //Album 1-------------------------------------------------------------------------------------------------------------------------------

        //Album 2-------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json()) //Get Album Name
            .then((out) => {
                document.getElementById("Name2").innerHTML = ("Album Name: " + out.topalbums.album[1].name);
                
        }).catch(document.getElementById("Name2").innerHTML = ("Album Name: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get PlayCount
            .then((out) => {
                document.getElementById("ArtistName2").innerHTML = "Playcount: " + (out.topalbums.album[1].playcount).toLocaleString();
                
        }).catch(document.getElementById("ArtistName2").innerHTML = ("Playcount: N/A"));

        fetch(link)
            .then(res => res.json()) //Get Album Cover
            .then((out) => {
                if(out.topalbums.album[1].image[3]["#text"] == ""){
                    document.getElementById("Image2").src = ("Images/NotFound.png"); 
                }
                else{
                document.getElementById("Image2").src = (out.topalbums.album[1].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image2").src = ("Images/NotFound.png"));
        //Album 2-------------------------------------------------------------------------------------------------------------------------------


        //Album 3-------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json()) //Get Album Name
            .then((out) => {
                document.getElementById("Name3").innerHTML = ("Album Name: " + out.topalbums.album[2].name);
                
        }).catch(document.getElementById("Name3").innerHTML = ("Album Name: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get PlayCount
            .then((out) => {
                document.getElementById("ArtistName3").innerHTML = "Playcount: " + (out.topalbums.album[2].playcount).toLocaleString();
                
        }).catch(document.getElementById("ArtistName3").innerHTML = ("Playcount: N/A"));

        fetch(link)
            .then(res => res.json()) //Get Album Cover
            .then((out) => {
                if(out.topalbums.album[2].image[3]["#text"] == ""){
                    document.getElementById("Image3").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image3").src = (out.topalbums.album[2].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image3").src = ("Images/NotFound.png"));
        //Album 3-------------------------------------------------------------------------------------------------------------------------------


        //Album 4-------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json()) //Get Album Name
            .then((out) => {
                document.getElementById("Name4").innerHTML = ("Album Name: " + out.topalbums.album[3].name);
                
        }).catch(document.getElementById("Name4").innerHTML = ("Album Name: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get PlayCount
            .then((out) => {
                document.getElementById("ArtistName4").innerHTML = "Playcount: " + (out.topalbums.album[3].playcount).toLocaleString();
                
        }).catch(document.getElementById("ArtistName4").innerHTML = ("Playcount: N/A"));

        fetch(link)
            .then(res => res.json()) //Get Album Cover
            .then((out) => {
                if(out.topalbums.album[3].image[3]["#text"] == ""){
                    document.getElementById("Image4").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image4").src = (out.topalbums.album[3].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image4").src = ("Images/NotFound.png"));
        //Album 4-------------------------------------------------------------------------------------------------------------------------------
    

        //Album 5-------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json()) //Get Album Name
            .then((out) => {
                document.getElementById("Name5").innerHTML = ("Album Name: " + out.topalbums.album[4].name);
                
        }).catch(document.getElementById("Name5").innerHTML = ("Album Name: Not Found"));

        fetch(link)
            .then(res => res.json())  //Get PlayCount
            .then((out) => {
                document.getElementById("ArtistName5").innerHTML = "Playcount: " + (out.topalbums.album[4].playcount).toLocaleString();
                
        }).catch(document.getElementById("ArtistName5").innerHTML = ("Playcount: N/A"));

        fetch(link)
            .then(res => res.json()) //Get Album Cover
            .then((out) => {
                if(out.topalbums.album[4].image[3]["#text"] == ""){
                    document.getElementById("Image5").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image5").src = (out.topalbums.album[4].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image5").src = ("Images/NotFound.png"));
        //Album 5-------------------------------------------------------------------------------------------------------------------------------


        //Artist Info-------------------------------------------------------------------------------------------------------------------------------
        

        let link2 = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+ x +"&api_key=9f6a7f9aa4eb0f8cd5fa175ce60fa2fe&format=json";
        
        fetch(link2)
            .then(res => res.json())  //Get Artist Name
            .then((out) => {
                document.getElementById("Name6").innerHTML = (out.artist.name) + "'s Bio:";
        
        }).catch(document.getElementById("Name6").innerHTML = ("Not Found"));
        
        
        fetch(link2)
            .then(res => res.json())  //Get Bio Summary
            .then((out) => {
                document.getElementById("ArtistName6").innerHTML = (out.artist.bio.summary);
        
        }).catch(document.getElementById("ArtistName6").innerHTML = ("Artist Information: Not Found"));
        
        fetch(link)
            .then(res => res.json()) //Get Album Cover
            .then((out) => {
                if(out.topalbums.album[0].image[3]["#text"] == ""){
                    document.getElementById("Image1").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image6").src = (out.topalbums.album[0].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image6").src = ("Images/NotFound.png"));

        
        
        //Artist Info-------------------------------------------------------------------------------------------------------------------------------
        
        document.getElementById("ArtistName6").style.marginRight = "20%";
        document.getElementById("ArtistName6").style.marginLeft = "20%";
        document.getElementById("ArtistName6").style.lineHeight = "25px";
        document.getElementById("ArtistName6").style.backgroundColor = "rgb(21, 28, 41)";
        document.getElementById("ArtistName6").style.paddingLeft = "20px";
        document.getElementById("ArtistName6").style.paddingTop = "20px";
        



        document.getElementById("Image1").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image2").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image3").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image4").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image5").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image6").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("ArtistName6").style.boxShadow = "0 0 25px rgb(64, 81, 120)";

        //Border to seperate Divs/Albums
        document.getElementById("FirstResult").style.borderBottom = "2px solid white";
        document.getElementById("SecondResult").style.borderBottom = "2px solid white";
        document.getElementById("ThirdResult").style.borderBottom = "2px solid white";
        document.getElementById("FourthResult").style.borderBottom = "2px solid white";
        document.getElementById("FifthResult").style.borderBottom = "2px solid white";
        
        
        //Padding for borders added to Divs/Albums
        document.getElementById("FirstResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("SecondResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("ThirdResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("FourthResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("FifthResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("SixthResult").style.padding = "2% 0% 0% 0%";

        document.getElementById("Rank1").style.display = "block";
        document.getElementById("Rank2").style.display = "block";
        document.getElementById("Rank3").style.display = "block";
        document.getElementById("Rank4").style.display = "block";
        document.getElementById("Rank5").style.display = "block";

        document.getElementById("Rank1").innerHTML = ("Rank: 1");
        document.getElementById("Rank2").innerHTML = ("Rank: 2");
        document.getElementById("Rank3").innerHTML = ("Rank: 3");
        document.getElementById("Rank4").innerHTML = ("Rank: 4");
        document.getElementById("Rank5").innerHTML = ("Rank: 5");
    }
}
//Artist--------------------------------------------------------------------------------------------------------





//Album--------------------------------------------------------------------------------------------------------------------------------------------------
function displayTextAlbum(){
    var x = document.getElementById("TextInputAlbum").value; //Grabs TextInput
    
    document.getElementById("TextInputSong").value = "";
    document.getElementById("TextInputArtist").value = "";
    document.getElementById("FinalImage").style.textAlign = "center";

    document.getElementById("ArtistName6").style.marginRight = "0%";
    document.getElementById("ArtistName6").style.marginLeft = "0%";
    document.getElementById("ArtistName6").style.lineHeight = "0px";
    document.getElementById("ArtistName6").style.backgroundColor = "rgb(12, 15, 22)";
    document.getElementById("ArtistName6").style.paddingLeft = "0px";
    document.getElementById("ArtistName6").style.paddingTop = "0px";
    document.getElementById("ArtistName6").style.boxShadow = "0 0 0px rgb(64, 81, 120)";

    if (x == ""){

        document.getElementById("TitleAlbum").innerHTML = "Search Above To Discover New Music";
        document.getElementById("Name1").innerHTML = "";
        document.getElementById("Image1").src = "";
        document.getElementById("ArtistName1").innerHTML = "";

        document.getElementById("Name2").innerHTML = "";
        document.getElementById("Image2").src = "";
        document.getElementById("ArtistName2").innerHTML = "";

        document.getElementById("Name3").innerHTML = "";
        document.getElementById("Image3").src = "";
        document.getElementById("ArtistName3").innerHTML = "";

        document.getElementById("Name4").innerHTML = "";
        document.getElementById("Image4").src = "";
        document.getElementById("ArtistName4").innerHTML = "";

        document.getElementById("Name5").innerHTML = "";
        document.getElementById("Image5").src = "";
        document.getElementById("ArtistName5").innerHTML = "";

        document.getElementById("Name6").innerHTML = "";
        document.getElementById("Image6").src = "";
        document.getElementById("ArtistName6").innerHTML = "";


        document.getElementById("Image1").style.border = "0px solid white";
        document.getElementById("Image2").style.border = "0px solid white";
        document.getElementById("Image3").style.border = "0px solid white";
        document.getElementById("Image4").style.border = "0px solid white";
        document.getElementById("Image5").style.border = "0px solid white";
        document.getElementById("Image6").style.border = "0px solid white";

        //Border to seperate Divs/Albums
        document.getElementById("FirstResult").style.borderBottom = "0px solid white";
        document.getElementById("SecondResult").style.borderBottom = "0px solid white";
        document.getElementById("ThirdResult").style.borderBottom = "0px solid white";
        document.getElementById("FourthResult").style.borderBottom = "0px solid white";
        document.getElementById("FifthResult").style.borderBottom = "0px solid white";
        document.getElementById("SixthResult").style.borderBottom = "0px solid white";
        
        document.getElementById("Rank1").style.display = "none";
        document.getElementById("Rank2").style.display = "none";
        document.getElementById("Rank3").style.display = "none";
        document.getElementById("Rank4").style.display = "none";
        document.getElementById("Rank5").style.display = "none";
        
    
    }
    else{
        document.getElementById("TitleAlbum").innerHTML = "Related Albums Located Below:"
        let link = "https://ws.audioscrobbler.com/2.0/?method=album.search&album=" + x +"&api_key=9f6a7f9aa4eb0f8cd5fa175ce60fa2fe&format=json";

        //1 Album------------------------------------------------------------------------------------------------------------------------------------------------------
        fetch(link)
            .then(res => res.json()) //Gets Album name
            .then((out) => {
                document.getElementById("Name1").innerHTML = "Album Name: " + (out.results.albummatches.album[0].name);
                
        }).catch(document.getElementById("Name1").innerHTML = ("Album: Not Found"));
        fetch(link)
            .then(res => res.json()) //Gets Album Image
            .then((out) => {
                if(out.results.albummatches.album[0].image[3]["#text"] == ""){
                    document.getElementById("Image1").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image1").src = (out.results.albummatches.album[0].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image1").src = ("Images/NotFound.png"));
        fetch(link)
            .then(res => res.json()) //Gets Album Artist
            .then((out) => {
                document.getElementById("ArtistName1").innerHTML = "Artist: " + (out.results.albummatches.album[0].artist);
            
        }).catch(document.getElementById("ArtistName1").innerHTML = ("Artist: Not Found"));
        //1 Album------------------------------------------------------------------------------------------------------------------------------------------------------



        //2 Album------------------------------------------------------------------------------------------------------------------------------------------------------

        fetch(link)
            .then(res => res.json()) //Gets Album name
            .then((out) => {
                document.getElementById("Name2").innerHTML = "Album Name: " + (out.results.albummatches.album[1].name);
                
        }).catch(document.getElementById("Name2").innerHTML = ("Album: Not Found"));
        fetch(link)
            .then(res => res.json()) //Gets Album Image
            .then((out) => {
                if(out.results.albummatches.album[1].image[3]["#text"] == ""){
                    document.getElementById("Image2").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image2").src = (out.results.albummatches.album[1].image[3]["#text"]);
            }
        }).catch(document.getElementById("Image2").src = ("Images/NotFound.png"));
        fetch(link)
            .then(res => res.json()) //Gets Album Artist
            .then((out) => {
                document.getElementById("ArtistName2").innerHTML = "Artist: " + (out.results.albummatches.album[1].artist);
            
        }).catch(document.getElementById("ArtistName2").innerHTML = ("Artist: Not Found"));
        //2 Album------------------------------------------------------------------------------------------------------------------------------------------------------



        //3 Album------------------------------------------------------------------------------------------------------------------------------------------------------

        fetch(link)
            .then(res => res.json()) //Gets Album name
            .then((out) => {
                document.getElementById("Name3").innerHTML = "Album Name: "  + (out.results.albummatches.album[2].name);
                
        }).catch(document.getElementById("Name3").innerHTML = ("Album: Not Found"));
        fetch(link)
            .then(res => res.json()) //Gets Album Image
            .then((out) => {

                if (out.results.albummatches.album[2].image[3]["#text"] == ""){
                    document.getElementById("Image3").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image3").src = (out.results.albummatches.album[2].image[3]["#text"]);
            }
        }).catch(document.getElementById("Image3").src = ("Images/NotFound.png"));
        fetch(link)
            .then(res => res.json()) //Gets Album Artist
            .then((out) => {
                document.getElementById("ArtistName3").innerHTML = "Artist: " + (out.results.albummatches.album[2].artist);
            
        }).catch(document.getElementById("ArtistName3").innerHTML = ("Artist: Not Found"));
        //3 Album------------------------------------------------------------------------------------------------------------------------------------------------------


        //4 Album------------------------------------------------------------------------------------------------------------------------------------------------------

        fetch(link)
            .then(res => res.json()) //Gets Album name
            .then((out) => {
                document.getElementById("Name4").innerHTML = "Album Name: "  + (out.results.albummatches.album[3].name);
                
        }).catch(document.getElementById("Name4").innerHTML = ("Album: Not Found"));
        fetch(link)
            .then(res => res.json()) //Gets Album Image
            .then((out) => {
                if(out.results.albummatches.album[3].image[3]["#text"] == ""){
                    document.getElementById("Image4").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image4").src = (out.results.albummatches.album[3].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image4").src = ("Images/NotFound.png"));
        fetch(link)
            .then(res => res.json()) //Gets Album Artist
            .then((out) => {
                document.getElementById("ArtistName4").innerHTML = "Artist: " + (out.results.albummatches.album[3].artist);
            
        }).catch(document.getElementById("ArtistName4").innerHTML = ("Artist: Not Found"));
        //4 Album------------------------------------------------------------------------------------------------------------------------------------------------------


        //5 Album------------------------------------------------------------------------------------------------------------------------------------------------------

        fetch(link)
            .then(res => res.json()) //Gets Album name
            .then((out) => {
                document.getElementById("Name5").innerHTML = "Album Name: "  + (out.results.albummatches.album[4].name);
                
        }).catch(document.getElementById("Name5").innerHTML = ("Album: Not Found"));
        fetch(link)
            .then(res => res.json()) //Gets Album Image
            .then((out) => {
                
                if(out.results.albummatches.album[4].image[3]["#text"]==""){
                    document.getElementById("Image5").src = ("Images/NotFound.png")
                }
                else{
                document.getElementById("Image5").src = (out.results.albummatches.album[4].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image5").src = ("Images/NotFound.png"));
        fetch(link)
            .then(res => res.json()) //Gets Album Artist
            .then((out) => {
                document.getElementById("ArtistName5").innerHTML = "Artist: " + (out.results.albummatches.album[4].artist);
            
        }).catch(document.getElementById("ArtistName5").innerHTML = ("Artist: Not Found"));
        //5 Album------------------------------------------------------------------------------------------------------------------------------------------------------


        //6 Album------------------------------------------------------------------------------------------------------------------------------------------------------

        fetch(link)
            .then(res => res.json()) //Gets Album name
            .then((out) => {
                document.getElementById("Name6").innerHTML = "Album Name: "  + (out.results.albummatches.album[5].name);
    
        }).catch(document.getElementById("Name6").innerHTML = ("Album: Not Found"));
        fetch(link)
            .then(res => res.json()) //Gets Album Image
            .then((out) => {
                if(out.results.albummatches.album[5].image[3]["#text"]==""){
                    document.getElementById("Image6").src = ("Images/NotFound.png");
                }
                else{
                document.getElementById("Image6").src = (out.results.albummatches.album[5].image[3]["#text"]);
                }
        }).catch(document.getElementById("Image6").src = ("Images/NotFound.png"));
        fetch(link)
            .then(res => res.json()) //Gets Album Artist
            .then((out) => {
                document.getElementById("ArtistName6").innerHTML = "Artist: " + (out.results.albummatches.album[5].artist);
            
        }).catch(document.getElementById("ArtistName6").innerHTML = ("Artist: Not Found"));
        //6 Album------------------------------------------------------------------------------------------------------------------------------------------------------

        //Shadow for Album images

        document.getElementById("Image1").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image2").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image3").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image4").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        document.getElementById("Image5").style.boxShadow = "0 0 25px rgb(64, 81, 120)";
        

        //Border to seperate Divs/Albums
        document.getElementById("FirstResult").style.borderBottom = "2px solid white";
        document.getElementById("SecondResult").style.borderBottom = "2px solid white";
        document.getElementById("ThirdResult").style.borderBottom = "2px solid white";
        document.getElementById("FourthResult").style.borderBottom = "2px solid white";
        document.getElementById("FifthResult").style.borderBottom = "2px solid white";
        
        
        //Padding for borders added to Divs/Albums
        document.getElementById("FirstResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("SecondResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("ThirdResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("FourthResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("FifthResult").style.padding = "2% 0% 0% 0%";
        document.getElementById("SixthResult").style.padding = "2% 0% 0% 0%";

        document.getElementById("Rank1").style.display = "none";
        document.getElementById("Rank2").style.display = "none";
        document.getElementById("Rank3").style.display = "none";
        document.getElementById("Rank4").style.display = "none";
        document.getElementById("Rank5").style.display = "none";
        
    }

}
