function SetupInitialTimeline() {
   anime.timeline()
       .add({
          targets: ".line",
          scaleX: [0, 1],
          easing: "easeInOutExpo",
          duration: 700,
          opacity: [0.5,1],
          delay: 1800
       })
       .add({
          targets: ".title",
          opacity: [0, 1],
          translateY: [20,0],
          duration: 1000,
          offset: '-=200'
       })
       .add({
          targets: ".icon-group",
          opacity: [0, 1],
          translateY: [-20,0],
          easing: "easeOutBack",
          duration: 600,
          offset: '-=550'
       })
}

$(document).ready(async () => {
    await VANTA.NET({
        el: ".title-section",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1,
        scaleMobile: 1.00,
    });
    sal({
        threshold: 0.01
    });
    SetupInitialTimeline();
   /*
    $(window).on('scroll', animateSection);
    function animateSection() {
        let divider_height = Math.min(($(window).scrollTop()-(screen.height/4))/3.8, 140);

        $(".footer").css("border-bottom-width", divider_height)
    }

     */
});