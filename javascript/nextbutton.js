i = 0;

function start()
{
    ++i;
    
    if(i == 1) 
    {
        document.getElementsByClassName('card')[0].innerHTML = `
         <div class="card m-5">
            <div class="card-body shadow-sm p-4">
        <div class="row">
        <div class="col p-5">
            <form action="#">
                <h2 class="mb-4 text1">The correct sequence of HTML tags for starting a webpage is -</h2>
                <div class="form-group pl-3">
                    <input type="radio" id="one" name="one" class="form-check-input" value="2" required>
                    <label for="one" class="btn">Head, Title, HTML, body</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="two" name="one" class="form-check-input" value="2" required>
                    <label for="two" class="btn">HTML, Body, Title, Head</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="three" name="one" class="form-check-input" value="2" required>
                    <label for="three" class="btn">HTML, Head, Title, Body</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="four" name="one" class="form-check-input" value="1" required>
                    <label for="four" class="btn">HTML, Head, Title, Body</label>
                </div>
                <button type="submit" class="btn shadow-none btn-outline-none my-3" onclick="ans()">Submit</button>
            </form>
        </div>
        <div class="col">
            <div class="box">
            <img src="./image/body.png" alt="Html image here" class="w-100">
        </div>
        </div>
        </div>
        </div>`;
    }   
    else if(i == 2)
    {
        document.getElementsByClassName('card')[0].innerHTML = `
         <div class="card m-5">
            <div class="card-body shadow-sm p-4">
        <div class="row">
        <div class="col p-5">
            <form action="#">
                <h2 class="mb-4 text1">Which of the following tag is used for inserting the largest heading in HTML?</h2>
                <div class="form-group pl-3">
                    <input type="radio" id="one" name="one" class="form-check-input" value="2" required>
                    <label for="one" class="btn">&lt; h3 &gt;</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="two" name="one" class="form-check-input" value="1" required>
                    <label for="two" class="btn">&lt; h1 &gt;</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="three" name="one" class="form-check-input" value="2" required>
                    <label for="three" class="btn">&lt; h5 &gt;</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="four" name="one" class="form-check-input" value="2" required>
                    <label for="four" class="btn">&lt; h6 &gt;</label>
                </div>
                <button type="submit" class="btn shadow-none btn-outline-none my-3" onclick="ans()">Submit</button>
            </form>
        </div>
        <div class="col">
            <div class="box">
            <img src="./image/heading.png" alt="Html image here" class="w-100">
        </div>
        </div>
        </div>
        </div>`;
    }
    else if(i == 3)
    {
        document.getElementsByClassName('card')[0].innerHTML = `
         <div class="card m-5">
            <div class="card-body shadow-sm p-4">
        <div class="row">
        <div class="col p-5">
            <form action="#">
                <h2 class="mb-4 text1">How to create a hyperlink in HTML?</h2>
                <div class="form-group pl-3">
                    <input type="radio" id="one" name="one" class="form-check-input" value="1" required>
                    <label for="one" class="btn">&lt;a href = "www.javatpoint.com"&gt;  javaTpoint.com &lt;/a&gt; </label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="two" name="one" class="form-check-input" value="2" required>
                    <label for="two" class="btn">&lt;a url = "www.javatpoint.com" javaTpoint.com /a&gt;</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="three" name="one" class="form-check-input" value="2" required>
                    <label for="three" class="btn">&lt;a link = "www.javatpoint.com"&gt; javaTpoint.com &lt;/a&gt;</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="four" name="one" class="form-check-input" value="2" required>
                    <label for="four" class="btn">&lt;a "&gt;  www.javatpoint.com &lt;javaTpoint.com /a&gt;</label>
                </div>
                <button type="submit" class="btn shadow-none btn-outline-none my-3" onclick="ans()">Submit</button>
            </form>
        </div>
        <div class="col">
            <div class="box">
            <img src="./image/hyperlink.png" alt="Html image here" class="w-100">
        </div>
        </div>
        </div>
        </div>`;
    }
    else if(i == 4)
    {
        document.getElementsByClassName('card')[0].innerHTML = `
         <div class="card m-5">
            <div class="card-body shadow-sm p-4">
        <div class="row">
        <div class="col p-5">
            <form action="#">
                <h2 class="mb-4 text1">How to insert an image in HTML?</h2>
                <div class="form-group pl-3">
                    <input type="radio" id="one" name="one" class="form-check-input" value="2" required>
                    <label for="one" class="btn"> &lt;img href = "jtp.png" /&gt; </label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="two" name="one" class="form-check-input" value="2" required>
                    <label for="two" class="btn">&lt;img url = "jtp.png" &gt; </label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="three" name="one" class="form-check-input" value="2" required>
                    <label for="three" class="btn">&lt;img link = "jtp.png" &gt; </label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="four" name="one" class="form-check-input" value="1" required>
                    <label for="four" class="btn">&lt;img src = "jtp.png"&gt; </label>
                </div>
                <button type="submit" class="btn shadow-none btn-outline-none my-3" onclick="ans()">Submit</button>
            </form>
        </div>
        <div class="col">
            <div class="box">
            <img src="./image/imageinsert.png" alt="Html image here" class="w-100">
        </div>
        </div>
        </div>
        </div>`;
    }
    else if(i == 5)
    {
        document.getElementsByClassName('card')[0].innerHTML = `
         <div class="card m-5">
            <div class="card-body shadow-sm p-4">
        <div class="row">
        <div class="col p-5">
            <form action="#">
                <h2 class="mb-4 text1">How to create a checkbox in HTML?</h2>
                <div class="form-group pl-3">
                    <input type="radio" id="one" name="one" class="form-check-input" value="2" required>
                    <label for="one" class="btn"> &lt;input type = "checkbox" /&gt;</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="two" name="one" class="form-check-input" value="2" required>
                    <label for="two" class="btn">&lt;input type = "button"" /&gt;</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="three" name="one" class="form-check-input" value="1" required>
                    <label for="three" class="btn">&lt;checkbox /&gt;</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="four" name="one" class="form-check-input" value="2" required>
                    <label for="four" class="btn">&lt;input type = "check" /&gt;</label>
                </div>
                <button type="submit" class="btn shadow-none btn-outline-none my-3" onclick="ans()">Submit</button>
            </form>
        </div>
        <div class="col">
            <div class="box">
            <img src="./image/checkbox.png" alt="Html image here" class="w-100">
        </div>
        </div>
        </div>
        </div>`;
       
    }
    else if(i == 6) 
    {
        document.getElementsByClassName('card')[0].innerHTML = `
         <div class="card m-5">
            <div class="card-body shadow-sm p-4">
        <div class="row">
        <div class="col p-5">
            <form action="#">
                <h2 class="mb-4" id="myText">HTML stands for -</h2>
                <div class="form-group pl-3">
                    <input type="radio" id="one" name="one" class="form-check-input" value="2" required>
                    <label for="one" class="btn"> HighText Machine Language</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="two" name="one" class="form-check-input" value="2" required>
                    <label for="two" class="btn">HyperText and links Markup Language</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="three" name="one" class="form-check-input" value="1" required>
                    <label for="three" class="btn">HyperText Markup Language</label>
                </div>
                <div class="form-group pl-3">
                    <input type="radio" id="four" name="one" class="form-check-input" value="2" required>
                    <label for="four" class="btn">None of these</label>
                </div>
                <button type="submit" class="btn shadow-none btn-outline-none my-3" onclick="ans()">Submit</button>
            </form>
        </div>
        <div class="col">
            <div class="box">
            <img src="./image/html.png" alt="Html image here" class="w-100">
        </div>
        </div>
    </div>
    </div>`;
    i=0;
    } 
}