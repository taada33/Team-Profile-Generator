const fs = require('fs');


const css = `body{
    background-color: rgb(250, 250, 250);
}


header{
    background-color: rgb(253, 102, 102);
    padding: 5px;
    color: white;
    text-align: center;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#team-container{
    margin-top: 125px;
    margin-left: 400px; 
    margin-right: 400px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

}

#employee-container{
    background-color: rgb(241, 241, 241);
    width: 200px;
    height: 240px;
    border: 1px solid black;
    box-shadow: 1px 1px 1px 0px;
}

h3{
    background-color: rgb(31, 143, 255);
    background-size: 0px;
    /* padding-left: 10px; */
    color: white;
    width: 100%;
    margin-top: 0;

    /* padding: 7px; */
    /* padding-right: 70px; */
    line-height: 25px;
    padding-bottom: 20px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    /* display:inline; */
}

span{
    padding-left: 15px;
}

i{
    padding-top: 10px;
    padding-left: 15px;
}

p{
    width: 150px;
    background-color: white;
    margin-left: 12px;
    padding-left: 5px;
    padding:8px;
    line-height: 25px;
    font-size: 10px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
    border: 1px solid black;
}
`
generateCss = () => {
    fs.writeFile("..\\Team-Profile-Generator\\dist\\style.css", css, (err) => err ? console.error(err) : console.log('CSS generated!'));
}

module.exports = generateCss;