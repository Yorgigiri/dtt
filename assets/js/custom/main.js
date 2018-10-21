import $ from "jquery";
import 'slick-carousel';
import MicroModal from 'micromodal';

$('#carousel').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 20000,
    speed: 300,
    slidesToShow: 1,
});

// Initial config for setting up modals
MicroModal.init({
    openTrigger: 'data-micromodal-trigger',
    disableScroll: false,
    awaitCloseAnimation: true
});
