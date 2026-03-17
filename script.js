document.addEventListener('DOMContentLoaded', () => {

    const leaveBtn = document.querySelector('.Leavebtn');
    if (leaveBtn) {
        leaveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.querySelector('.leavename').value;
            if (name) {
                alert(`Thank you ${name}, your comment has been posted!`);
                document.querySelectorAll('.leavename, .leavename1').forEach(input => input.value = '');
            } else {
                alert("Please fill in your name before posting.");
            }
        });
    }

    const messageBtn = document.querySelector('.message');
    if (messageBtn) {
        messageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Message Sent! We will contact you shortly.");
        });
    }


    const links = document.querySelectorAll('.list1 a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    const courseCards = document.querySelectorAll('.one');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = "#ff9d00";
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = "transparent";
        });
    });


    const visitBtn = document.querySelector('.btn1');
    if (visitBtn) {
        visitBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 800,
                behavior: 'smooth'
            });
        });
    }
});
function SendMail() {
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_y61pywn";
    const templateID = "template_ehmcfpb";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("from_name").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Success! Aapka message Harsh ke paas bhej diya gaya hai.");
    })
    .catch(err => console.log(err));
}
function SendBlogComment() {
    var params = {
        from_name: document.getElementById("blog_user_name").value,
        email_id: document.getElementById("blog_user_email").value,
        subject: "New Blog Comment", 
        message: document.getElementById("blog_comment").value
    };

    const serviceID = "service_y61pywn"; 
    const templateID = "template_ehmcfpb";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("blog_user_name").value = "";
        document.getElementById("blog_user_email").value = "";
        document.getElementById("blog_comment").value = "";
        alert("Success! Aapka comment Harsh ke paas bhej diya gaya hai.");
    })
    .catch(err => console.log(err));
}