

let selectedInfluncers;
let influencerName=null;
const selectedNamePara = document.getElementById("selectedInfluncerName");
const cardWrapper=document.getElementById('cardGridWrapper');
const submitbtnwrapper=document.getElementById('submitSection');
const myformactive=document.getElementById('myformactive');
const modalwrapper = document.getElementById("customModal");



document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll(".card-influncer").forEach((card)=>{
        card.addEventListener("click",()=>{
            const id=card.getAttribute("data-id");
            influencerName = card.querySelector(".influencer-name-label")?.textContent.trim();
            // console.log(influencerName)
            // console.log("Selected Influncer ID:",id);

            const previouslySelected = document.querySelector(".card-influncer.selected");
            if (previouslySelected && previouslySelected !== card) {
                previouslySelected.classList.remove("selected");
            }
            console.log("Pre",previouslySelected);
            card.classList.toggle("selected")
                
            if(card.classList.contains("selected")){
                selectedInfluncers=id
            }
            else{
                selectedInfluncers=null;
            }

            console.log("Selected Influncer",selectedInfluncers);

            

            if (selectedInfluncers) {
                const submitSection = document.getElementById("submitSection");
                submitSection?.scrollIntoView({ behavior: "smooth" });

                selectedNamePara.style.display = "block";
                selectedNamePara.textContent = `You've selected ${influencerName} as your influencer.`;
              }else{
                selectedNamePara.style.display = "none";
                influencerName=null;
              }
            console.log("Selected Influncers:",selectedInfluncers);
        })
    })
})

document.getElementById('submitSelectionBtn').addEventListener('click',()=>{
    const selectednameofInfluncer=selectedInfluncers;

    if(influencerName===null){
        alert("Please select an influencer before submitting.");
        return;
    }

    document.getElementById('namefromform').value=influencerName;


    cardWrapper.style.display="none";
    submitbtnwrapper.style.display="none";
    myformactive.style.display="block";
    
    console.log("Card Wrapper",cardWrapper);


    console.log("Submitting Influuncer",influencerName)
})




emailjs.init("xJ0yLHzAyCU0nUx1n"); // Replace with your actual user ID

function sendForm(e) {
  // Prevent default form submission
  e.preventDefault(e); 
  const form = document.getElementById('contact-form');
  // Prevent the default form submission
  if (!form) {
    console.error("Form element not found!");
    return;
  }

  // Collect form data manually into a params object
  const params = {
    name: form.namefromform.value,
    phone: form.phone.value,
    subject: form.subject.value,
    additional_details: form.additional_details.value,

    // Add other form fields here
    email: form.email.value,
    // message: form.message.value,
  };

  console.log("These are the Form Fields",params)

 
  emailjs.send("service_uvj6sld", "template_p4jsiuo", params)
    // console.log(params)
    .then(function (response) {
      console.log("Success:", response);
    //   modalwrapper.style.display="none";
    //   resetModal()
      // Show success message
      document.querySelector(".contact-form-success").classList.remove("d-none");
    },);
}


function resetModal(){
    const previouslySelected = document.querySelector(".card-influncer.selected");
    selectedNamePara.style.display = "none";
    previouslySelected.classList.remove("selected");
    cardWrapper.style.display="grid";
    influencerName=null;
    selectedInfluncers=undefined;
    submitbtnwrapper.style.display="flex";
    myformactive.style.display="none";
}

document.getElementById('closeCustomModalBtn').addEventListener('click',resetModal)





