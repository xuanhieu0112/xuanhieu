$(document).ready(function () {
  let body = $("body");

  ////*****========== HEADER ========== *****////

  //Header .masthead button.btn-logo + .right-nav
  //======== Enable and DisableScroll
  function enableScroll() {
    window.onscroll = function () {};
  }
  function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
      // if any scroll is attempted, set this to the previous value
      (window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      });
  }
  //--//Open right-nav
  let right_nav_width = $(".right-nav").width();
  $("button.btn-logo").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("button.btn-logo span").toggleClass("fa-bars fa-times");
    disableScroll();
    $("nav.right-nav").css("transform", "translateX(0px)");
    body.css("padding-left", `${right_nav_width}px`);
    body.css("transition", "all 0.5s");
    body.addClass("body-active");
  });
  $("nav.right-nav").click(function (e) {
    e.stopPropagation();
  });
  //--//Close right-nav
  body.click(function (e) {
      
      e.preventDefault();
      if (body.hasClass("body-active") === true) {
        $("button.btn-logo span").toggleClass("fa-bars fa-times");
        $("nav.right-nav").css("transform", `translateX(-${right_nav_width}px)`);
        body.css("padding-left", "0");
        body.css("transition", "all 0.5s");
        body.removeClass("body-active");
        enableScroll();
      }
    
  });

  //--//Dropdowm right-nav
  $("nav.right-nav > ul > li").click(function (e) {
    e.preventDefault();
    $("ul.right-dropdown").stop().slideUp(400);
    $(this).children("ul.right-dropdown").stop().slideToggle(400);
  });

  //.Header-nav-bar
  $("select#product-cate-search").change(function (e) {
    e.preventDefault();
    let select_content = $("select#product-cate-search option:selected").text();
    // console.log(select_content);
    let len = select_content.trim().length;
    // console.log(len);
    if (len < 14) {
      $("select#product-cate-search").width(len * 8.5);
    } else {
      $("select#product-cate-search").width(len * 8.8 - 10);
    }
  });
  //==================== MAIN =======================
  ////***** ========== Slider ========== *****////
  $("#slider").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    dots: true,
    mouseDrag: false,
    autoplayTimeout: 3000,
  });
  ////*****========== MAIN-CONTENT ========== *****////
  ////========== Render product Toggle ==========
  const products = [
    {
      id: 1,
      type: "featured",
      category: ["Audio Speakers"],
      title: "  AWirelessudioSystem Multiroom 360",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg",
      discount: 0,
      price: 2290.99,
      more: "readmore",
    },
    {
      id: 2,
      type: "featured",
      category: ["Laptops"],
      title: "Tablet White EliteBook Revolve 810 G2",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
      discount: 0,
      price: 1300,
      more: "addtocart",
    },
    {
      id: 3,
      type: "featured",
      category: ["Headphones"],
      title: "Purple Solo 2 Wireless",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      discount: 0,
      price: 248,
      more: "addtocart",
    },
    {
      id: 4,
      type: "featured",
      category: ["Laptops", "Ultrabooks"],
      title: "Tablet White EliteBook Revolve 810 G2",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
      discount: 2100,
      price: 2290,
      more: "readmore",
    },
    {
      id: 5,
      type: "featured",
      category: ["Headphones"],
      title: "White Solo 2 Wireless",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      discount: 0,
      price: 248.99,
      more: "addtocart",
    },
    {
      id: 6,
      type: "featured",
      category: ["Smartphones"],
      title: "Smartphone 6S 32GB LTE",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GoldPhone-300x300.jpg",
      discount: 1100,
      price: 1215,
      more: "addtocart",
    },
    {
      id: 7,
      type: "featured",
      category: ["Cameras"],
      title: "Purple NX Mini F1 aparat SMART NX",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Photocamera-300x300.jpg",
      discount: 0,
      price: 559,
      more: "addtocart",
    },
    {
      id: 8,
      type: "featured",
      category: ["Printers"],
      title: "Full Color LaserJet Pro M452dn",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Printer-300x300.jpg",
      discount: 0,
      price: 1050,
      more: "addtocart",
    },
    {
      id: 9,
      type: "onsale",
      category: ["Printers"],
      title: "Ultra Wireless S50 Headphones S50 with Bluetooth",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      discount: 30,
      price: 35,
      more: "addtocart",
    },
    {
      id: 10,
      type: "onsale",
      category: ["Printers"],
      title: "Aerocool EN52377 Dead Silence Gaming Cube Case",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Printer-300x300.jpg",
      discount: 150,
      price: 180,
      more: "readmore",
    },
    {
      id: 11,
      type: "onsale",
      category: ["Smartphones"],
      title: "Smartphone 6S 32GB LTE",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GoldPhone-300x300.jpg",
      discount: 1100,
      price: 1215,
      more: "addtocart",
    },
    {
      id: 12,
      type: "onsale",
      category: ["Power Banks"],
      title: "Powerbank 1130 mAh Blue",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/MobileBank-300x300.jpg",
      discount: 200,
      price: 210,
      more: "addtocart",
    },
    {
      id: 13,
      type: "onsale",
      category: ["Smartwatches"],
      title: "Smartwatch 2.0 LTE Wifi Waterproof",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Smartwatch2-300x300.jpg",
      discount: 700,
      price: 725,
      more: "addtocart",
    },
    {
      id: 14,
      type: "onsale",
      category: ["Game Consoles"],
      title: "Game Console Controller + USB 3.0 Cable",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg",
      discount: 90,
      price: 99,
      more: "addtocart",
    },
    {
      id: 15,
      type: "onsale",
      category: ["Laptops", "ultrabooks"],
      title: "Tablet Red EliteBook Revolve 810 G2",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
      discount: 2100,
      price: 2299,
      more: "readmore",
    },
    {
      id: 16,
      type: "onsale",
      category: ["Game Consoles", "gaming"],
      title: "GameConsole Destiny Special Edition",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GameStation-300x300.jpg",
      discount: 140,
      price: 150,
      more: "readmore",
    },
    {
      id: 17,
      type: "onsale",
      category: ["Mac computuers"],
      title: "Apple MacBook Pro MF841HN/A 13-inch Laptop",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/macbook-pro-300x300.jpg",
      discount: 1500,
      price: 1800,
      more: "addtocart",
    },
    {
      id: 18,
      type: "onsale",
      category: ["Smartphones"],
      title: "Smartphone 6S 128GB LTE",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Smartphone7-300x300.jpg",
      discount: 750,
      price: 780,
      more: "addtocart",
    },
    {
      id: 19,
      type: "onsale",
      category: ["Smartphones"],
      title: "Smartwatch 2.0 LTE Wifi Waterproof",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Smartphone2-300x300.jpg",
      discount: 190,
      price: 200,
      more: "addtocart",
    },
    {
      id: 20,
      type: "onsale",
      category: ["Smartphones"],
      title: "Smartwatch 2.0 LTE Wifi Waterproof",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GoldPhone-300x300.jpg",
      discount: 1999,
      price: 2299,
      more: "addtocart",
    },
    {
      id: 21,
      type: "toprated",
      category: ["Audio Speakers"],
      title: "Wireless Audio System Multiroom 360",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg",
      discount: 0,
      price: 2299,
      more: "readmore",
    },
    {
      id: 22,
      type: "toprated",
      category: ["Laptops"],
      title: "Tablet White EliteBook Revolve 810 G2",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
      discount: 0,
      price: 1300,
      more: "addtocart",
    },
    {
      id: 23,
      type: "toprated",
      category: ["Headphones"],
      title: "Purple Solo 2 Wireless",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      discount: 0,
      price: 248,
      more: "addtocart",
    },
    {
      id: 24,
      type: "toprated",
      category: ["Laptops"],
      title: "Notebook Widescreen Y700-17 GF790",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg",
      discount: 0,
      price: 1299,
      more: "addtocart",
    },
    {
      id: 25,
      type: "toprated",
      category: ["Laptops"],
      title: "Laptop WiFi CX61 2QF 15.6″ 4210M",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg",
      discount: 0,
      price: 2299,
      more: "addtocart",
    },
    {
      id: 26,
      type: "toprated",
      category: ["Laptops"],
      title: "Laptop Screener CX70 2QF-621XPL 17.3″ 4210",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop2-300x300.jpg",
      discount: 0,
      price: 2399,
      more: "addtocart",
    },
  ];
  $("#products-carousel-tabs-list").owlCarousel({
    items: 5,
    loop: false,
    dots: true,
    navText: false,
  });
  const filter_products = products.filter((val) => {
    return val.type === "featured";
  });
  render_main_products(
    filter_products,
    "#products-carousel-tabs-list",
    filter_products.length
  );
  //               ========== Re-Render product toggle ==========
  $("li.nav-items > a").click(function (e) {
    e.preventDefault();
    if (!$(this).hasClass("nav-item-active")) {
      $(".products-carousel-tabs>ul")
        .find("a.nav-item-active")
        .removeClass("nav-item-active");
      $(this).addClass("nav-item-active");
      empty_products("#products-carousel-tabs-list");
      // $("#products-carousel-tabs-list").trigger("refresh.owl.carousel");
      const text = $(this).text();
      const filter_data = format_text(text);
      const filter_products_2 = products.filter((val) => {
        return val.type === filter_data;
      });
      var $owl = $("#products-carousel-tabs-list");
      $owl.trigger("destroy.owl.carousel");
      $owl.html($owl.find(".owl-stage-outer").html()).removeClass("owl-loaded");
      $owl.owlCarousel({
        items: 5,
        loop: false,
        dots: true,
        responsive: false,
      });
      console.log(filter_products_2);
      render_main_products(
        filter_products_2,
        "#products-carousel-tabs-list",
        filter_products_2.length
      );
    }
  });

  //============ ONSALE PRODUCT CAROUSEL ============
  const onsale_show_product = [
    {
      id: 1,
      title: "Game Console Controller + USB 3.0 Cable",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-600x550.jpg",
      price: 99,
      discount: 90,
    },
    {
      id: 2,
      title: "Ultra Wireless S50 Headphones S50 with Bluetooth",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-600x550.jpg",
      price: 35,
      discount: 30,
      AlreadySold: 20,
      Available: 10,
    },
    {
      id: 3,
      title: "GameConsole Destiny Special Edition",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GameStation-600x550.jpg",
      price: 150,
      discount: 140,
    },
    {
      id: 4,
      title: "Laptop Yoga 21 80JH0035GE W8.1",
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Smartphone2-600x550.jpg",
      price: 200,
      discount: 190,
      AlreadySold: 1,
      Available: 12,
    },
  ];
  $(".onsale-carousel-list").owlCarousel({
    items: 2,
    loop: false,
    dots: false,
    margin: 10,
  });
  render_onsale_main_products(onsale_show_product, ".onsale-carousel-list");

  //========= COUNT DOWN ========
  let date_temp = new Date();
  console.log(date_temp);
  const deadline_date = (x_hours) => {
    //Kiem tra ngay co bi dich qa sang hom sau khong
    //Vdu: 10h toi se thanh 22h
    //=> tgian khuyen mai se chay tu 6h sang cua ngay mai
    return date_temp.getHours() + x_hours >= 24
      ? date_temp.getDate() + 1
      : date_temp.getDate();
  };
  const deadline_hours = (x_hours) => {
    return date_temp.getHours() + x_hours >= 24
      ? date_temp.getHours() + x_hours - 24
      : date_temp.getHours() + x_hours;
  };
  const deadline_mins = (x_mins) => {
    return date_temp.getMinutes() + x_mins > 60
      ? date_temp.getMinutes() + x_mins - 60
      : date_temp.getMinutes() + x_mins;
  };
  const deadline_secs = (x_secs) => {
    return date_temp.getSeconds() + x_secs > 60
      ? date_temp.getSeconds() + x_secs - 60
      : date_temp.getSeconds() + x_secs;
  };
  const deadline = new Date(
    `${date_temp.getMonth() + 1} ${deadline_date(
      8
    )}, ${date_temp.getFullYear()} ${deadline_hours(8)}:${deadline_mins(
      19
    )}:${deadline_secs(15)}`
  );
  console.log(deadline);
  setInterval(() => {
    const date = new Date();
    const t = deadline.getTime() - date.getTime();
    let day = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    $(".hours > .value").text(`${hours}`);
    $(".minutes > .value").text(`0${mins}`.slice(-2));
    $(".seconds > .value").text(`0${secs}`.slice(-2));
  }, 1000);

  //============ List 3 ============
  $("#list3-1, #list3-2").owlCarousel({
    items: 4,
    loop: false,
    dots: true,
    responsive: false,
    mouseDrag: false,
  });
  const list3 = products.filter((val) => {
    return val.type === "toprated";
  });
  render_main_products(list3, "#list3-1", 4);
  render_main_products(list3.reverse(), "#list3-2", 4);

  //============ List 4 ============
  $(".list4-1, .list4-2").owlCarousel({
    items: 5,
    loop: false,
    dots: true,
    responsive: false,
    navText: [
      `<i class="fas fa-angle-left" aria-hidden="true"></i>`,
      `<i class="fas fa-angle-right" aria-hidden="true"></i>`,
    ],
  });
  const list4_1 = products.filter((val) => {
    return val.type === "featured";
  });
  const list4_2 = products.filter((val) => {
    return val.type === "onsale";
  });
  render_main_products(list4_1, ".list4-1", list4_1.length);
  render_main_products(list4_2, ".list4-2", list4_2.length);
  shownav(".list4-1, .list4-2");

  ////*****========== SIDE-BAR ========== *****////
  //============ Side list 1 ============
  render_side_bar_products_1(list4_2, ".side-bar-list-1", 5);
  const wiget_1_list = [
    {
      id: 1,
      strong: "Free Delivery",
      lighter: "from $50",
      icon: "fas fa-shuttle-van",
    },
    {
      id: 2,
      strong: "99% Positive",
      lighter: "Feedbacks",
      icon: "fas fa-thumbs-up",
    },
    {
      id: 3,
      strong: "365 days",
      lighter: "for free return",
      icon: "fas fa-sync",
    },
    {
      id: 4,
      strong: "Payment",
      lighter: "Secure System",
      icon: "fas fa-money-check-alt",
    },
    {
      id: 5,
      strong: "Only Best",
      lighter: "Brands",
      icon: "fas fa-tags",
    },
  ];
  //============ Side widget ============
  render_widget(wiget_1_list, ".widget-side-1", 5);
  //============ Side list 2 ============
  $(".side-bar-list-2").owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    responsive: false,
    navText: [
      `<i class="fas fa-angle-left" aria-hidden="true"></i>`,
      `<i class="fas fa-angle-right" aria-hidden="true"></i>`,
    ],
  });
  render_side_bar_products_2_owl(list4_2, ".side-bar-list-2", 5);
  shownav(".side-bar-list-2");
  //============ Side Blog ============
  const blog = [
    {
      id: 1,
      category: ["Design", "Technology", "Uncategorized", "March 4, 2016"],
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/02/1.jpg",
      title: "Robot Wars – Post with Gallery",
      number_cmt: 3,
    },
    {
      id: 2,
      category: ["Design", "News", "Uncategorized", "March 3, 2016"],
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/02/6-e1457115765230.jpg",
      title: "Robot Wars – Now Closed – Post with Audio",
      number_cmt: 0,
    },
    {
      id: 3,
      category: ["Uncategorized", "Videos", "March 3, 2016"],
      img_link:
        "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/video-format.jpg",
      title: "Robot Wars – Now Closed – Post with Video",
      number_cmt: 0,
    },
  ];
  $(".blog").owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    responsive: false,
    navText: [
      `<i class="fas fa-angle-left" aria-hidden="true"></i>`,
      `<i class="fas fa-angle-right" aria-hidden="true"></i>`,
    ],
  });
  render_side_bar_blog(blog, ".blog", blog.length);
  shownav(".blog");
  ////*****========== MOVE TO TOP ========== *****////
  $(window).scroll(function () {
    const current_position = $("html").scrollTop();
    // console.log(current_position);
    if (current_position > 350) {
      $(".movetotop").fadeIn();
    } else {
      $(".movetotop").fadeOut();
    }
  });
  $(".movetotop").click(function (e) {
    e.preventDefault();
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000,
      "easeOutCubic"
    );
  });
});

////*****========== FUNCTION MAIN-CONTENT ========== *****////
// <a href="">${item.category}</a>
// ${item.category.map((val) => <a href="">${val}</a>)}
const render_main_products = (list, selector, number_products) => {
  let i = random_first_number_products(list, number_products);
  let step = i + number_products;
  for (i; i < step; i++) {
    $(selector)
      .owlCarousel(
        "add",
        `<div class="item">
        <div class="product-content">
          <div class="product-categories">
            <a href="">${list[i].category}</a>
          </div>
          <a href="">
            <span class="title">${list[i].title}</span>
            <img class="product-link" src="${list[i].img_link}" alt="" />
          </a>
          <div class="price-add-to-cart flex j-between a-center">
            ${discount_price_product(list[i].price, list[i].discount)}
            <div class="btn-readmore">
              <a href="">
                ${readmore_addtocart(list[i].more)}
              </a>
            </div>    
          </div>
          <div class="hover-area flex j-around">
            <a href="">
              <i class="far fa-heart"></i>
              <span>Wishlist</span>
            </a>
            <a href="">
              <i class="fas fa-sync"></i>
              <span>Compare</span>
            </a>
          </div>
        </div>
      </div>`
      )
      .owlCarousel("update");
  }
  $(selector).trigger("refresh.owl.carousel");
};

const render_onsale_main_products = (list, selector) => {
  list.forEach((item) => {
    $(selector)
      .owlCarousel(
        "add",
        ` <div class="onsale-item">
    <div class="onsale-content flex">
      <div class="image">
        <img
          src="${item.img_link}"
          alt=""
        />
        <div class="saving">
          <div class="saving-text">
            <p>Save</p>
            <div class="depletion-amount">
              <span>$${format_money(item.price - item.discount)}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="onsale-context">
        <a href="">${item.title}</a>
        <div class="price-discount">
          <del class="price">$${format_money(item.price)}</del>
          <ins class="discount">$${format_money(item.discount)}</ins>
        </div>
        ${
          item.AlreadySold != undefined && item.Available != undefined
            ? `<div class="deal-rest">
            <span class="stock-sold">
              Already Sold:
              <strong>${item.AlreadySold}</strong>
            </span>
            <span class="stock-available">
              Available:
              <strong>${item.Available}</strong>
            </span>
          </div>
          <div class="progress">
            <span class="progress-bar" style="width: ${
              (item.AlreadySold / (item.AlreadySold + item.Available)) * 100
            }%"></span>
          </div>`
            : ""
        }
        <p class="onsale-text">Hurry Up! Offer ends in:</p>
        <div class="deal-countdown flex a-center j-center">
          <div class="hours">
            <div class="value"></div>
            <b>hours</b>
          </div>
          <div class="minutes">
            <div class="value"></div>
            <b>mins</b>
          </div>
          <div class="seconds">
            <div class="value"></div>
            <b>secs</b>
          </div>
        </div>
      </div>
    </div>
  </div>`
      )
      .owlCarousel("update");
  });
  $(selector).trigger("refresh.owl.carousel");
};

//*** SHOW OWL NAV ***/
const shownav = (selector) => {
  $(selector).find(".owl-nav").removeClass("disabled");
  $(selector).on("changed.owl.carousel", function (event) {
    $(this).find(".owl-nav").removeClass("disabled");
  });
};

//*** Read more and Add to cart icon***/
const readmore_addtocart = (item_readmore) => {
  if (item_readmore === "readmore") {
    return `<i class="fas fa-long-arrow-alt-right"></i>
             <span>Read more</span>`;
  } else if (item_readmore === "addtocart") {
    return `<i class="fas fa-cart-arrow-down"></i>
            <span>Add to cart</span>`;
  }
};

////*****========== FUNCTION SIDE_BAR ========== *****////

const render_side_bar_products_1 = (list, selector, number_products) => {
  let i = random_first_number_products(list, number_products);
  let step = i + number_products;
  for (i; i < step; i++) {
    $(`<div class="col">
    <div class="item flex a-start j-between">
      <div class="image">
        <a href="">
          <img
            src="${list[i].img_link}"
            alt=""
          />
        </a>
      </div>
      <div class="content">
        <a href="">
          <span class="product-title">${list[i].title}</span>
        </a>
        <span class="start-rating"></span>
        ${price_discount_product(list[i].price, list[i].discount)}
      </div>
    </div>
  </div>`).appendTo(selector);
  }
};

const render_widget = (list, selector, number_products) => {
  let i = random_first_number_products(list, number_products);
  let step = i + number_products;
  for (i; i < step; i++) {
    $(` <div class="feature flex a-center j-between">
    <div class="feature-icon">
      <i class="${list[i].icon}"></i>
    </div>
    <div class="feature-text">
      <strong>${list[i].strong}</strong> ${list[i].lighter}
    </div>
  </div>`).appendTo(selector);
  }
};

const render_side_bar_products_2_owl = (list, selector, number_products) => {
  let i = random_first_number_products(list, number_products);
  let step = i + number_products;
  for (i; i < step; i++) {
    $(selector)
      .owlCarousel(
        "add",
        ` <div class="item">
        <a class="img" href="">
          <img
            src="${list[i].img_link}"
            alt=""
          />
        </a>
    <div class="product-categories">
      <a href="">${list[i].category}</a>
    </div>
    <h2><a href="">${list[i].title}</a></h2>
    ${discount_price_product(list[i].price, list[i].discount)}
  </div>`
      )
      .owlCarousel("update");
    $(selector).trigger("refresh.owl.carousel");
  }
};

const render_side_bar_blog = (list, selector, number_products) => {
  let i = random_first_number_products(list, number_products);
  let step = i + number_products;
  for (i; i < step; i++) {
    $(selector)
      .owlCarousel(
        "add",
        `  <div class="item">
        <a href="">
          <img
            src="${list[i].img_link}"
            alt=""
          />
        </a>
        <div class="product-categories">
          <a href="">${list[i].category.join(" ")}</a>
        </div>
        <h2>
          <a href="">${list[i].title}</a>
        </h2>
        <div class="comment">
          <a href=""><i class="far fa-comment"></i> ${
            list[i].number_cmt == 0 ? "Leave a comment" : list[i].number_cmt
          }</a>
        </div>
      </div>`
      )
      .owlCarousel("update");
    $(selector).trigger("refresh.owl.carousel");
  }
};

////*****========== THEME ========== *****////
const empty_products = (seletor) => {
  $(seletor).empty();
};

const format_text = (text) => {
  let temp = text.toLowerCase().split(" ").join("");
  return temp;
};

const format_money = (money) => {
  return money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const random_first_number_products = (list, number_products) => {
  return Math.floor(Math.random() * (list.length - number_products));
};

//*** DISCOUNT and PRICE of Product Item ***/
const discount_price_product = (item_price, item_discount) => {
  return item_discount === 0 || item_discount === undefined
    ? `
            <div class="discount-price">
              <span class="current-price">
                $${format_money(item_price)} 
              </span>
            </div>
          `
    : `<div class="discount-price">
              <ins class="discount">
                $${format_money(item_discount)} 
              </ins>
              <del class="price">
                $${format_money(item_price)} 
              </del>
            </div>`;
};

//*** PRICE and DISCOUNT of Product Item ***/
const price_discount_product = (item_price, item_discount) => {
  return item_discount === 0 || item_discount === undefined
    ? `
            <div class="price-discount">
              <span class="current-price">
                $${format_money(item_price)} 
              </span>
            </div>
          `
    : `<div class="price-discount">
              <del class="price">
                $${format_money(item_price)} 
              </del>
              <ins class="discount">
                $${format_money(item_discount)} 
              </ins>
            </div>`;
};
