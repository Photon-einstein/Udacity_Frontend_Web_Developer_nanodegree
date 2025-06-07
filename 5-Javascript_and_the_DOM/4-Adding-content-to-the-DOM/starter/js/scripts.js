const rebuildOtter = async() => {
    // Write your code here
    // Add title class to the header
    const titleDiv = document.querySelector('body').firstElementChild
    titleDiv.classList.add('title')
    // Add card container if to the section div
    const sectionDiv = document.querySelector('section');
    sectionDiv.id = 'cardContainer'
    // Create profile card
    const profileCardDiv = document.createElement('div')
    profileCardDiv.classList.add('profileCard')
    // Create div for profile picture
    const pictureFrameDiv = document.createElement('div')
    pictureFrameDiv.classList.add('picFrame')
    // Create image inside class 'picframe' of div
    const imgDiv = document.createElement('img')
    imgDiv.src = "./images/otter_profile.webp"
    imgDiv.alt = "'profilePic"
    // append imgDiv into pictureFrameDiv and the last one into profileCardDiv
    pictureFrameDiv.append(imgDiv)
    profileCardDiv.append(pictureFrameDiv)
    // Create div with class 'userInfo'
    const userInfoDiv = document.createElement('div')
    userInfoDiv.classList.add('userInfo')
    // Add content to div with class 'userInfo'
    const simpleDiv = document.createElement('div')
    const header2 = document.createElement('h2')
    const paragraph = document.createElement('p')
    paragraph.textContent = "Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are\
                        Frappuccinos and fish."
    simpleDiv.append(header2)
    simpleDiv.append(paragraph)
    userInfoDiv.append(simpleDiv)
    // Create simple div with button
    const buttonDiv = document.createElement('div')
    const button = document.createElement('button')
    button.classList.add('active')
    button.textContent="Online now!"
    buttonDiv.append(button)
    // Add button to div with 'userInfo' class
    userInfoDiv.append(buttonDiv)
    // userInfoDiv to profileCardDiv
    profileCardDiv.append(userInfoDiv)
    // create document fragment
    const documentFragment = document.createDocumentFragment()
    documentFragment.append(profileCardDiv)
    // add new document fragment to the already existing section div
    sectionDiv.append(documentFragment)
}

rebuildOtter();
