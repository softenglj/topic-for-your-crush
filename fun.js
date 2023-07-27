const affirmations = [
    "Do you have any tattoos?",
    "Do you have any pets? What are their names?",
    "Anong favorite mong number sa electric fan?",
    "Where’s the most beautiful place you’ve ever been?",
    "What’s your favorite color?",
    "What’s your favorite song?",
    "Do you think you're an introvert or an extrovert?",
    "What's your strangest hidden talent?",
    "Where do you want to be in five years?",
    "What's the strangest dream you've had recently?",
    "Would you rather be really hot or really cold?",
    "What's your favorite sport?",
    "Do you have any nicknames?",
    "Do you like to cook?",
    "What are the top three things on your bucket list?",
    "What's the biggest risk you've ever taken?",
    "When are you the most happy?",
    "What always calms you down when you're really stressed out and upset?",
    "Tell me the story of your first love.",
    "What's the one (what if) that keeps you awake a night?",
    "What makes you happiest?",
    "Do you have any regrets about the past year?",
    "Is there a song that makes you think of me?",
    "What is your favorite quote?",
    "What was something that made you laugh today?",
    "Would you rather visit the future or the past?And why?",
    "What color would you choose to describe me?",
    "What color would you choose to describe yourself?",
    "What's your favorite comfort food?",
    "Do you love me?",
    "When we're apart, what do you miss most about me?",
    "What are your weird habits?",
    "What music do you like?",
    "Which is your favorite drink?",
    "What is your weirdest fear?",
    "What do you look for in a partner?",
    "Do you prefer calling or texting?or Me?",
    "What is on your bucket list?"

];

// Function to generate a random affirmation
function generateAffirmation() {
    const affirmationElement = document.getElementById("topic");
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];
    affirmationElement.textContent = affirmation;

    // Enable the copy button once an affirmation is generated
    const copyButton = document.getElementById("copyButton");
    copyButton.disabled = false;
}

// Function to copy the affirmation text to the clipboard
function copyAffirmation() {
    const affirmationElement = document.getElementById("topic");
    const textToCopy = affirmationElement.textContent;

    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    //alert("already copy");
}