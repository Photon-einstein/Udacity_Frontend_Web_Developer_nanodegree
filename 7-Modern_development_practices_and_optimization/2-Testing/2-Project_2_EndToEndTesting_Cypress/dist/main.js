require("./main.css");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
//Webpack Entry Point
const $e847cba02c7a3962$export$86c051ebf7b4c215 = ()=>{
    let main = document.querySelector("main");
    console.log(main);
    main.innerHTML = "";
};
const $e847cba02c7a3962$export$ae3548c7b74a8dbc = (packageSlections)=>{
    let subtotal = packageSlections.reduce((accumulator, item)=>{
        const itemTotal = item.copies * item.basePricePerCopy;
        return accumulator + itemTotal;
    }, 0);
    //returns a subtotal price
    return subtotal;
};


const $57cd52f44a54f1f8$export$29b010004a948d8 = ()=>{
    (0, $e847cba02c7a3962$export$86c051ebf7b4c215)();
    console.log("Home");
    document.querySelector("main").innerHTML = `

  <div class="parallax">
    <h1>Professional Phography</h1>
  </div>

  <div class="content">
    <h1>Affordable Prices</h1>
  </div>

  <div class="parallax">
    <h1>Beautify your Life</h1>
  </div>
   <div class="content">
    <button>CONTACT</button>
  </div>

`;
};




var $84e2248924a8b0a8$exports = {};
$84e2248924a8b0a8$exports = new URL("city.8837fddd.png", "file:" + __filename).toString();


var $76b90aabdda8d097$exports = {};
$76b90aabdda8d097$exports = new URL("city2.d484ec0d.png", "file:" + __filename).toString();


var $947244d6989f9873$exports = {};
$947244d6989f9873$exports = new URL("greatPlainsLandscape.bc290e94.png", "file:" + __filename).toString();


var $b165c7d19822493c$exports = {};
$b165c7d19822493c$exports = new URL("lilipads.bc19299c.png", "file:" + __filename).toString();


var $d9c2f1049d2b03e5$exports = {};
$d9c2f1049d2b03e5$exports = new URL("ocean.2b1c4dd5.png", "file:" + __filename).toString();


var $19b1d0372d02d422$exports = {};
$19b1d0372d02d422$exports = new URL("portrait1.028f10b9.png", "file:" + __filename).toString();


var $2ae47d1a9d85e8ea$exports = {};
$2ae47d1a9d85e8ea$exports = new URL("portrate1.447e20c1.png", "file:" + __filename).toString();


var $b4f8cb97e327abe9$exports = {};
$b4f8cb97e327abe9$exports = new URL("snowCoveredMountain.e6d8e135.png", "file:" + __filename).toString();


var $7da6995b208cdb3c$exports = {};
$7da6995b208cdb3c$exports = new URL("street.feaae8d8.png", "file:" + __filename).toString();


const $547b6503c118581f$var$images = [
    (0, (/*@__PURE__*/$parcel$interopDefault($84e2248924a8b0a8$exports))),
    (0, (/*@__PURE__*/$parcel$interopDefault($76b90aabdda8d097$exports))),
    (0, (/*@__PURE__*/$parcel$interopDefault($947244d6989f9873$exports))),
    (0, (/*@__PURE__*/$parcel$interopDefault($b165c7d19822493c$exports))),
    (0, (/*@__PURE__*/$parcel$interopDefault($d9c2f1049d2b03e5$exports))),
    (0, (/*@__PURE__*/$parcel$interopDefault($19b1d0372d02d422$exports))),
    (0, (/*@__PURE__*/$parcel$interopDefault($2ae47d1a9d85e8ea$exports))),
    (0, (/*@__PURE__*/$parcel$interopDefault($b4f8cb97e327abe9$exports))),
    (0, (/*@__PURE__*/$parcel$interopDefault($7da6995b208cdb3c$exports)))
];
const $547b6503c118581f$export$3ae31bde10cbcb0f = ()=>{
    (0, $e847cba02c7a3962$export$86c051ebf7b4c215)();
    const div = document.createElement("div");
    div.className = "container";
    div.dataset.cy = "container";
    $547b6503c118581f$var$images.map((url, idx)=>{
        const image = document.createElement("img");
        image.src = url;
        //Adds the data attribute to our images
        image.dataset.cy = `image${idx}`;
        image.className = "gallery";
        div.appendChild(image);
    });
    document.querySelector("main").appendChild(div);
};



const $c13362bdef54a4c4$export$a20c150d616c748b = ()=>{
    (0, $e847cba02c7a3962$export$86c051ebf7b4c215)();
    const photoData = [
        {
            type: "portrait",
            size: "4\" x 6\"",
            basePricePerCopy: 0.50
        },
        {
            type: "portrait",
            size: "8\" x 10\"",
            basePricePerCopy: 1.50
        },
        {
            type: "portrait",
            size: "11\" x 14\"",
            basePricePerCopy: 3.00
        },
        {
            type: "landscape",
            size: "5\" x 7\"",
            basePricePerCopy: 0.75
        },
        {
            type: "landscape",
            size: "16\" x 20\"",
            basePricePerCopy: 10.00
        },
        {
            type: "panorama",
            size: "12\" x 36\"",
            basePricePerCopy: 5.00
        },
        {
            type: "square",
            size: "6\" x 6\"",
            basePricePerCopy: 1.00
        },
        {
            type: "passport",
            size: "2\" x 2\"",
            basePricePerCopy: 0.25
        },
        {
            type: "poster",
            size: "24\" x 36\"",
            basePricePerCopy: 15.00
        },
        {
            type: "wallet",
            size: "2.5\" x 3.5\"",
            basePricePerCopy: 0.20
        }
    ];
    const form1 = $c13362bdef54a4c4$var$renderPriceEstimateForm(photoData);
    form1.addEventListener('submit', (e)=>{
        const photoArray = $c13362bdef54a4c4$var$handleCalculatePrice(e);
        console.log(photoArray);
        const total = (0, $e847cba02c7a3962$export$ae3548c7b74a8dbc)(photoArray);
        console.log(total);
        const h2 = document.createElement('h2');
        h2.textContent = `Photo Package Price Estimate $${total.toFixed(2)}`;
        h2.dataset.cy = "priceEstimate";
        console.log(h2);
        document.querySelector('main').append(h2);
    });
    document.querySelector('main').append(form1);
};
const $c13362bdef54a4c4$var$renderPriceEstimateForm = (photoData)=>{
    // Create the form element
    const form1 = document.createElement("form");
    form1.id = "form";
    form1.dataset.cy = 'packagePriceForm';
    // Add a heading to the form
    const heading = document.createElement("h2");
    heading.textContent = "Price Estimate Form";
    form1.appendChild(heading);
    // Loop through the photo data to create form fields
    photoData.forEach((photo, index)=>{
        // Create a container for each photo type
        const container = document.createElement("div");
        container.className = "photo-option";
        // Create a label for the photo type and size
        const label = document.createElement("label");
        const uniqueId = `photo-${index}`; // Generate a unique id
        label.htmlFor = uniqueId;
        label.textContent = `${photo.type} (${photo.size}) - $${photo.basePricePerCopy.toFixed(2)} per copy`;
        // Create a number input for the number of copies
        const input = document.createElement("input");
        input.type = "number";
        input.name = `copies-${photo.type}-${photo.size}`;
        input.id = uniqueId;
        input.min = 0; // Prevent negative numbers
        input.placeholder = "Enter number of copies";
        // Append the label and input to the container
        container.appendChild(label);
        container.appendChild(input);
        // Append the container to the form
        form1.appendChild(container);
    });
    // Add a submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Calculate Price";
    form1.appendChild(submitButton);
    // Return the form element
    return form1;
};
const $c13362bdef54a4c4$var$handleCalculatePrice = (e)=>{
    //Prevents forms default behavor to refresh the page
    e.preventDefault();
    const photoArray = [];
    //Selects all of the inputs from the form
    const inputs = e.target.querySelectorAll("input[type='number']");
    //Iterates through the form
    inputs.forEach((input)=>{
        //Gets the lable for the form
        const label = form.querySelector(`label[for="${input.id}"]`);
        //Checks the input for a value 
        //If found keys and values will be estracted form the lable and input
        if (label && input.value > 0) {
            const labelText = label.textContent;
            const [type, details] = labelText.split(" (");
            const [size, priceText] = details.split(") - $");
            const basePricePerCopy = parseFloat(priceText.split(" ")[0]);
            //photo object created and formated 
            const photoOrder = {
                type: type.trim(),
                size: size.trim(),
                copies: parseInt(input.value, 10),
                basePricePerCopy: basePricePerCopy
            };
            //added to photo array
            photoArray.push(photoOrder);
        }
    });
    return photoArray;
};


// Navigation logic
const $3c71628785a6e26b$var$addListenerToNavigation = ()=>{
    $3c71628785a6e26b$var$addNavListener("homePage", (0, $57cd52f44a54f1f8$export$29b010004a948d8));
    $3c71628785a6e26b$var$addNavListener("galleryPage", (0, $547b6503c118581f$export$3ae31bde10cbcb0f));
    $3c71628785a6e26b$var$addNavListener("pricePage", (0, $c13362bdef54a4c4$export$a20c150d616c748b));
};
// Helper function to add event listeners to navigation items
const $3c71628785a6e26b$var$addNavListener = (elementId, callback)=>{
    const element = document.getElementById(elementId);
    if (element) element.addEventListener("click", callback);
};
const $3c71628785a6e26b$export$239229831f973f6d = ()=>{
    $3c71628785a6e26b$var$addListenerToNavigation();
};






(0, $3c71628785a6e26b$export$239229831f973f6d)();
(0, $57cd52f44a54f1f8$export$29b010004a948d8)();


//# sourceMappingURL=main.js.map
